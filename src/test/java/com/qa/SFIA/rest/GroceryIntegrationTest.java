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
import com.qa.SFIA.persistence.domain.Grocery;

@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
@AutoConfigureMockMvc
@Sql(scripts = { "classpath:grocery-schema.sql",
"classpath:grocery-data.sql" }, executionPhase = ExecutionPhase.BEFORE_TEST_METHOD)
@ActiveProfiles(profiles = "test")
public class GroceryIntegrationTest {

	@Autowired
	private MockMvc mockMVC;
	
	@Autowired 
	private ObjectMapper mapper;
	
	@Test
	void testCreate() throws Exception {
		Grocery newGrocery = new Grocery("Banana", 12.99f); // new grocery
		String requestBody = this.mapper.writeValueAsString(newGrocery); 
		RequestBuilder request = post("/createGrocery").contentType(MediaType.APPLICATION_JSON).content(requestBody);
		
		ResultMatcher checkStatus = status().is(201);// checks if created
		
		Grocery savedGrocery = new Grocery("Banana", 12.99f);
		savedGrocery.setId(2L);
		
		String resultBody = this.mapper.writeValueAsString(savedGrocery);
		ResultMatcher checkBody = content().json(resultBody);
		
		this.mockMVC.perform(request).andExpect(checkStatus).andExpect(checkBody); // send request, check if created 
		
		MvcResult result = this.mockMVC.perform(request).andExpect(checkStatus).andReturn();

		String reqBody = result.getResponse().getContentAsString();

		Grocery groceryResult = this.mapper.readValue(reqBody, Grocery.class);
	}
	
	@Test
	void testUpdate() throws Exception {
		Grocery newGrocery = new Grocery("Banana", 12.99f);
		String requestBody = this.mapper.writeValueAsString(newGrocery);
		RequestBuilder request = put("/updateGrocery/1").contentType(MediaType.APPLICATION_JSON).content(requestBody);
		
		ResultMatcher checkStatus = status().isAccepted();
		
		Grocery savedGrocery = new Grocery("Banana", 12.99f);
		savedGrocery.setId(1L);
		
		String resultBody = this.mapper.writeValueAsString(savedGrocery);
		ResultMatcher checkBody = content().json(resultBody);

		this.mockMVC.perform(request).andExpect(checkStatus).andExpect(checkBody);
	}
	
	@Test
	void testDelete() throws Exception {
		RequestBuilder request = delete("/deleteGrocery/1");

		ResultMatcher checkStatus = status().is(200);

		this.mockMVC.perform(request).andExpect(checkStatus);
	}
	
	@Test
	void testRead() throws Exception {
		Grocery grocery = new Grocery("Mango", 15.99f);
		grocery.setId(1L); 
		List<Grocery> groceries = new ArrayList<>();
		groceries.add(grocery);
		String responseBody = this.mapper.writeValueAsString(groceries);

		this.mockMVC.perform(get("/getGroceries")).andExpect(status().isOk()).andExpect(content().json(responseBody));
	}	
	

}
