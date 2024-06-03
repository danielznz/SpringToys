document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});

document.addEventListener('DOMContentLoaded', function() {
    const categoriasContainer = document.getElementById('categorias-container');

    const fetchCategorias = () => {
        fetch('http://localhost:8080/api/categorias')
            .then(response => response.json())
            .then(data => {
                categoriasContainer.innerHTML = '';
                data.forEach(categoria => {
                    console.log(categoria);
                    const categoriaDiv = document.createElement('div');
                    categoriaDiv.className = 'produto-card';
                    categoriaDiv.innerHTML = `
                    <a href="categoria_detalhes.html?categoriaId=${categoria.codCategoria}&categoriaNome=${categoria.categoria}">
                        <img src="${categoria.imagem}" alt="${categoria.categoria}">
                        <h3>${categoria.categoria}</h3>
                    </a>
                    `;
                    categoriasContainer.appendChild(categoriaDiv);
                });
            })
            .catch(error => {
                console.error('Error fetching categorias:', error);
            });
    };

    // Fetch todas as categorias ao carregar a página
    fetchCategorias();
});