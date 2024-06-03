package br.edu.fatecitaquera.model;

import java.util.HashSet;
import java.util.Set;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "tb_brinquedo")
public class Brinquedo {
	// atributos
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int codBrinquedo;
	private String codigo;
	@Column(name = "nome")
	private String nome;
	private String descricao;
	@Column(name = "valor")
	private Double valor;
	private String imagem;
	private String detalhes;
	@Column(name = "marca")
	private String marca;
	@Column(name = "destaque")
	private String destaque;

	@ManyToMany(fetch = FetchType.EAGER)
	@JoinTable(
			name = "brinquedo_categoria", 
			joinColumns = @JoinColumn(name = "fk_cod_brinquedo"), 
			inverseJoinColumns = @JoinColumn(name = "fk_cod_categoria")
			)
	private Set<Categoria> categoriasCriadas = new HashSet<>();
	// private Set<Categoria> categorias;

	public void AddCategoria(Categoria categoria) {
		categoriasCriadas.add(categoria);
	}

	// Get e Set do conjunto fixo de categorias
	public Set<Categoria> getCategorias() {
		return categoriasCriadas;
	}

	// construtores
	public Brinquedo() {
	}

	public Brinquedo(int codBrinquedo, String codigo, String nome, String descricao, // String categoria,
			Double valor, String imagem, String detalhes, String marca, String destaque) {
		super();
		this.codBrinquedo = codBrinquedo;
		this.codigo = codigo;
		this.nome = nome;
		this.descricao = descricao;
		this.valor = valor;
		this.imagem = imagem;
		this.detalhes = detalhes;
		this.marca = marca;
		this.destaque = destaque;
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

	// public String getCategoria() {
	// return categoria;
	// }

	// public void setCategoria(String categoria) {
	// this.categoria = categoria;
	// }

	public Double getValor() {
		return valor;
	}

	public void setValor(Double valor) {
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

	public String getDestaque() {
		return destaque;
	}

	public void setDestaque(String destaque) {
		this.destaque = destaque;
	}
}