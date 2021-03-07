package com.qa.SFIA.persistence.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Grocery {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private String groceryName;
	
	private float groceryPrice;
	
	public Grocery() {
		super();
	}

	public Grocery(String groceryName, float groceryPrice) {
		super();
		this.groceryName = groceryName;
		this.groceryPrice = groceryPrice;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getGroceryName() {
		return groceryName;
	}

	public void setGroceryName(String groceryName) {
		this.groceryName = groceryName;
	}

	public float getGroceryPrice() {
		return groceryPrice;
	}

	public void setGroceryPrice(float groceryPrice) {
		this.groceryPrice = groceryPrice;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + Float.floatToIntBits(groceryPrice);
		result = prime * result + ((groceryName == null) ? 0 : groceryName.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Grocery other = (Grocery) obj;
		if (Float.floatToIntBits(groceryPrice) != Float.floatToIntBits(other.groceryPrice))
			return false;
		if (groceryName == null) {
			if (other.groceryName != null)
				return false;
		} else if (!groceryName.equals(other.groceryName))
			return false;
		return true;
	}

	
	
}
