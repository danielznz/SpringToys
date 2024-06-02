document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});

document.getElementById('add-toy-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Captura os dados do formulário
    const codigo = document.getElementById('codigo').value;
    const nome = document.getElementById('nome').value;
    const descricao = document.getElementById('descricao').value;
    const categoria = document.getElementById('categoria').value;
    const valor = document.getElementById('valor').value;
    const imagem = document.getElementById('imagem').files[0];
    const detalhes = document.getElementById('detalhes').value;
    const marca = document.getElementById('marca').value;

    // Exibe os dados usando SweetAlert2
    Swal.fire({
        title: 'Dados do Brinquedo',
        html: `
            <strong>Código:</strong> ${codigo}<br>
            <strong>Nome:</strong> ${nome}<br>
            <strong>Descrição:</strong> ${descricao}<br>
            <strong>Categoria:</strong> ${categoria}<br>
            <strong>Valor:</strong> ${valor}<br>
            <strong>Imagem:</strong> ${imagem.name}<br>
            <strong>Detalhes:</strong> ${detalhes}<br>
            <strong>Marca:</strong> ${marca}<br>
        `,
        icon: 'info',
        confirmButtonText: 'OK'
    });
});

