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

import br.edu.fatecitaquera.model.repository.ClienteRepository;
import br.edu.fatecitaquera.model.Cliente;

@Controller
@RequestMapping("/clientes")
public class ClienteWebController {

	@Autowired
	private ClienteRepository clienteRepository;

	@GetMapping("/list")
	public String listAll(Model model) {
		List<Cliente> clientes = clienteRepository.findAll();
		model.addAttribute("clientes", clientes);
		return "list";
	}

	@GetMapping("/{id}")
	public String getById(Model model, @PathVariable Integer id) {
		Optional<Cliente> cliente = clienteRepository.findById(id);
		model.addAttribute("cliente", cliente.get());
		return "read";
	}

	@GetMapping("/new")
	public String newCliente(Model model) {
		model
				.addAttribute("cliente", new Cliente())
				.addAttribute("novo", true);
		return "form";
	}

	@PostMapping("/save")
	public String saveCliente(Cliente cliente) {
		clienteRepository.save(cliente);
		return "redirect:/clientes/list";
	}

	@GetMapping("/{id}/delete")
	public String deleteCliente(@PathVariable Integer id) {
		Optional<Cliente> clienteDelete = clienteRepository.findById(id);
		if (clienteDelete.isPresent())
			clienteRepository.deleteById(id);

		return "redirect:/clientes/list";
	}

	@GetMapping("/{id}/edit")
	public String editcliente(Model model, @PathVariable Integer id) {

		Cliente cliente = clienteRepository.findById(id).get();
		model
				.addAttribute("cliente", cliente)
				.addAttribute("novo", false);

		return "form";
	}
}