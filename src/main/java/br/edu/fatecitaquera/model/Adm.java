package br.edu.fatecitaquera.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity 
@Table(name="Adm")
public class Adm {
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id_adm;
	private String usuario;
	private String senha;
	
	public Adm() {
	}

	public Adm(int id_adm, String usuario, String senha) {
		super();
		this.id_adm = id_adm;
		this.usuario = usuario;
		this.senha = senha;
	}

	public int getId_adm() {
		return id_adm;
	}

	public void setId_adm(int id_adm) {
		this.id_adm = id_adm;
	}

	public String getUsuario() {
		return usuario;
	}

	public void setUsuario(String usuario) {
		this.usuario = usuario;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}
	
}
