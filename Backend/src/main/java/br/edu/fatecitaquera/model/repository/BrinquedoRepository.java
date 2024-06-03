package br.edu.fatecitaquera.model.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.edu.fatecitaquera.model.Brinquedo;

@Repository
public interface BrinquedoRepository extends JpaRepository<Brinquedo, Integer> {

	//pesquisa por nome
	Brinquedo findByNome(String nome);
	
	//lista de alunos pelo primesrio nome
	List<Brinquedo> findByNomeStartsWith(String nome);
	
	//lista de alunos pelo ultimo nome
	List<Brinquedo> findByNomeEndsWith(String nome);
	
	//lista de qualquer aluno
	List<Brinquedo> findByNomeContains(String nome);
	
	//lista de qualquer aluno
	List<Brinquedo> findByMarcaContains(String marca);
		
	
	//lista todos os destaques dos brinquedos
	List<Brinquedo> findByDestaqueContains(String destaque);

	//lista todos as promocoes dos brinquedos
	List<Brinquedo> findByValorLessThanEqual(Double valor);
}
