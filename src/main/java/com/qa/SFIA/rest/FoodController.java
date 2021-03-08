package com.qa.SFIA.rest;

import java.util.List;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.qa.SFIA.food.Food;
import com.qa.SFIA.service.FoodService;

@CrossOrigin
@RestController
public class FoodController {
	// passes things to the service.
	private FoodService service;

	public FoodController(FoodService service) {
		super();
		this.service = service;
	}
	 // create
	@PostMapping("/createFood")
	public ResponseEntity<Food> createFood(@RequestBody Food food) {
		return new ResponseEntity<Food>(this.service.createFood(food), HttpStatus.CREATED);	
	}
	// readAll
	@GetMapping("/getFoods")
	public ResponseEntity<List<Food>> getFoods() {
		return ResponseEntity.ok(this.service.getFoods());
	}
	
//	@PutMapping("/updateFood/{id}")
//	public ResponseEntity<Food> updateFood(@RequestBody Food food, @PathVariable Long id) {
//		return new ResponseEntity<Food>(this.service.updateFood(food, id), HttpStatus.ACCEPTED);
//	}
	// updateById
    @PutMapping("/updateFood/{id}")
    public ResponseEntity<Food> updateFood(@PathVariable Long id, @RequestBody Food food) {
    	Food updatedObject = this.service.updateFood(food, id);
        return new ResponseEntity<>(updatedObject, HttpStatus.ACCEPTED); // 202
    }
	// deleteById
	@DeleteMapping("/deleteFood/{id}")
	public ResponseEntity<Object> deleteWood(@PathVariable Long id) {
		if (this.service.deleteFood(id)) {
			return new ResponseEntity<>(HttpStatus.OK);
		} else {
			return new ResponseEntity<>(this.service.deleteFood(id), HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
// 1xx -
// 2xx - this is fine, something worked
// 3xx -
// 4xx - it's your fault, you've done something dodgy
// 5xx - it's the developer's problem, they've messed up developing the application