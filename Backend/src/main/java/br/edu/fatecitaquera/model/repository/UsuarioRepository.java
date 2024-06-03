package br.edu.fatecitaquera.model.repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import br.edu.fatecitaquera.model.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Integer> {

	//pesquisa por nome
	Usuario findByNome(String nome);
	
	//lista de alunos pelo primesrio nome
	List<Usuario> findByNomeStartsWith(String nome);
	
	//lista de alunos pelo ultimo nome
	List<Usuario> findByNomeEndsWith(String nome);
	
	//lista de qualquer aluno
	List<Usuario> findByNomeContains(String nome);
	
	//lista todos os destaques dos usuarios
	List<Usuario> findByPermissaoContains(String permissao);

}
