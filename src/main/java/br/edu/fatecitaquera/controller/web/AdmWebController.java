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

import br.edu.fatecitaquera.model.repository.AdmRepository;
import br.edu.fatecitaquera.model.Adm;

@Controller
@RequestMapping("/adms")
public class AdmWebController {

	@Autowired
	private AdmRepository admRepository;

	@GetMapping("/list")
	public String listAll(Model model) {
		List<Adm> adms = admRepository.findAll();
		model.addAttribute("adms", adms);
		return "list";
	}

	@GetMapping("/{id}")
	public String getById(Model model, @PathVariable Integer id) {
		Optional<Adm> adm = admRepository.findById(id);
		model.addAttribute("adm", adm.get());
		return "read";
	}

	@GetMapping("/new")
	public String newAdm(Model model) {
		model
				.addAttribute("adm", new Adm())
				.addAttribute("novo", true);
		return "form";
	}

	@PostMapping("/save")
	public String saveAdm(Adm adm) {
		admRepository.save(adm);
		return "redirect:/adms/list";
	}

	@GetMapping("/{id}/delete")
	public String deleteAdm(@PathVariable Integer id) {
		Optional<Adm> admDelete = admRepository.findById(id);
		if (admDelete.isPresent())
			admRepository.deleteById(id);

		return "redirect:/adms/list";
	}

	@GetMapping("/{id}/edit")
	public String editAdm(Model model, @PathVariable Integer id) {

		Adm adm = admRepository.findById(id).get();
		model
				.addAttribute("adm", adm)
				.addAttribute("novo", false);

		return "form";
	}
}