package br.edu.fatecitaquera.model.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import br.edu.fatecitaquera.model.Adm;

public interface AdmRepository extends JpaRepository<Adm, Integer> {

	// pesquisa por nome
	Adm findByNome(String usuario);

	// lista de Adms pelo primeiro nome
	List<Adm> findByNomeStartsWith(String usuario);

	// lista de Adms pelo ultimo nome
	List<Adm> findByNomeEndsWith(String usuario);

	// lista de qualquer Adm
	List<Adm> findByNomeContains(String usuario);
}