package com.delphix.resumemasking

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
class Config : WebMvcConfigurer {

	override fun addCorsMappings(registry: CorsRegistry) {
	  registry.addMapping("/**")
	          .allowedOrigins("*")
	          .allowedMethods("GET", "POST", "PUT", "DELETE", "HEAD", "OPTIONS")
	          .allowCredentials(true);
	}

}
