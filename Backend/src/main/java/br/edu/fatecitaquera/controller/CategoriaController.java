package br.edu.fatecitaquera.controller;

import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.edu.fatecitaquera.model.Brinquedo;
import br.edu.fatecitaquera.model.Categoria;
import br.edu.fatecitaquera.service.CategoriaService;

@RestController
@RequestMapping("/api/categorias")
@CrossOrigin(origins = "http://192.168.0.30:8081")
public class CategoriaController {
	// instancia a classe categoria service 
    @Autowired
    CategoriaService categoriaService;
    
    // chama classe service para listar todos os categorias
    @GetMapping
    public List<Categoria> listAll() {
        return categoriaService.listAll();
    }
    
    // pega dado id e manda para classe service buscar
    @GetMapping("/{id}")
    public Categoria getById(@PathVariable("id") Integer id) {
        return categoriaService.getById(id);
    }
    
    // pega dados do corpo da requisição e passa a classe service para inserir
    @PostMapping
    public Categoria insert(@RequestBody Categoria categoria) {
        return categoriaService.insert(categoria);
    }
    
    // pega corpo da requisição e manada para classe service para atualizar
    @PutMapping("/{id}")
    public Categoria update(@RequestBody Categoria categoria, @PathVariable Integer id) {
        return categoriaService.update(categoria, id);
    }
    
    // pega parametro da requisição e manda para classe servece afim de deletar um categoria
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Integer id) {
        categoriaService.delete(id);
        return ResponseEntity.noContent().build();
    }
    
    // busca todos os brinquedos por categoria
    @GetMapping("/{id}/brinquedos")
    public ResponseEntity<Set<Brinquedo>> getBrinquedosByCategoria(@PathVariable Integer id) {
        Set<Brinquedo> brinquedos = categoriaService.getBrinquedosByCategoria(id);
        return ResponseEntity.ok(brinquedos);
    }

}
