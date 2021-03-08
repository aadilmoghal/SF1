package com.qa.SFIA.rest;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.http.MediaType;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.jdbc.Sql;
import org.springframework.test.context.jdbc.Sql.ExecutionPhase;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.ResultMatcher;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.qa.SFIA.food.Food;

@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
@AutoConfigureMockMvc
@Sql(scripts = { "classpath:food-schema.sql",
"classpath:food-data.sql" }, executionPhase = ExecutionPhase.BEFORE_TEST_METHOD)
@ActiveProfiles(profiles = "testing") //
public class FoodIntegrationTest {

	@Autowired
	private MockMvc mockMVC;
	
	@Autowired 
	private ObjectMapper mapper;
	
	@Test
	void testCreate() throws Exception {
		Food newFood = new Food("Rice", 15.99f); // -------> Creating a new food entity
		String requestBody = this.mapper.writeValueAsString(newFood); 
		RequestBuilder request = post("/createFood").contentType(MediaType.APPLICATION_JSON).content(requestBody);
		
		ResultMatcher checkStatus = status().is(201);// -------> This is a checker to see if it has been created
		
		Food savedFood = new Food("Rice", 15.99f);
		savedFood.setId(2L); // -------> This will change the id to 2
		
		String resultBody = this.mapper.writeValueAsString(savedFood);
		ResultMatcher checkBody = content().json(resultBody);
		
		this.mockMVC.perform(request).andExpect(checkStatus).andExpect(checkBody); // send request, check if created 
		
		MvcResult result = this.mockMVC.perform(request).andExpect(checkStatus).andReturn();

		String reqBody = result.getResponse().getContentAsString();

		Food foodResult = this.mapper.readValue(reqBody, Food.class);
	}
	
	
	
	
	@Test
	void testRead() throws Exception {
		Food food = new Food("Chicken", 19.99f);
		food.setId(1L); 
		List<Food> foods = new ArrayList<>();
		foods.add(food);
		String responseBody = this.mapper.writeValueAsString(foods);

		this.mockMVC.perform(get("/getFoods")).andExpect(status().isOk()).andExpect(content().json(responseBody));
	}	
	
	@Test
	void testUpdate() throws Exception {
		Food newFood = new Food("Rice", 15.99f);
		String requestBody = this.mapper.writeValueAsString(newFood);
		RequestBuilder request = put("/updateFood/1").contentType(MediaType.APPLICATION_JSON).content(requestBody);
		
		ResultMatcher checkStatus = status().isAccepted();
		
		Food savedFood = new Food("Rice", 15.99f);
		savedFood.setId(1L);
		
		String resultBody = this.mapper.writeValueAsString(savedFood);
		ResultMatcher checkBody = content().json(resultBody);

		this.mockMVC.perform(request).andExpect(checkStatus).andExpect(checkBody);
	}
	
	@Test
	void testDelete() throws Exception {
		RequestBuilder request = delete("/deleteFood/1");

		ResultMatcher checkStatus = status().is(200);

		this.mockMVC.perform(request).andExpect(checkStatus);
	}
	
	

}
