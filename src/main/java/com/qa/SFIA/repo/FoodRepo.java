package com.qa.SFIA.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.qa.SFIA.food.Food;

@Repository
public interface FoodRepo extends JpaRepository<Food, Long> {


}