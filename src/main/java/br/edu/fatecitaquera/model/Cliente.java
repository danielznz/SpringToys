package br.edu.fatecitaquera.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity 
@Table(name="Cliente")
public class Cliente {
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id_cliente;
	private String cpf;
	private String nome;
	private String email;
	private String senha;
	private String telefone;
	private String cep;
	
	public Cliente() {
	}

	public Cliente(int id_cliente, String cpf, String nome, String email, String senha, String telefone, String cep) {
		super();
		this.id_cliente = id_cliente;
		this.cpf = cpf;
		this.nome = nome;
		this.email = email;
		this.senha = senha;
		this.telefone = telefone;
		this.cep = cep;
	}

	public int getId_cliente() {
		return id_cliente;
	}

	public void setId_cliente(int id_cliente) {
		this.id_cliente = id_cliente;
	}

	public String getCpf() {
		return cpf;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}

	public String getTelefone() {
		return telefone;
	}

	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}

	public String getCep() {
		return cep;
	}

	public void setCep(String cep) {
		this.cep = cep;
	}
	
}
