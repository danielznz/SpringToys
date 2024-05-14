package br.com.springtoy.controller;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class PageController {

    @GetMapping("/")
    public String index() {
        return "index";
    }

    @GetMapping("/incluir")
    public String incluir() {
        return "incluir";
    }

    @GetMapping("/login")
    public String login() {
        return "login";
    }

    @GetMapping("/equipe")
    public String equipe() {
        return "equipe";
    }

    @GetMapping("/catalogo")
    public String catalogo() {
        return "catalogo";
    }
}