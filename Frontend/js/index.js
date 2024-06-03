document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});

document.addEventListener('DOMContentLoaded', function() {
    const fetchToys = (url, containerId) => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                const container = document.getElementById(containerId);
                container.innerHTML = '';
                data.forEach(toy => {
                    const card = document.createElement('div');
                    card.className = 'produto-card';
                    card.innerHTML = `
                        <a href="detalhes_brinquedo.html?brinquedoId=${toy.codBrinquedo}">
                        <img src="${toy.imagem}" alt="${toy.nome}">
                        <h3>${toy.nome}</h3>
                        <p>${toy.descricao}</p>
                        <p>R$ ${toy.valor}</p>
                    </a>
                    `;
                    container.appendChild(card);
                });
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    };

    // Fetch Brinquedos em Destaque
    fetchToys('http://localhost:8080/api/brinquedos/contem-destaque/1', 'featured-toys-container');
    
    fetch('/promocao.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao obter os dados');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        fetchToys(`http://localhost:8080/api/brinquedos/contem-promocao/${data.promocao.valor}`, 'promo-toys-container');
    })
    .catch(error => {
        console.error('Erro:', error);
    });
    ;
    
    // Fetch Brinquedos em Promoção
    //fetchToys('http://localhost:8080/api/brinquedos/contem-promocao/40', 'promo-toys-container');
});