document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});

document.addEventListener('DOMContentLoaded', function() {
    fetch('http://localhost:8080/api/categorias')
        .then(response => response.json())
        .then(categorias => {
            console.log(categorias);
            if (categorias.length === 0) {
                Swal.fire({
                    title: "Erro",
                    text: "Não existe categoria! Crie uma para utilizar.",
                    icon: "error",
                    confirmButtonColor: "#d33"
                }).then((result) => {
                    if (result.isConfirmed) {
                        window.location.href = "categoria.html";
                    }
                });
            } else {
                const categoriaSelect = document.getElementById('categoria');
                categorias.forEach(categoria => {
                    const option = document.createElement('option');
                    option.value = categoria.codCategoria;
                    option.text = categoria.categoria;
                    categoriaSelect.appendChild(option);
                });
            }
        })
        .catch(error => {
            console.error('Error fetching categorias:', error);
        });

    document.getElementById('add-toy-form').addEventListener('submit', function(event) {
        event.preventDefault();

        const codigo = document.getElementById('codigo').value;
        const nome = document.getElementById('nome').value;
        const descricao = document.getElementById('descricao').value;
        const valor = document.getElementById('valor').value;
        const imagem = document.getElementById('imagem').value;
        const detalhes = document.getElementById('detalhes').value;
        const marca = document.getElementById('marca').value;
        const destaque = document.getElementById('destaque').value;
        const categorias = Array.from(document.getElementById('categoria').selectedOptions).map(option => option.value);

        fetch('http://localhost:8080/api/brinquedos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ codigo, nome, descricao, valor, imagem, detalhes, marca, destaque})
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Erro ao adicionar brinquedo');
            }
        })
        .then(data => {
            const fetches = categorias.map(categoria => {
                return fetch(`http://localhost:8080/api/brinquedos/${data.codBrinquedo}/categorias/${categoria}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(response => {
                    if (!response.ok) {
                        throw new Error('Erro ao atualizar categoria');
                    }
                });
            });

            return Promise.all(fetches).then(() => data);
        })
        .then(data => {
            Swal.fire(
                'Sucesso',
                'Brinquedo adicionado com sucesso!',
                'success'
            );

            // Limpar o formulário
            document.getElementById('add-toy-form').reset();
        })
        .catch(error => {
            console.error('Erro ao adicionar brinquedo:', error);
            Swal.fire(
                'Erro',
                'Não foi possível adicionar o brinquedo.',
                'error'
            );
        });
    });
});