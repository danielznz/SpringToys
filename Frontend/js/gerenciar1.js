document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});

document.addEventListener('DOMContentLoaded', function() {
    const adminForm = document.getElementById('add-admin-form');
    const adminList = document.getElementById('admin-list');

    const fetchUsers = () => {
        fetch('http://localhost:8080/api/usuarios')
            .then(response => response.json())
            .then(data => {
                adminList.innerHTML = '';
                data.forEach(admin => {
                    const permissaoText = admin.permissao == 1 ? 'adm' : 'cliente';
                    const adminCard = document.createElement('div');
                    adminCard.className = 'admin-card';
                    adminCard.innerHTML = `
                        <div class="admin-info">
                            <p><strong>Nome:</strong> ${admin.nome}</p>
                            <p><strong>Email:</strong> ${admin.email}</p>
                            <p><strong>Permissão:</strong> ${permissaoText}</p>
                        </div>
                        <div class="admin-actions">
                            <a href="gerenciar_atualizar.html?usuarioId=${admin.id_adm}">
                                <button class="edit">Atualizar</button>
                            </a>
                            <button class="delete" data-id="${admin.id_adm}">Excluir</button>
                        </div>
                    `;
                    adminList.appendChild(adminCard);
                });

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
            text: "Usuario será apagado permanentemente",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "sim, deletar!",
            cancelButtonText: "não, cancelar!",
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:8080/api/usuarios/${id}`, {
                    method: 'DELETE'
                })
                .then(response => {
                    if (response.ok) {
                        fetchUsers();
                    } else {
                        alert('Erro ao excluir administrador');
                    }
                })
                .catch(error => {
                    console.error('Error deleting admin:', error);
                });
              swalWithBootstrapButtons.fire({
                title: "Deletado!",
                text: "Usuario deletado",
                icon: "success"
              });
            } else if (
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire({
                title: "Cancelado",
                text: "Usuario está salvo :)",
                icon: "error"
              });
            }
          });
    }

    adminForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const senha = document.getElementById('password').value;
        const permissao = document.getElementById('permissao').value;
        fetch('http://localhost:8080/api/usuarios', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nome, email, senha, permissao })
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Erro ao adicionar administrador');
            }
        })
        .then(data => {
            fetchUsers();
        })
        .catch(error => {
            console.error('Error adding admin:', error);
        });
    });

    fetchUsers();
});