package com.project.iwidget.Config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer{
	
	@Override
	public void addCorsMappings(CorsRegistry registry) {
		registry.addMapping("/api/**").allowedOrigins("*").allowCredentials(false);
		//registry.addMapping("/**").allowedOrigins("http://localhost:3000");
		registry.addMapping("/auth/**").allowedOrigins("*").allowCredentials(false);
		//registry.addMapping("/**").allowedOrigins("http://localhost:8080").allowCredentials(false);
	}
	
}