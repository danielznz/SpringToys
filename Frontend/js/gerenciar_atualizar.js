document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});

document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const usuarioId = urlParams.get('usuarioId');
    const divform = document.getElementById('admin-section');
    console.log(usuarioId);

    fetch(`http://localhost:8080/api/usuarios/${usuarioId}`)
        .then(response => response.json())
        .then(data => {
            const form = document.createElement('div');
            console.log(data);
            form.innerHTML = `
                <form id="add-admin-form">
                    <label for="Id_adm">ID:</label>
                    <input type="text" id="Id_adm" name="Id_adm" value="${data.id_adm}">
                    <label for="nome">Nome:</label>
                    <input type="text" id="nome" name="nome" value="${data.nome}">
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" value="${data.email}">
                    <label for="password">Senha:</label>
                    <input type="text" id="password" name="password" value="${data.senha}">
                    <label for="permissao">Permissão:</label>
                    <input type="number" id="permissao" name="permissao" min="0" max="1" value="${data.permissao}">
                    <button type="submit">Atualizar Admin</button>
                </form>
            `;
            divform.appendChild(form);

            // Função de cadastro
            const adminForm = document.getElementById('add-admin-form');
            adminForm.addEventListener('submit', function(event) {
                event.preventDefault();
        
                const nome = document.getElementById('nome').value;
                const email = document.getElementById('email').value;
                const senha = document.getElementById('password').value;
                const permissao = document.getElementById('permissao').value;

        fetch(`http://localhost:8080/api/usuarios/${usuarioId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nome, email, senha, permissao })
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Erro ao atualizar administrador');
            }
        })
        .then(data => {
            // Atualiza a lista de administradores ou faça alguma ação
            Swal.fire({
                title: "Usuario atualizado com sucesso!",
                text: "Todos os dados do Usuario foram alterados",
                icon: "success",
                confirmButtonColor: "#3085d6"
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = "gerenciar.html";
                }
        })
        .catch(error => {
            console.error('Error updating admin:', error);
        });
    });
})
.catch(error => {
    console.error('Error fetching user details:', error);
});

});
});