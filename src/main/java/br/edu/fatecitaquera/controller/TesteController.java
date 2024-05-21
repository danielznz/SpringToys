package br.edu.fatecitaquera.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TesteController {

	@GetMapping("/index")
	public String teste() {
		return "<h1>Olá mundo!!!</h1>";
	}
	
	@GetMapping("/soma")
	public String somar(@RequestParam("valorA") int a, 
			            @RequestParam("valorB") int b)  {
			int c = (a+b);
		return ("Soma......: " + c);
	}
	
	@GetMapping("/calculo/{a}/{b}")
	public String calculo(@PathVariable("a") int a, 
			            @PathVariable("b") int b)  {
			int c = (a+b);
		return ("Soma......: " + c);
	}
	
	

}
