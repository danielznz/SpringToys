package br.edu.fatecitaquera.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "tbbrinquedo")
public class Brinquedo {
	// atributos
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int codBrinquedo;
	private String codigo;
	private String nome;
	private String descricao;
	private String categoria;
	private String valor;
	private String imagem;
	private String detalhes;
	private String marca;

	// construtores
	public Brinquedo() {
	}

	public Brinquedo(int codBrinquedo, String codigo, String nome, String descricao, String categoria, String valor,
			String imagem,
			String detalhes, String marca) {
		super();
		this.codBrinquedo = codBrinquedo;
		this.codigo = codigo;
		this.nome = nome;
		this.descricao = descricao;
		this.valor = valor;
		this.imagem = imagem;
		this.detalhes = detalhes;
		this.marca = marca;
	}

	// getters e setters
	public int getCodBrinquedo() {
		return codBrinquedo;
	}

	public void setCodBrinquedo(int codBrinquedo) {
		this.codBrinquedo = codBrinquedo;
	}

	public String getCodigo() {
		return codigo;
	}

	public void setCodigo(String codigo) {
		this.codigo = codigo;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public String getCategoria() {
		return categoria;
	}

	public void setCategoria(String categoria) {
		this.categoria = categoria;
	}

	public String getValor() {
		return valor;
	}

	public void setValor(String valor) {
		this.valor = valor;
	}

	public String getImagem() {
		return imagem;
	}

	public void setImagem(String imagem) {
		this.imagem = imagem;
	}

	public String getDetalhes() {
		return detalhes;
	}

	public void setDetalhes(String detalhes) {
		this.detalhes = detalhes;
	}

	public String getMarca() {
		return marca;
	}

	public void setMarca(String marca) {
		this.marca = marca;
	}
}
