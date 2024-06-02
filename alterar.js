document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});

document.getElementById('search-button').addEventListener('click', () => {
    const codigo = document.getElementById('search-codigo').value;

    // Aqui você pode fazer uma chamada AJAX para buscar os dados do brinquedo pelo código.
    // Por exemplo, usando fetch():
    fetch(`/api/brinquedos/${codigo}`)
        .then(response => response.json())
        .then(data => {
            if (data) {
                document.getElementById('edit-toy-form').style.display = 'block';
                document.getElementById('codigo').value = data.codigo;
                document.getElementById('nome').value = data.nome;
                document.getElementById('descricao').value = data.descricao;
                document.getElementById('categoria').value = data.categoria;
                document.getElementById('valor').value = data.valor;
                document.getElementById('detalhes').value = data.detalhes;
                document.getElementById('marca').value = data.marca;
                // Imagem não pode ser setada via JavaScript diretamente, precisaria de lógica adicional para exibir.
            } else {
                Swal.fire('Erro', 'Brinquedo não encontrado', 'error');
            }
        })
        .catch(error => {
            console.error('Erro:', error);
            Swal.fire('Erro', 'Ocorreu um erro ao buscar o brinquedo', 'error');
        });
});

document.getElementById('delete-button').addEventListener('click', () => {
    const codigo = document.getElementById('codigo').value;

    // Aqui você pode fazer uma chamada AJAX para excluir o brinquedo pelo código.
    fetch(`/api/brinquedos/${codigo}`, {
        method: 'DELETE'
    })
    .then(response => {
        if (response.ok) {
            Swal.fire('Sucesso', 'Brinquedo excluído com sucesso', 'success');
            document.getElementById('edit-toy-form').reset();
            document.getElementById('edit-toy-form').style.display = 'none';
        } else {
            Swal.fire('Erro', 'Não foi possível excluir o brinquedo', 'error');
        }
    })
    .catch(error => {
        console.error('Erro:', error);
        Swal.fire('Erro', 'Ocorreu um erro ao excluir o brinquedo', 'error');
    });
});
