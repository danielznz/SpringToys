package br.edu.fatecitaquera.service;

import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.edu.fatecitaquera.model.Brinquedo;
import br.edu.fatecitaquera.model.Categoria;
import br.edu.fatecitaquera.model.repository.CategoriaRepository;
import jakarta.persistence.EntityNotFoundException;

@Service
public class CategoriaService {
	
	// instancia classe categoria repository
    @Autowired
    private CategoriaRepository categoriaRepository;
    
   
    
    // busca tudo
    public List<Categoria> listAll() {
        return categoriaRepository.findAll();
    }
    
    // busca por id
    public Categoria getById(Integer id) {
        return categoriaRepository.findById(id).orElse(null);
    }

    // cadastra novo categoria
    public Categoria insert(Categoria categoria) {
        return categoriaRepository.save(categoria);
    }

    // atualiza categoria
    public Categoria update(Categoria categoria, Integer id) {
        Categoria categoriaUpdate = categoriaRepository.findById(id).orElse(null);
        if (categoriaUpdate != null) {
            categoriaUpdate.setCategoria(categoria.getCategoria());
            categoriaUpdate.setImagem(categoria.getImagem());
            categoriaRepository.save(categoriaUpdate);
        }
        return categoriaUpdate;
    }

    // delete categoria
    public void delete(Integer id) {
    	Optional<Categoria> categoriaOptional = categoriaRepository.findById(id);
        if (categoriaOptional.isPresent()) {
            categoriaRepository.delete(categoriaOptional.get());
        } else {
            throw new EntityNotFoundException("Categoria não encontrada");
        }
        
    }
    
    public Set<Brinquedo> getBrinquedosByCategoria(Integer categoriaId) {
        return categoriaRepository.findBrinquedosByCategoriaId(categoriaId);
    }
}
