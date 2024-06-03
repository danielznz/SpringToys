package br.edu.fatecitaquera.model.repository;

import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import br.edu.fatecitaquera.model.Brinquedo;
import br.edu.fatecitaquera.model.Categoria;

public interface CategoriaRepository extends JpaRepository<Categoria, Integer> {

	@Query("SELECT c.brinquedos FROM Categoria c WHERE c.id = :categoriaId")
    Set<Brinquedo> findBrinquedosByCategoriaId(@Param("categoriaId") Integer categoriaId);
}