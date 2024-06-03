package br.edu.fatecitaquera.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.edu.fatecitaquera.model.Brinquedo;
import br.edu.fatecitaquera.model.Categoria;
import br.edu.fatecitaquera.model.repository.BrinquedoRepository;
import br.edu.fatecitaquera.model.repository.CategoriaRepository;

@Service
public class BrinquedoService {

    // instancia classe brinquedo repository
    @Autowired
    private BrinquedoRepository brinquedoRepository;

    @Autowired
    private CategoriaRepository categoriaRepository;

    // busca tudo
    public List<Brinquedo> listAll() {
        return brinquedoRepository.findAll();
    }

    // busca por id
    public Brinquedo getById(Integer id) {
        return brinquedoRepository.findById(id).orElse(null);
    }

    // cadastra novo brinquedo
    public Brinquedo insert(Brinquedo brinquedo) {
        return brinquedoRepository.save(brinquedo);
    }

    // atualiza brinquedo
    public Brinquedo update(Brinquedo brinquedo, Integer id) {
        Brinquedo brinquedoUpdate = brinquedoRepository.findById(id).orElse(null);
        if (brinquedoUpdate != null) {
            brinquedoUpdate.setCodigo(brinquedo.getCodigo());
            brinquedoUpdate.setNome(brinquedo.getNome());
            brinquedoUpdate.setDescricao(brinquedo.getDescricao());
            // brinquedoUpdate.setCategoria(brinquedo.getCategoria());
            brinquedoUpdate.setValor(brinquedo.getValor());
            brinquedoUpdate.setImagem(brinquedo.getImagem());
            brinquedoUpdate.setDetalhes(brinquedo.getDetalhes());
            brinquedoUpdate.setMarca(brinquedo.getMarca());
            brinquedoUpdate.setDestaque(brinquedo.getDestaque());
            brinquedoRepository.save(brinquedoUpdate);
        }
        return brinquedoUpdate;
    }

    public Brinquedo CategoriaNoBrinquedo(Integer codBrinquedo, Integer codCategoria) {
        Brinquedo brinquedo = brinquedoRepository.findById(codBrinquedo).get();
        Categoria categoria = categoriaRepository.findById(codCategoria).get();
        brinquedo.AddCategoria(categoria);
        return brinquedoRepository.save(brinquedo);
    }

    public Brinquedo removerCategoriaDoBrinquedo(Integer codBrinquedo, Integer codCategoria) {
        Brinquedo brinquedo = brinquedoRepository.findById(codBrinquedo).get();
        Categoria categoria = categoriaRepository.findById(codCategoria).get();
        brinquedo.getCategorias().remove(categoria);
        return brinquedoRepository.save(brinquedo);
    }
    

    // delete brinquedo
    public void delete(Integer id) {
        brinquedoRepository.deleteById(id);
    }

    // busca nome do brinquedo
    public Brinquedo getByNome(String nome) {
        return brinquedoRepository.findByNome(nome);
    }

    // busca primeiro nome do brinquedo
    public List<Brinquedo> getByPrimeiroNome(String nome) {
        return brinquedoRepository.findByNomeStartsWith(nome);
    }

    // busca ultimo nome do brinquedo
    public List<Brinquedo> getByUltimoNome(String nome) {
        return brinquedoRepository.findByNomeEndsWith(nome);
    }

    // busca nome qualquer relacionado ao brinquedo
    public List<Brinquedo> getByQualquerNome(String nome) {
        return brinquedoRepository.findByNomeContains(nome);
    }

    // busca todos os brinquedos em destaque
    public List<Brinquedo> getByDestaque(String destaque) {
        return brinquedoRepository.findByDestaqueContains(destaque);
    }

    // busca todos os brinquedos de baixo preÃ§o ou abaixo do valor estipulado
    public List<Brinquedo> getByPromocao(Double valor) {
        return brinquedoRepository.findByValorLessThanEqual(valor);
    }
    
 // busca todos os brinquedos de baixo preÃ§o ou abaixo do valor estipulado
    public List<Brinquedo> getByMarca(String marca) {
        return brinquedoRepository.findByMarcaContains(marca);
    }
}