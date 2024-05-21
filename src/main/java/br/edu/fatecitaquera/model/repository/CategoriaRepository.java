package br.edu.fatecitaquera.model.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import br.edu.fatecitaquera.model.Categoria;

public interface CategoriaRepository extends JpaRepository<Categoria, Integer> {

	// pesquisa por categoria
	Categoria findByNome(String categoria);

	// lista de categorias pelo primeiro nome
	List<Categoria> findByNomeStartsWith(String categoria);

	// lista de categorias pelo ultimo nome
	List<Categoria> findByNomeEndsWith(String categoria);

	// lista de qualquer categoria
	List<Categoria> findByNomeContains(String categoria);
}