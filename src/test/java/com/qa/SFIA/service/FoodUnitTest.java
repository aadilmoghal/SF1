package com.qa.SFIA.service;

import static org.assertj.core.api.Assertions.assertThat;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.ActiveProfiles;

import com.qa.SFIA.food.Food;
import com.qa.SFIA.repo.FoodRepo;

@SpringBootTest
@ActiveProfiles(profiles = "test")
public class FoodUnitTest {
	
	@Autowired
	private FoodService service;

	@MockBean
	private FoodRepo repo;

	// GIVEN - WHEN - THEN
	@Test
	void testCreate() {
		// GIVEN
		Long id = 1L;
		Food newFood = new Food("Rice", 19.99f);
		Food savedFood = new Food("Rice", 19.99f);
		savedFood.setId(id);

		// WHEN
		Mockito.when(this.repo.save(newFood)).thenReturn(savedFood);

		// THEN
		assertThat(this.service.createFood(newFood)).isEqualTo(savedFood);

		Mockito.verify(this.repo, Mockito.times(1)).save(newFood);
	}

	@Test
	void testUpdate() {
		// GIVEN

		Long id = 1L;

		Food newFood = new Food("Rice", 15.99f);

		Food oldFood = new Food("Lamb", 18.99f);
		oldFood.setId(id);

		Food updatedFood = new Food("Rice", 15.99f);
		updatedFood.setId(id);

		// WHEN
		Mockito.when(this.repo.findById(id)).thenReturn(Optional.of(oldFood));
		Mockito.when(this.repo.save(updatedFood)).thenReturn(updatedFood);

		// THEN
		assertThat(this.service.updateFood(newFood, id)).isEqualTo(updatedFood);

		Mockito.verify(this.repo, Mockito.times(2)).findById(id);
		Mockito.verify(this.repo, Mockito.times(1)).save(updatedFood);
	}

	@Test
	void testGet() {
		// GIVEN
		Food food = new Food("Chicken", 19.99f);
		food.setId(1L); // wood object to match the one in wood-data.sql
		List<Food> foods = new ArrayList<>();
		foods.add(food);

		// WHEN
		Mockito.when(this.repo.findAll()).thenReturn(foods);

		// THEN
		assertThat(this.service.getFoods()).isEqualTo(foods);

		Mockito.verify(this.repo, Mockito.times(1)).findAll();
	}

	@Test
	void testDelete() {
		// GIVEN
		Long id = 1L;
		boolean found = false;

		// WHEN
		Mockito.when(this.repo.existsById(id)).thenReturn(found);

		// THEN
		assertThat(this.service.deleteFood(id)).isEqualTo(!found);

		Mockito.verify(this.repo, Mockito.times(1)).existsById(id);
	}

}
