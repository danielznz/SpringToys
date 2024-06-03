document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});

    
document.addEventListener('DOMContentLoaded', () => {
    // Exibe os usuários
    const fetchBrinquedos = () => {
        fetch('http://localhost:8080/api/brinquedos')
            .then(response => response.json())
            .then(data => {
                const adminListBody = document.querySelector('#adminList tbody');
                adminListBody.innerHTML = '';
                data.forEach(brinquedo => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${brinquedo.codBrinquedo}</td>
                        <td>${brinquedo.codigo}</td>
                        <td>${brinquedo.nome}</td>
                        <td>${brinquedo.descricao}</td>
                        <td>${brinquedo.valor}</td>
                        <td><img src="${brinquedo.imagem}" alt="${brinquedo.imagem}" width="60px" height="40px" style="padding-left:10%"></td>
                        <td>${brinquedo.marca}</td>
                        <td>${fazercategorias(brinquedo.categorias)}</td>
                        <td>${verficardestaque(brinquedo.destaque)}</td>
                        <td>
                            <a href="brinquedo_atualizar.html?brinquedoId=${brinquedo.codBrinquedo}"><button class="update">Atualizar</button></a>
                            <button class="delete" data-id="${brinquedo.codBrinquedo}">Excluir</button>
                        </td>
                    `;
                    adminListBody.appendChild(row);
                });

                // Adiciona event listeners aos botões de exclusão
                document.querySelectorAll('.delete').forEach(button => {
                    button.addEventListener('click', function() {
                        const adminId = this.getAttribute('data-id');
                        deleteAdmin(adminId);
                    });
                });
            })
            .catch(error => {
                console.error('Error fetching admins:', error);
            });
    };

    const fazercategorias = (categorias) => {
        return categorias.map(cat => cat.categoria).join(', ');
    }
    const verficardestaque = (destaque) => {
        if(destaque == 1){
            return '<i class="fa fa-star" style="padding-left:35%"></i>';
        }
        return ` `;
    }

    function deleteAdmin(id) {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: "btn btn-success",
              cancelButton: "btn btn-danger"
            },
            buttonsStyling: false
          });
          swalWithBootstrapButtons.fire({
            title: "Tem certeza?",
            text: "seu brinquedo será apagado permanentemente",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "sim, deletar!",
            cancelButtonText: "não, cancelar!",
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:8080/api/brinquedos/${id}`, {
                    method: 'DELETE'
                })
                .then(response => {
                    if (response.ok) {
                        fetchBrinquedos();
                    } else {
                        alert('Erro ao excluir administrador');
                    }
                })
                .catch(error => {
                    console.error('Error deleting admin:', error);
                });
              swalWithBootstrapButtons.fire({
                title: "Deletado!",
                text: "Brinquedo deletado",
                icon: "success"
              });
            } else if (
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire({
                title: "Cancelado",
                text: "Seu brinquedo está salvo :)",
                icon: "error"
              });
            }
          });
        
    }

    fetchBrinquedos();
});