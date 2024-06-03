package br.edu.fatecitaquera.model;

import java.util.HashSet;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "tb_categoria")
public class Categoria {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private int codCategoria;
private String categoria;
private String imagem;

@JsonIgnore
@ManyToMany(mappedBy = "categoriasCriadas", fetch = FetchType.EAGER, cascade = CascadeType.REMOVE)
private Set<Brinquedo> brinquedos = new HashSet<>();
// private Set<Brinquedo> brinquedos;

// Get e Set da lista fixa de Brinquedos
public Set<Brinquedo> getBrinquedos() {
return brinquedos;
}

public void setBrinquedos(Set<Brinquedo> brinquedos) {
this.brinquedos = brinquedos;
}

public Categoria() {
}

public Categoria(int codCategoria, String categoria, String imagem) {
super();
this.codCategoria = codCategoria;
this.categoria = categoria;
this.imagem = imagem;
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

public String getImagem() {
return imagem;
}

public void setImagem(String imagem) {
this.imagem = imagem;
}

}