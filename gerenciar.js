document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});

// Função para carregar a lista de administradores
async function loadAdminList() {
    const response = await fetch('/api/admins');
    const admins = await response.json();

    const adminList = document.getElementById('admin-list');
    adminList.innerHTML = '';

    admins.forEach(admin => {
        const adminCard = document.createElement('div');
        adminCard.className = 'admin-card';
        adminCard.innerHTML = `
            <div class="admin-info">
                <p>Email: ${admin.email}</p>
            </div>
            <div class="admin-actions">
                <button class="edit" onclick="editAdmin(${admin.id})">Alterar</button>
                <button class="delete" onclick="deleteAdmin(${admin.id})">Excluir</button>
            </div>
        `;
        adminList.appendChild(adminCard);
    });
}

// Função para adicionar um novo administrador
document.getElementById('add-admin-form').addEventListener('submit', async function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const response = await fetch('/api/admins', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    });

    if (response.ok) {
        event.target.reset();
        loadAdminList();
    } else {
        alert('Erro ao adicionar administrador');
    }
});

// Função para editar um administrador
async function editAdmin(id) {
    const newEmail = prompt("Digite o novo email:");
    if (newEmail) {
        const response = await fetch(`/api/admins/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: newEmail })
        });

        if (response.ok) {
            loadAdminList();
        } else {
            alert('Erro ao editar administrador');
        }
    }
}

// Função para excluir um administrador
async function deleteAdmin(id) {
    if (confirm("Você tem certeza que deseja excluir este administrador?")) {
        const response = await fetch(`/api/admins/${id}`, {
            method: 'DELETE'
        });

        if (response.ok) {
            loadAdminList();
        } else {
            alert('Erro ao excluir administrador');
        }
    }
}

// Carregar a lista de administradores ao iniciar
loadAdminList();
