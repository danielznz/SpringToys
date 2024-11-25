document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});

    
document.addEventListener('DOMContentLoaded', () => {
    // Exibe os usuários
    const fetchMaratonas = () => {
        fetch('http://localhost:8080/api/brinquedos')
            .then(response => response.json())
            .then(data => {
                const adminListBody = document.querySelector('#adminList tbody');
                adminListBody.innerHTML = '';
                data.forEach(maratona => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${maratona.codMaratona}</td>
                        <td>${maratona.nome}</td>
                        <td>${maratona.local}</td>
                        <td>${maratona.status}</td>
                        <td>${maratona.distancia}</td>
                        <td>${maratona.participantes}</td>
                        <td>${maratona.valor}</td>
                        <td>${fazercategorias(maratona.categorias)}</td>
                        <td>${verficardestaque(maratona.destaque)}</td>
                        <td>
                            <a href="brinquedo_atualizar.html?brinquedoId=${maratona.codBrinquedo}"><button class="update">Atualizar</button></a>
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
            text: "seu maratona será apagado permanentemente",
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
                        fetchMaratonas();
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
                text: "Seu maratona está salvo :)",
                icon: "error"
              });
            }
          });
        
    }

    fetchMaratonas();
});