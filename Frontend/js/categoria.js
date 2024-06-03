document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});
document.addEventListener('DOMContentLoaded', function() {
    const adminForm = document.getElementById('add-category-form');
    const categoiaList = document.getElementById('categoria-list');

    // Exibe os usuários
    const fetchCategorias = () => {
        fetch('http://localhost:8080/api/categorias')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                categoiaList.innerHTML = '';
                data.forEach(categoria => {
                    const CatDiv = document.createElement('div');
                    CatDiv.className = 'admin-card';
                    CatDiv.innerHTML = `
                        <p>ID: ${categoria.codCategoria}</p>
                        <p>Nome: ${categoria.categoria}</p>
                        <p>imagem: <img src="${categoria.imagem}" alt="${categoria.imagem}" width="80px" height="80px"></p>
                        <a href="categoria_atualizar.html?categoriaId=${categoria.codCategoria}"><button class="update" >Atualizar</button></a>
                        <button class="delete" data-id="${categoria.codCategoria}">Excluir</button>
                    `;
                    categoiaList.appendChild(CatDiv);
                });

                // Adiciona event listeners aos botões de exclusão
                document.querySelectorAll('.delete').forEach(button => {
                    button.addEventListener('click', function() {
                        const adminId = this.getAttribute('data-id');
                        deleteCategoria(adminId);
                    });
                });
            })
            .catch(error => {
                console.error('Error fetching admins:', error);
            });
    };  
    function deleteCategoria(id) {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: "btn btn-success",
              cancelButton: "btn btn-danger"
            },
            buttonsStyling: false
          });
          swalWithBootstrapButtons.fire({
            title: "Tem certeza?",
            text: "Caso uma categoria for deletado os brinquedos dela também serão deletados",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "sim, deletar!",
            cancelButtonText: "não, cancelar!",
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:8080/api/categorias/${id}`, {
                    method: 'DELETE'
                })
                .then(response => {
                    if (response.ok) {
                        fetchCategorias();
                    } else {
                        alert('Erro ao excluir administrador');
                    }
                })
                .catch(error => {
                    console.error('Error deleting admin:', error);
                });
              swalWithBootstrapButtons.fire({
                title: "Deletado!",
                text: "Categoria deletado e seus brinquedos também",
                icon: "success"
              });
            } else if (
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire({
                title: "Cancelado",
                text: "Sua categoria está salva :)",
                icon: "error"
              });
            }
          });
           
        }

    document.getElementById('add-category-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const categoria = document.getElementById('name').value;
    const imagem = document.getElementById('image').value;
            
    fetch('http://localhost:8080/api/categorias', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ categoria, imagem })
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Erro ao adicionar categoria');
        }
    })
    .then(data => {
        Swal.fire(
            'Sucesso',
            'Categoria adicionada com sucesso!',
            'success'
        );
        fetchCategorias();
    })
    .catch(error => {
        console.error('Erro ao adicionar categoria:', error);
        Swal.fire(
            'Erro',
            'Não foi possível adicionar a categoria.',
            'error'
        );
    });
});

fetchCategorias();
});