package com.qa.SFIA.food;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


@Entity
public class Food {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private String foodTitle;
	
	private float foodPrice;
	
	public Food() {
		super();
	}

	public Food(String foodTitle, float foodPrice) {
		super();
		this.foodTitle = foodTitle;
		this.foodPrice = foodPrice;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getFoodTitle() {
		return foodTitle;
	}

	public void setFoodTitle(String foodTitle) {
		this.foodTitle = foodTitle;
	}

	public float getFoodPrice() {
		return foodPrice;
	}

	public void setFoodPrice(float foodPrice) {
		this.foodPrice = foodPrice;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + Float.floatToIntBits(foodPrice);
		result = prime * result + ((foodTitle == null) ? 0 : foodTitle.hashCode());
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
		Food other = (Food) obj;
		if (Float.floatToIntBits(foodPrice) != Float.floatToIntBits(other.foodPrice))
			return false;
		if (foodTitle == null) {
			if (other.foodTitle != null)
				return false;
		} else if (!foodTitle.equals(other.foodTitle))
			return false;
		return true;
	}

	
	
}
