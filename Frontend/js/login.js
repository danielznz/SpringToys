document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const fetchUsuarios = () => {
        fetch(`http://localhost:8080/api/usuarios`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Erro na resposta da rede: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log(data); // Log para verificar os dados recebidos
                let loginSuccess = false;
                data.forEach(usuario => {
                    if (email === usuario.email && password === usuario.senha) {
                        loginSuccess = true;
                        if (usuario.permissao === "1") {
                            Swal.fire({
                                icon: 'success',
                                title: 'Login bem-sucedido',
                                text: 'Redirecionando para a página de administração...',
                                timer: 2000,
                                timerProgressBar: true,
                                didClose: () => {
                                    window.location.href = 'admin.html';
                                }
                            });
                        } else if (usuario.permissao === "0") {
                            Swal.fire({
                                icon: 'error',
                                title: 'Você não é um administrador',
                                text: 'Redirecionando para a página inicial...',
                                timer: 2000,
                                timerProgressBar: true,
                                didClose: () => {
                                    window.location.href = 'index.html';
                                }
                            });
                        }
                    }
                });
                if (!loginSuccess) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Erro de Login',
                        text: 'Email ou senha incorretos',
                    });
                }
            })
            .catch(error => {
                console.error('Error fetching usuarios:', error);
                Swal.fire({
                    icon: 'error',
                    title: 'Erro ao buscar usuários',
                    text: `Detalhes do erro: ${error.message}`,
                });
            });
    };

    fetchUsuarios();
});