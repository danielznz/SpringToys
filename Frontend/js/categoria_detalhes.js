document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});

document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const categoriaId = urlParams.get('categoriaId');
    const categorianome = urlParams.get('categoriaNome');
    console.log(categorianome);
    const produtosContainer = document.getElementById('produtos-container');
    const nome_categoria = document.getElementById('nome_Categoria');
    console.log(nome_Categoria);
    nome_categoria.innerHTML=`Brinquedos:  ${categorianome}`;

    const fetchProdutos = () => {
        fetch(`http://localhost:8080/api/categorias/${categoriaId}/brinquedos`)
            .then(response => response.json())
            .then(data => {
                produtosContainer.innerHTML = '';
                data.forEach(brinquedo => {
                    const card = document.createElement('div');
                    card.className = 'produto-card';
                    card.innerHTML = `
                    <a href="detalhes_brinquedo.html?brinquedoId=${brinquedo.codBrinquedo}">
                        <img src="${brinquedo.imagem}" alt="${brinquedo.nome}">
                        <h3>${brinquedo.nome}</h3>
                        <p>${brinquedo.descricao}</p>
                        <p>R$ ${brinquedo.valor}</p>
                    </a>
                    `;
                    produtosContainer.appendChild(card);
                });
            })
            .catch(error => {
                console.error('Error fetching brinquedos:', error);
            });
    };

    // Fetch brinquedos da categoria ao carregar a página
    fetchProdutos();
});