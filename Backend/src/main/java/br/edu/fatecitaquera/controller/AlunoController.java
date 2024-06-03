package br.edu.fatecitaquera.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.edu.fatecitaquera.model.Aluno;
import br.edu.fatecitaquera.model.repository.AlunoRepository;
@RestController
@RequestMapping("/api/alunos")
@CrossOrigin(origins = "http://192.168.0.30:8081")
public class AlunoController {
	/* criando os endpoints
	 * 
	 * GET     /api/alunos       >> listAll()
	 * GET     /api/alunos/id    >> getById()
	 * POST    /api/alunos       >> insert()
	 * PUT     /api/alunos/id    >> update()
	 * DELETE  /api/alunos/id    >> delete()
	 * 
	 */
	
	@Autowired
	AlunoRepository alunoRepository;
	
	// metodo listar todos
	@GetMapping
	public List<Aluno> listAll(){
		List<Aluno> alunos = alunoRepository.findAll();
		return alunos;
	}
	
	// metodo de buscar via id
	@GetMapping("/{id}")
	public Aluno getById(@PathVariable("id") Integer id){
		Aluno aluno = alunoRepository.findById(id).get();
		return aluno;
	}
	
	// metodo de adcionar 
	@PostMapping
	public Aluno insert(@RequestBody Aluno  aluno){
		return alunoRepository.save(aluno);
	}
	
	//metodo de update
	@PutMapping("/{id}")
	public Aluno update(@RequestBody Aluno aluno, @PathVariable Integer id) {
	// obter o aluno a ser atualizado
	Aluno alunoupdate = alunoRepository.findById(id).get();
	// atualizar os dados
	alunoupdate.setNome(aluno.getNome());
	alunoupdate.setEndereco(aluno.getEndereco());
	alunoupdate.setEmail(aluno.getEmail());
	alunoupdate.setDataNascimento(aluno.getDataNascimento());
	alunoupdate.setPeriodo(aluno.getPeriodo());
	alunoRepository.save(alunoupdate);
	return alunoupdate;

	}
	
	//metodo de deletar
	@DeleteMapping("/{id}")
	public String delete(@PathVariable Integer id) {
	alunoRepository.deleteById(id);
	return "Aluno Excluído com Sucesso!";

}

	//metodo de buscar por nome 
	
	@GetMapping("/nome/{nome}")
	public Aluno getByNome(@PathVariable String nome) {
	Aluno alu = alunoRepository.findByNome(nome);
	return alu;
	}
	
	// lista de alunos pelo primeiro nome
	@GetMapping("/primeiro-nome/{nome}")
	public List<Aluno> getByPrimeiroNome(@PathVariable String nome) {
	List<Aluno> alunos = alunoRepository.findByNomeStartsWith(nome);
	return alunos;

	}
	
	// lista de alunos pelo ultimo nome
		@GetMapping("/ultimo-nome/{nome}")
		public List<Aluno> getByUltimoNome(@PathVariable String nome) {
		List<Aluno> alunos = alunoRepository.findByNomeEndsWith(nome);
		return alunos;

		}
		
		
	// lista de alunos por qualquer parte do nome
	@GetMapping("/Contem-nome/{nome}")
	public List<Aluno> getByQualquerNome(@PathVariable String nome) {
		List<Aluno> alunos = alunoRepository.findByNomeContains(nome);
	return alunos;
	}
		
		
	
	
	
	
	
}
