package br.edu.fatecitaquera.model.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import br.edu.fatecitaquera.model.Aluno;

public interface AlunoRepository extends JpaRepository<Aluno, Integer> {

	// metodo abstrato aquele se fecha com ; pois não se desenrrola na classe pai
	Aluno findByNome(String nome);
	
	
	// lista de alunos pelo primeiro nome
	List<Aluno> findByNomeStartsWith(String nome);
	
	
	// lista de alunos pelo ultimo nome
	List<Aluno> findByNomeEndsWith(String nome);
	
	
	// lista de alunos por dependencias nome
	List<Aluno> findByNomeContains(String nome);
			
}
