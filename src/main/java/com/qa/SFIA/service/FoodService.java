package com.qa.SFIA.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.qa.SFIA.food.Food;
import com.qa.SFIA.repo.FoodRepo;

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
		Optional<Food> optFood = this.repo.findById(id);
		Food oldFood = this.repo.findById(id).orElseThrow();
		
		oldFood.setFoodTitle(food.getFoodTitle());
		oldFood.setFoodPrice(food.getFoodPrice());
		
		Food saved = this.repo.save(oldFood);
		return saved;
	}

	public boolean deleteFood(Long id) {
		this.repo.deleteById(id);
		return !this.repo.existsById(id);
	}


}
