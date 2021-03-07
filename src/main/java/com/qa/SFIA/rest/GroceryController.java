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

import com.qa.SFIA.persistence.domain.Grocery;
import com.qa.SFIA.service.GroceryService;

@CrossOrigin
@RestController
public class GroceryController {
	
	private GroceryService service;

	public GroceryController(GroceryService service) {
		super();
		this.service = service;
	}
	
	@PostMapping("/createGrocery")
	public ResponseEntity<Grocery> createGrocery(@RequestBody Grocery grocery) {
		return new ResponseEntity<Grocery>(this.service.createGrocery(grocery), HttpStatus.CREATED);	
	}
	
	@GetMapping("/getGroceries")
	public ResponseEntity<List<Grocery>> getGroceries() {
		return ResponseEntity.ok(this.service.getGroceries());
		
		
	}
	
	@PutMapping("/updateGrocery/{id}")
	public ResponseEntity<Grocery> updateGrocery(@RequestBody Grocery grocery, @PathVariable Long id) {
		return new ResponseEntity<Grocery>(this.service.updateGrocery(grocery, id), HttpStatus.ACCEPTED);
	}
	
	@DeleteMapping("/deleteGrocery/{id}")
	public ResponseEntity<Object> deleteWood(@PathVariable Long id) {
		if (this.service.deleteGrocery(id)) {
			return new ResponseEntity<>(HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
