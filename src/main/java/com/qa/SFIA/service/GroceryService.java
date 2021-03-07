package com.qa.SFIA.service;

import java.util.List;
import java.util.function.IntPredicate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.qa.SFIA.persistence.domain.Grocery;
import com.qa.SFIA.persistence.repo.GroceryRepository;
import com.qa.SFIA.service.exceptions.GroceryNotFoundException;
@Service
public class GroceryService {
	
	@Autowired
	private GroceryRepository repo;

	public GroceryService(GroceryRepository repo) {
		super();
		this.repo = repo;
	}
		
	public Grocery createGrocery(Grocery grocery) {
		return this.repo.save(grocery);
	}

	public List<Grocery> getGroceries() {
		return this.repo.findAll();
	}
	
//	public Grocery updateGrocery(Grocery grocery, Long id) {
//		Optional<Grocery> optGrocery = this.repo.findById(id);
//		Grocery oldGrocery = this.repo.findById(id).orElseThrow();
//		
//		oldGrocery.setGroceryTitle(grocery.getGroceryTitle());
//		oldGrocery.setGroceryPrice(grocery.getGroceryPrice());
//		
//		Grocery saved = this.repo.save(oldGrocery);
//		return saved;
//	}

//	public Grocery updateById(Long id, Grocery newGrocery) {
//
//	
//		Grocery oldGrocery = this.repo.findById(id).orElseThrow(GroceryNotFoundException::new);
//		oldGrocery.setGroceryName(newGrocery.getGroceryName());
//		oldGrocery.setGroceryPrice(newGrocery.getGroceryPrice());
//    	return this.repo.save(oldGrocery);
//}
	public Grocery updateGrocery(Grocery newGrocery, Long id) {

		
		Grocery oldGrocery = this.repo.findById(id).orElseThrow(GroceryNotFoundException::new);
		oldGrocery.setGroceryName(newGrocery.getGroceryName());
		oldGrocery.setGroceryPrice(newGrocery.getGroceryPrice());
    	return this.repo.save(oldGrocery);
}
	
	public boolean deleteGrocery(Long id) {
		this.repo.deleteById(id);
		return !this.repo.existsById(id);
	}


}
