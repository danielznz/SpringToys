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

import br.edu.fatecitaquera.model.repository.BrinquedoRepository;
import br.edu.fatecitaquera.model.Brinquedo;

@Controller
@RequestMapping("/brinquedos")
public class BrinquedoWebController {

	@Autowired
	private BrinquedoRepository brinquedoRepository;

	/* Usar para os brinquedos em destaque */
	@GetMapping("/index")
	public String index() {
		return "index";
	}

	@GetMapping("/list")
	public String listAll(Model model) {
		List<Brinquedo> brinquedos = brinquedoRepository.findAll();
		model.addAttribute("brinquedos", brinquedos);
		return "list";
	}

	@GetMapping("/{id}")
	public String getById(Model model, @PathVariable Integer id) {
		Optional<Brinquedo> brinquedo = brinquedoRepository.findById(id);
		model.addAttribute("brinquedo", brinquedo.get());
		return "read";
	}

	@GetMapping("/new")
	public String newBrinquedo(Model model) {
		model
				.addAttribute("brinquedo", new Brinquedo())
				.addAttribute("novo", true);
		return "form";
	}

	@PostMapping("/save")
	public String saveBrinquedo(Brinquedo brinquedo) {
		brinquedoRepository.save(brinquedo);
		return "redirect:/brinquedos/list";
	}

	@GetMapping("/{id}/delete")
	public String deleteBrinquedo(@PathVariable Integer id) {
		Optional<Brinquedo> brinquedoDelete = brinquedoRepository.findById(id);
		if (brinquedoDelete.isPresent())
			brinquedoRepository.deleteById(id);

		return "redirect:/brinquedos/list";
	}

	@GetMapping("/{id}/edit")
	public String editBrinquedo(Model model, @PathVariable Integer id) {

		Brinquedo brinquedo = brinquedoRepository.findById(id).get();
		model
				.addAttribute("brinquedo", brinquedo)
				.addAttribute("novo", false);

		return "form";
	}
}