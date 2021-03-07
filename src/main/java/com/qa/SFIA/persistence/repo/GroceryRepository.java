package com.qa.SFIA.persistence.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.qa.SFIA.persistence.domain.Grocery;

public interface GroceryRepository extends JpaRepository<Grocery, Long> {
	
}