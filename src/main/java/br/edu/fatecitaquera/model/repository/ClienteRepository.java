package br.edu.fatecitaquera.model.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import br.edu.fatecitaquera.model.Cliente;

public interface ClienteRepository extends JpaRepository<Cliente, Integer> {

	// pesquisa por nome
	Cliente findByNome(String nome);

	// lista de Clientes pelo primeiro nome
	List<Cliente> findByNomeStartsWith(String nome);

	// lista de Clientes pelo ultimo nome
	List<Cliente> findByNomeEndsWith(String nome);

	// lista de qualquer Cliente
	List<Cliente> findByNomeContains(String nome);
}