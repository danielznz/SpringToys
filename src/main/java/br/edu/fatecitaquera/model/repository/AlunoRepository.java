package br.edu.fatecitaquera.model.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import br.edu.fatecitaquera.model.Aluno;

public interface AlunoRepository extends JpaRepository<Aluno, Integer> {

	//pesquisa por nome
	Aluno findByNome(String nome);
	
	//lista de alunos pelo primesrio nome
	List<Aluno> findByNomeStartsWith(String nome);
	
	//lista de alunos pelo ultimo nome
	List<Aluno> findByNomeEndsWith(String nome);
	
	//lista de qualquer aluno
	List<Aluno> findByNomeContains(String nome);
}
