package br.edu.fatecitaquera.controller.web;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import br.edu.fatecitaquera.model.repository.CategoriaRepository;
import br.edu.fatecitaquera.model.Categoria;

@Controller
@RequestMapping("/categorias")
public class CategoriaWebController {

	@Autowired
	private CategoriaRepository categoriaRepository;

	@GetMapping("/list")
	public String listAll(Model model) {
		List<Categoria> categorias = categoriaRepository.findAll();
		model.addAttribute("categorias", categorias);
		return "list";
	}

	@GetMapping("/{id}")
	public String getById(Model model, @PathVariable Integer id) {
		Optional<Categoria> categoria = categoriaRepository.findById(id);
		model.addAttribute("categoria", categoria.get());
		return "read";
	}

	@GetMapping("/new")
	public String newCategoria(Model model) {
		model
				.addAttribute("categoria", new Categoria())
				.addAttribute("novo", true);
		return "form";
	}

	@PostMapping("/save")
	public String saveCategoria(Categoria categoria) {
		categoriaRepository.save(categoria);
		return "redirect:/categorias/list";
	}

	@GetMapping("/{id}/delete")
	public String deleteCategoria(@PathVariable Integer id) {
		Optional<Categoria> categoriaDelete = categoriaRepository.findById(id);
		if (categoriaDelete.isPresent())
			categoriaRepository.deleteById(id);

		return "redirect:/categorias/list";
	}

	@GetMapping("/{id}/edit")
	public String editCategoria(Model model, @PathVariable Integer id) {

		Categoria categoria = categoriaRepository.findById(id).get();
		model
				.addAttribute("categoria", categoria)
				.addAttribute("novo", false);

		return "form";
	}
}