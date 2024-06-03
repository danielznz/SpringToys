document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});

document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const categoriaId = urlParams.get('categoriaId');
    const divform = document.getElementById('admin-section');
    console.log(categoriaId);

    fetch(`http://localhost:8080/api/categorias/${categoriaId}`)
        .then(response => response.json())
        .then(data => {
            const form = document.createElement('div');
            console.log(data);
            form.innerHTML = `
                <form id="add-admin-form">
                    <label for="Id_adm">ID:</label>
                    <input type="text" id="Id_adm" name="Id_adm" value="${data.codCategoria}">
                    <label for="nome">Nome:</label>
                    <input type="text" id="nome" name="nome" value="${data.categoria}">
                    <label for="email">Imagem:</label>
                    <input type="text" id="email" name="email" value="${data.imagem}">
                    <img src="${data.imagem}" alt="${data.imagem}" widht="80px" height="200px">
                    <button type="submit">Atualizar Categoria</button>
                </form>
            `;
            divform.appendChild(form);

            // Função de cadastro
            const adminForm = document.getElementById('add-admin-form');
            adminForm.addEventListener('submit', function(event) {
                event.preventDefault();
        
                const categoria = document.getElementById('nome').value;
                const imagem = document.getElementById('email').value;
            

        fetch(`http://localhost:8080/api/categorias/${categoriaId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ categoria, imagem })
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
                title: "Categoria atualizada com sucesso!",
                text: "todos os dados da categoria foi alterado",
                icon: "success",
                confirmButtonColor: "#3085d6"
              }).then((result) => {
                if (result.isConfirmed) {
                window.location.href ="categoria.html";
                };
            });
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