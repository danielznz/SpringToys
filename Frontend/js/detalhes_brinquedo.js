document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});

document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    console.log(urlParams);
    const brinquedoId = urlParams.get('brinquedoId');
    console.log(brinquedoId);
    const toyDetailsContainer = document.getElementById('toy-details-container');

    const fetchToyDetails = () => {
        fetch(`http://localhost:8080/api/brinquedos/${brinquedoId}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                toyDetailsContainer.innerHTML =`
                    <div class="toy-card-large">
                        <img src="${data.imagem}" alt="${data.nome}" class="toy-image-large">
                        <div class="toy-info-large">
                            <h2>${data.nome}</h2>
                            <p>${data.descricao}</p>
                            <p>R$ ${data.valor}</p>
                            <p>Marca: ${data.marca}</p>
                            <p>Detalhes: ${data.detalhes}</p>
                            <p>Categorias: ${fazercategorias(data.categorias)}</p>
                </div>
             </div>
        `;
            })


            .catch(error => {
                console.error('Error fetching toy details:', error);
            });
            
            
            const fazercategorias = (categorias) => {
                return categorias.map(cat => cat.categoria).join(', ');
            }
    };

    // Fetch detalhes do brinquedo ao carregar a página
    fetchToyDetails();
});