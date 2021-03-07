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

import com.qa.SFIA.persistence.domain.Grocery;
import com.qa.SFIA.persistence.repo.GroceryRepository;

@SpringBootTest
@ActiveProfiles(profiles = "test")
public class GroceryUnitTest {
	
	@Autowired
	private GroceryService service;

	@MockBean
	private GroceryRepository repo;

	// GIVEN - WHEN - THEN
	@Test
	void testCreate() {
		// GIVEN
		Long id = 1L;
		Grocery newGrocery = new Grocery("Banana", 12.99f);
		Grocery savedGrocery = new Grocery("Banana", 12.99f);
		savedGrocery.setId(id);

		// WHEN
		Mockito.when(this.repo.save(newGrocery)).thenReturn(savedGrocery);

		// THEN
		assertThat(this.service.createGrocery(newGrocery)).isEqualTo(savedGrocery);

		Mockito.verify(this.repo, Mockito.times(1)).save(newGrocery);
	}

	@Test
	void testUpdate() {
		// GIVEN

		Long id = 1L;

		Grocery newGrocery = new Grocery("Banana", 12.99f);

		Grocery oldGrocery = new Grocery("Apple", 17.99f);
		oldGrocery.setId(id);

		Grocery updatedGrocery = new Grocery("Banana", 12.99f);
		updatedGrocery.setId(id);

		// WHEN
		Mockito.when(this.repo.findById(id)).thenReturn(Optional.of(oldGrocery));
		Mockito.when(this.repo.save(updatedGrocery)).thenReturn(updatedGrocery);

		// THEN
		assertThat(this.service.updateGrocery(newGrocery, id)).isEqualTo(updatedGrocery);

		Mockito.verify(this.repo, Mockito.times(2)).findById(id);
		Mockito.verify(this.repo, Mockito.times(1)).save(updatedGrocery);
	}

	@Test
	void testGet() {
		// GIVEN
		Grocery grocery = new Grocery("Mango", 15.99f);
		grocery.setId(1L); // wood object to match the one in wood-data.sql
		List<Grocery> groceries = new ArrayList<>();
		groceries.add(grocery);

		// WHEN
		Mockito.when(this.repo.findAll()).thenReturn(groceries);

		// THEN
		assertThat(this.service.getGroceries()).isEqualTo(groceries);

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
		assertThat(this.service.deleteGrocery(id)).isEqualTo(!found);

		Mockito.verify(this.repo, Mockito.times(1)).existsById(id);
	}

}
