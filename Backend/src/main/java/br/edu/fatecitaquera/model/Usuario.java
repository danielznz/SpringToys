package br.edu.fatecitaquera.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity 
@Table(name="Usuario")
public class Usuario {
		@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
		private int id_adm;
		private String nome;
		@Column(name="email")
		private String email;
		@Column(name="senha")
		private String senha;
		@Column(name="permissao")
		private String permissao;
		
		public Usuario() {
		}

		public Usuario(int id_adm, String nome, String email, String senha, String permissao) {
			super();
			this.id_adm = id_adm;
			this.nome = nome;
			this.email = email;
			this.senha = senha;
			this.permissao = permissao;
		}
		
		// Getters and Setters
	    public int getId_adm() {
	        return id_adm;
	    }

	    public void setId_adm(int id_adm) {
	        this.id_adm = id_adm;
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

	    public String getPermissao() {
	        return permissao;
	    }

	    public void setPermissao(String permissao) {
	        this.permissao = permissao;
	    }
	
	
	
}
