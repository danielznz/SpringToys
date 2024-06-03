document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});

document.addEventListener('DOMContentLoaded', function() {
   
   
    document.getElementById('add-category-form').addEventListener('submit', function(event) {
        event.preventDefault();

        const marca = document.getElementById('name').value;
        
        fetchToys(`http://localhost:8080/api/brinquedos/contem-marca/${marca}`, 'featured-toys-container');


    })
   
   
    const fetchToys = (url, containerId) => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data.length === 0) {
                    Swal.fire({
                        title: "Erro",
                        text: "Não existe nenhum brinquedo com estes parametros no sistema :(.",
                        icon: "error",
                        confirmButtonColor: "#d33"
                    }).then((result) => {
                        if (result.isConfirmed) {
                            window.location.href = "filtrar_nome.html";
                        }
                    });
                } else {
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
                        <p>${toy.marca}</p>
                    </a>
                    `;
                    container.appendChild(card);
                
                });
            }
            })

            .catch(error => {
                console.error('Error fetching data:', error);
            });
    };


    
});