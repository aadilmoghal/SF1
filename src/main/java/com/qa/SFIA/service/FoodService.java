package com.qa.SFIA.service;

import java.util.List;
//import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.qa.SFIA.food.Food;
import com.qa.SFIA.repo.FoodRepo;
import com.qa.SFIA.service.exceptions.FoodNotFoundException;

@Service
public class FoodService {
	
	@Autowired
	private FoodRepo repo;

	public FoodService(FoodRepo repo) {
		super();
		this.repo = repo;
	}
		
	public Food createFood(Food food) {
		return this.repo.save(food);
	}

	public List<Food> getFoods() {
		return this.repo.findAll();
	}
	
	public Food updateFood(Food food, Long id) {
		// grabs the thing we want to change from the db
		
//		Optional<Food> optFood = this.repo.findById(id);
		Food oldFood = this.repo.findById(id).orElseThrow(FoodNotFoundException::new);
		
		 // here's the object we want to plug in instead:
		
		oldFood.setFoodTitle(food.getFoodTitle());
		oldFood.setFoodPrice(food.getFoodPrice());
		
		// saves the changed object to the db
		
		Food saved = this.repo.save(oldFood);
		return saved;
	}

	public boolean deleteFood(Long id) {
        // tries to delete the object first
        this.repo.deleteById(id);

        // checks if that object we tried to delete still exists
        return !this.repo.existsById(id);
	}


}
