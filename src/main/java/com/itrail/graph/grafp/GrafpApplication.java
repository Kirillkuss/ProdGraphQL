package com.itrail.graph.grafp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@SpringBootApplication
public class GrafpApplication {

	public static void main(String[] args) {
		SpringApplication.run(GrafpApplication.class, args);
		log.info( "GRAFP START");
	}

}
