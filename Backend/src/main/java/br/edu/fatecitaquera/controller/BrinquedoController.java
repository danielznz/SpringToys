package br.edu.fatecitaquera.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
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
import br.edu.fatecitaquera.service.BrinquedoService;

@RestController
@RequestMapping("/api/brinquedos")
@CrossOrigin(origins = "http://192.168.0.30:8081")
public class BrinquedoController {
    // instancia a classe brinquedo service
    @Autowired
    BrinquedoService brinquedoService;

    // chama classe service para listar todos os brinquedos
    @GetMapping
    public List<Brinquedo> listAll() {
        return brinquedoService.listAll();
    }

    // pega dado id e manda para classe service buscar
    @GetMapping("/{id}")
    public Brinquedo getById(@PathVariable("id") Integer id) {
        return brinquedoService.getById(id);
    }

    // pega dados do corpo da requisição e passa a classe service para inserir
    @PostMapping
    public Brinquedo insert(@RequestBody Brinquedo brinquedo) {
        return brinquedoService.insert(brinquedo);
    }

    // pega corpo da requisição e manda para classe service para atualizar
    @PutMapping("/{id}")
    public Brinquedo update(@RequestBody Brinquedo brinquedo, @PathVariable Integer id) {
        return brinquedoService.update(brinquedo, id);
    }

    @PutMapping("/{codBrinquedo}/categorias/{codCategoria}")
    public Brinquedo CategoriaNoBrinquedo(@PathVariable Integer codBrinquedo,
            @PathVariable Integer codCategoria) {
        return brinquedoService.CategoriaNoBrinquedo(codBrinquedo, codCategoria);
    }

    @DeleteMapping("/{codBrinquedo}/categorias/{codCategoria}")
    public Brinquedo removerCategoriaDoBrinquedo(@PathVariable Integer codBrinquedo,
            @PathVariable Integer codCategoria) {
        return brinquedoService.removerCategoriaDoBrinquedo(codBrinquedo, codCategoria);
    }

    // pega parametro da requisição e manda para classe servece afim de deletar um
    // brinquedo
    @DeleteMapping("/{id}")
    public String delete(@PathVariable Integer id) {
        brinquedoService.delete(id);
        return "Brinquedo excluído com sucesso!";
    }

    // pega nome da requisição e manda para classe service afim de bucar o nome
    @GetMapping("/nome/{nome}")
    public Brinquedo getByNome(@PathVariable String nome) {
        return brinquedoService.getByNome(nome);
    }

    // pega primeiro-nome da requisição e manda para classe service afim de bucar o
    // primeiro nome
    @GetMapping("/primerio-nome/{nome}")
    public List<Brinquedo> getByPrimeiroNome(@PathVariable String nome) {
        return brinquedoService.getByPrimeiroNome(nome);
    }

    // pega ultimo-nome da requisição e manda para classe service afim de bucar o
    // ultimo nome
    @GetMapping("/ultimo-nome/{nome}")
    public List<Brinquedo> getByUltimoNome(@PathVariable String nome) {
        return brinquedoService.getByUltimoNome(nome);
    }

    // pega parte do nome da requisição e manda para classe service afim de bucar
    // qualquer coisa relacionada ao nome
    @GetMapping("/contem-nome/{nome}")
    public List<Brinquedo> getByQualquerNome(@PathVariable String nome) {
        return brinquedoService.getByQualquerNome(nome);
    }

    // send 1 for class service to search toys that are in destaque gastando o
    // english
    @GetMapping("/contem-destaque/{destaque}")
    public List<Brinquedo> getByDestaque(@PathVariable String destaque) {
        return brinquedoService.getByDestaque(destaque);
    }

    // pega numero enviado na requisição e chama classe service para buscar
    // brinquedos abaixo do numero mandado(promocao)
    @GetMapping("/contem-promocao/{valor}")
    public List<Brinquedo> getByPromocao(@PathVariable Double valor) {
        return brinquedoService.getByPromocao(valor);
    }
    
    @GetMapping("/contem-marca/{marca}")
    public List<Brinquedo> getByMarca(@PathVariable String marca) {
        return brinquedoService.getByMarca(marca);
    }

}
