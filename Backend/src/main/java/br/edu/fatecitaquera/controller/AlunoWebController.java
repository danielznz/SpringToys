package br.edu.fatecitaquera.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import br.edu.fatecitaquera.model.Aluno;
import br.edu.fatecitaquera.model.repository.AlunoRepository;

@Controller
@RequestMapping("/alunos")
public class AlunoWebController {
	
	@Autowired
	private AlunoRepository alunoRepository;
	
	
	
	@GetMapping("/index")
	public String index(Model model,@RequestParam("nome") String nome) {
		model.addAttribute("nome", nome);
		return "index";
	}
	
	@GetMapping("/list")
	public String listAll(Model model) {
		List<Aluno> alunos = alunoRepository.findAll();
		model.addAttribute("alunos", alunos);
		return "list";
	}

}
