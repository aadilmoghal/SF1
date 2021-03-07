package com.qa.SFIA.config;

import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;

@Configuration 
public class AppConfig {

	@Bean
	
	public ModelMapper mapper() {
		return new ModelMapper();
	}

}
