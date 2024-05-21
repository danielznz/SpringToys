package br.edu.fatecitaquera.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity 
@Table(name="Categoria")
public class Categoria {
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	private int codCategoria;
	private String categoria;
	
	public Categoria() {
	}

	public Categoria(int codCategoria, String categoria) {
		super();
		this.codCategoria = codCategoria;
		this.categoria = categoria;
	}

	public int getCodCategoria() {
		return codCategoria;
	}

	public void setCodCategoria(int codCategoria) {
		this.codCategoria = codCategoria;
	}

	public String getCategoria() {
		return categoria;
	}

	public void setCategoria(String categoria) {
		this.categoria = categoria;
	}
	
}
