package br.edu.fatecitaquera.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.edu.fatecitaquera.model.Brinquedo;
import br.edu.fatecitaquera.model.repository.BrinquedoRepository;

@RestController
@RequestMapping("/api/brinquedos")
public class BrinquedoController {
	/*
	 * criando os endpoints
	 * 
	 * GET /api/brinquedos >> listAll()
	 * GET /api/brinquedos/id >> getById()
	 * POST /api/brinquedos >> insert()
	 * PUT /api/brinquedos/id >> update()
	 * DELETE /api/brinquedos/id >> delete()
	 * 
	 */

	@Autowired
	BrinquedoRepository brinquedoRepository;

	@GetMapping
	public List<Brinquedo> listAll() {
		List<Brinquedo> brinquedos = brinquedoRepository.findAll();
		return brinquedos;
	}

	@GetMapping("/{id}")
	public Brinquedo getById(@PathVariable("id") Integer id) {
		Brinquedo brinquedo = brinquedoRepository.findById(id).get();
		return brinquedo;
	}

	@PostMapping
	public Brinquedo insert(@RequestBody Brinquedo brinquedo) {
		return brinquedoRepository.save(brinquedo);
	}

	@PutMapping("/{id}")
	public Brinquedo update(@RequestBody Brinquedo brinquedo, @PathVariable Integer id) {
		// obter o brinquedo a ser atualizado
		Brinquedo brinquedoUpdate = brinquedoRepository.findById(id).get();
		// atualizar os dados
		brinquedoUpdate.setCodigo(brinquedo.getCodigo());
		brinquedoUpdate.setNome(brinquedo.getNome());
		brinquedoUpdate.setDescricao(brinquedo.getDescricao());
		brinquedoUpdate.setCategoria(brinquedo.getCategoria());
		brinquedoUpdate.setValor(brinquedo.getValor());
		brinquedoUpdate.setImagem(brinquedo.getImagem());
		brinquedoUpdate.setDetalhes(brinquedo.getDetalhes());
		brinquedoUpdate.setMarca(brinquedo.getMarca());
		brinquedoRepository.save(brinquedoUpdate);

		return brinquedoUpdate;
	}

	@DeleteMapping("/{id}")
	public String delete(@PathVariable Integer id) {
		brinquedoRepository.deleteById(id);
		return "brinquedo Excluído com Sucesso!";
	}

	@GetMapping("/nome/{nome}")
	public Brinquedo getByNome(@PathVariable String nome) {
		Brinquedo brinquedo = brinquedoRepository.findByNome(nome);
		return brinquedo;
	}

	@GetMapping("/primerio-nome/{nome}")
	public List<Brinquedo> getByPrimeiroNome(@PathVariable String nome) {
		List<Brinquedo> brinquedos = brinquedoRepository.findByNomeStartsWith(nome);
		return brinquedos;
	}

	@GetMapping("/ultimo-nome/{nome}")
	public List<Brinquedo> getByUltimoNome(@PathVariable String nome) {
		List<Brinquedo> brinquedos = brinquedoRepository.findByNomeEndsWith(nome);
		return brinquedos;
	}

	@GetMapping("/contem-nome/{nome}")
	public List<Brinquedo> getByQualquerNome(@PathVariable String nome) {
		List<Brinquedo> brinquedos = brinquedoRepository.findByNomeContains(nome);
		return brinquedos;
	}

}