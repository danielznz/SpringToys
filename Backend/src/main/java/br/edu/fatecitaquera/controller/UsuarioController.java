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

import br.edu.fatecitaquera.model.Usuario;
import br.edu.fatecitaquera.service.UsuarioService;

@RestController
@RequestMapping("/api/usuarios")
@CrossOrigin(origins = "http://192.168.0.30:8081")
public class UsuarioController {
	// instancia a classe usuario service 
    @Autowired
    UsuarioService usuarioService;
    
    // chama classe service para listar todos os usuarios
    @GetMapping
    public List<Usuario> listAll() {
        return usuarioService.listAll();
    }
    
    // pega dado id e manda para classe service buscar
    @GetMapping("/{id}")
    public Usuario getById(@PathVariable("id") Integer id) {
        return usuarioService.getById(id);
    }
    
    // pega dados do corpo da requisição e passa a classe service para inserir
    @PostMapping
    public Usuario insert(@RequestBody Usuario usuario) {
        return usuarioService.insert(usuario);
    }
    
    // pega corpo da requisição e manada para classe service para atualizar
    @PutMapping("/{id}")
    public Usuario update(@RequestBody Usuario usuario, @PathVariable Integer id) {
        return usuarioService.update(usuario, id);
    }
    
    // pega parametro da requisição e manda para classe servece afim de deletar um usuario
    @DeleteMapping("/{id}")
    public String delete(@PathVariable Integer id) {
        usuarioService.delete(id);
        return "Usuario excluído com sucesso!";
    }

    // pega nome da requisição e manda para classe service afim de bucar o nome
    @GetMapping("/nome/{nome}")
    public Usuario getByNome(@PathVariable String nome) {
        return usuarioService.getByNome(nome);
    }
    
    // pega primeiro-nome da requisição e manda para classe service afim de bucar o primeiro nome
    @GetMapping("/primerio-nome/{nome}")
    public List<Usuario> getByPrimeiroNome(@PathVariable String nome) {
        return usuarioService.getByPrimeiroNome(nome);
    }
    
    // pega ultimo-nome da requisição e manda para classe service afim de bucar o ultimo nome
    @GetMapping("/ultimo-nome/{nome}")
    public List<Usuario> getByUltimoNome(@PathVariable String nome) {
        return usuarioService.getByUltimoNome(nome);
    }
    
    // pega parte do nome da requisição e manda para classe service afim de bucar qualquer coisa relacionada ao nome
    @GetMapping("/contem-nome/{nome}")
    public List<Usuario> getByQualquerNome(@PathVariable String nome) {
        return usuarioService.getByQualquerNome(nome);
    }
    
    // send 1 for class service to search toys that are in destaque gastando o english 
    @GetMapping("/contem-permissao/{permissao}")
    public List<Usuario> getByPermissao(@PathVariable String permissao) {
        return usuarioService.getByPermissao(permissao);
    }
    
}