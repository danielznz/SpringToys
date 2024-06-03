document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});

document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const brinquedoId = urlParams.get('brinquedoId');
    const divform = document.getElementById('admin-section');
    console.log(brinquedoId);

    fetch(`http://localhost:8080/api/brinquedos/${brinquedoId}`)
        .then(response => response.json())
        .then(brinquedo => {
            const form = document.createElement('div');
            console.log(brinquedo);
            form.innerHTML = `
                <form id="add-admin-form">
                    <label for="Id_adm">ID:</label>
                    <input type="text" id="Id_adm" name="Id_adm" value="${brinquedo.codBrinquedo}" readonly>
                    <label for="codigo">Código:</label>
                    <input type="text" id="codigo" name="codigo" value="${brinquedo.codigo}">
                    <label for="nome">Nome:</label>
                    <input type="text" id="nome" name="nome" value="${brinquedo.nome}">
                    <label for="descricao">Descrição:</label>
                    <input type="text" id="descricao" name="descricao" value="${brinquedo.descricao}">
                    <label for="valor">Valor:</label>
                    <input type="text" id="valor" name="valor" value="${brinquedo.valor}">
                    <label for="imagem">Imagem:</label>
                    <input type="text" id="imagem" name="imagem" value="${brinquedo.imagem}">
                    <img src="${brinquedo.imagem}" alt="${brinquedo.imagem}" width="80px" height="60px" style="padding-left:40%">
                    <label for="detalhes">Detalhes:</label>
                    <input type="text" id="detalhes" name="detalhes" value="${brinquedo.detalhes}">
                    <label for="marca">Marca:</label>
                    <input type="text" id="marca" name="marca" value="${brinquedo.marca}">
                    <label for="categoria">Categoria:</label>
                    <select id="categoria" name="categoria" multiple>
                    </select>
                    <label for="destaque">Destaque:</label>
                    <input type="Number" id="destaque" name="destaque" min="0" max="1" value="${brinquedo.destaque}">
                    <button type="submit">Atualizar brinquedo</button>
                </form>
            `;
            divform.appendChild(form);

            // Carregar as categorias após criar o formulário
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
                            // Verificar se a categoria está selecionada para este brinquedo
                            if (brinquedo.categorias.some(cat => cat.codCategoria === categoria.codCategoria)) {
                                option.selected = true;
                            }
                            categoriaSelect.appendChild(option);
                        });
                    }
                })
                .catch(error => {
                    console.error('Error fetching categorias:', error);
                });

            // Função de cadastro
            const adminForm = document.getElementById('add-admin-form');
            adminForm.addEventListener('submit', function(event) {
                event.preventDefault();
        
                const codigo = document.getElementById('codigo').value;
                const nome = document.getElementById('nome').value;
                const descricao = document.getElementById('descricao').value;
                const valor = document.getElementById('valor').value;
                const imagem = document.getElementById('imagem').value;
                const detalhes = document.getElementById('detalhes').value;
                const marca = document.getElementById('marca').value;
                const destaque = document.getElementById('destaque').value;
                const categoriasSelecionadas = Array.from(document.getElementById('categoria').selectedOptions).map(option => option.value);
                const categoriasIniciais = brinquedo.categorias.map(cat => cat.codCategoria);
                
                // Categorias a adicionar
                const categoriasParaAdicionar = categoriasSelecionadas.filter(categoria => !categoriasIniciais.includes(parseInt(categoria)));
                // Categorias a remover
                const categoriasParaRemover = categoriasIniciais.filter(categoria => !categoriasSelecionadas.includes(categoria.toString()));

                fetch(`http://localhost:8080/api/brinquedos/${brinquedoId}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ codigo, nome, descricao, valor, imagem, detalhes, marca, destaque })
                })
                .then(response => {
                    if (response.ok) {
                        // Adicionar categorias
                        categoriasParaAdicionar.forEach(categoriaId => {
                            fetch(`http://localhost:8080/api/brinquedos/${brinquedoId}/categorias/${categoriaId}`, {
                                method: 'PUT',
                                headers: {
                                    'Content-Type': 'application/json'
                                }
                            })
                            .then(response => {
                                if (response.ok) {
                                    return response.json();
                                } else {
                                    throw new Error('Erro ao adicionar categoria');
                                }
                            })
                            .catch(error => {
                                console.error('Error adding categoria:', error);
                            });
                        });

                        // Remover categorias
                        categoriasParaRemover.forEach(categoriaId => {
                            fetch(`http://localhost:8080/api/brinquedos/${brinquedoId}/categorias/${categoriaId}`, {
                                method: 'DELETE',
                                headers: {
                                    'Content-Type': 'application/json'
                                }
                            })
                            .then(response => {
                                if (response.ok) {
                                    return response.json();
                                } else {
                                    throw new Error('Erro ao remover categoria');
                                }
                            })
                            .catch(error => {
                                console.error('Error removing categoria:', error);
                            });
                        });

                        return response.json();
                    } else {
                        throw new Error('Erro ao atualizar brinquedo');
                    }
                })
                .then(data => {
                    Swal.fire({
                        title: "Brinquedo atualizado com sucesso!",
                        text: "Todos os dados do brinquedo foram alterados",
                        icon: "success",
                        confirmButtonColor: "#3085d6"
                    }).then((result) => {
                        if (result.isConfirmed) {
                            window.location.href = "alterar.html";
                        }
                    });
                })
                .catch(error => {
                    console.error('Error updating brinquedo:', error);
                });
            });
            
        })
        .catch(error => {
            console.error('Error fetching brinquedo:', error);
        });

        

});