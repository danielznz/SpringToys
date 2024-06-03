package br.edu.fatecitaquera.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.edu.fatecitaquera.model.Usuario;
import br.edu.fatecitaquera.model.repository.UsuarioRepository;

@Service
public class UsuarioService {
	
	// instancia classe usuario repository
    @Autowired
    private UsuarioRepository usuarioRepository;
    
    // busca tudo
    public List<Usuario> listAll() {
        return usuarioRepository.findAll();
    }
    
    // busca por id
    public Usuario getById(Integer id) {
        return usuarioRepository.findById(id).orElse(null);
    }

    // cadastra novo usuario
    public Usuario insert(Usuario usuario) {
        return usuarioRepository.save(usuario);
    }

    // atualiza usuario
    public Usuario update(Usuario usuario, Integer id) {
        Usuario usuarioUpdate = usuarioRepository.findById(id).orElse(null);
        if (usuarioUpdate != null) {
            usuarioUpdate.setNome(usuario.getNome());
            usuarioUpdate.setEmail(usuario.getEmail());
            usuarioUpdate.setSenha(usuario.getSenha());
            usuarioUpdate.setPermissao(usuario.getPermissao());
            usuarioRepository.save(usuarioUpdate);
        }
        return usuarioUpdate;
    }

    // delete usuario
    public void delete(Integer id) {
        usuarioRepository.deleteById(id);
    }
    
    // busca nome do usuario
    public Usuario getByNome(String nome) {
        return usuarioRepository.findByNome(nome);
    }
    
    // busca primeiro nome do usuario
    public List<Usuario> getByPrimeiroNome(String nome) {
        return usuarioRepository.findByNomeStartsWith(nome);
    }

    // busca ultimo nome do usuario
    public List<Usuario> getByUltimoNome(String nome) {
        return usuarioRepository.findByNomeEndsWith(nome);
    }

    //busca nome qualquer relacionado ao usuario
    public List<Usuario> getByQualquerNome(String nome) {
        return usuarioRepository.findByNomeContains(nome);
    }
    
    //busca todos os usuarios em destaque
    public List<Usuario> getByPermissao(String permissao) {
        return usuarioRepository.findByPermissaoContains(permissao);
    }

    
}
