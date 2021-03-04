package com.qa.SFIA;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import com.qa.SFIA.food.Food;

import nl.jqno.equalsverifier.EqualsVerifier;

@SpringBootTest
class SpringFoodApplicationTests {

	@Test
	void contextLoads() {
	}
	
	@Test
	void coverage() {
		EqualsVerifier.forClass(Food.class).usingGetClass().verify();
	}

}
