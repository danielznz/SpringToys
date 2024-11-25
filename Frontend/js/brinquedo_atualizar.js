document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});

document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const maratonaId = urlParams.get('maratonaId');
    const divform = document.getElementById('admin-section');
    console.log(maratonaId);

    fetch(`http://localhost:8080/api/maratonas/${maratonaId}`)
        .then(response => response.json())
        .then(maratona => {
            const form = document.createElement('div');
            console.log(maratona);
            form.innerHTML = `
            <form id="add-marathon-form">
                <label for="criador">Criador:</label>
                <input type="text" id="criador" name="criador" value="${maratona.criador}" required>
                <label for="nome">Nome:</label>
                <input type="text" id="nome" name="nome" value="${maratona.nome}" required>
                <label for="local">Local:</label>
                <input type="text" id="local" name="local" value="${maratona.local}" required>
                <label for="dataInicio">Data de Início:</label>
                <input type="date" id="dataInicio" name="dataInicio" value="${maratona.dataInicio}" required>
                <label for="dataFinal">Data Final:</label>
                <input type="date" id="dataFinal" name="dataFinal" value="${maratona.dataFinal}" required>
                <label for="status">Status:</label>
                <input type="text" id="status" name="status" value="${maratona.status}" required>
                <label for="distancia">Distância:</label>
                <input type="text" id="distancia" name="distancia" value="${maratona.distancia}" required>
                <label for="descricao">Descrição:</label>
                <textarea id="descricao" name="descricao" required>${maratona.descricao}</textarea>
                <label for="regras">Regras:</label>
                <input type="text" id="regras" name="regras" value="${maratona.regras}" required>
                <label for="limiteParticipantes">Participantes:</label>
                <input type="number" id="limiteParticipantes" name="limiteParticipantes" min="0" value="${maratona.limiteParticipantes}" required>
                <label for="valor">Valor:</label>
                <input type="number" id="valor" name="valor" value="${maratona.valor}" required>
                <label for="climaEsperado">Clima Esperado:</label>
                <input type="text" id="climaEsperado" name="climaEsperado" value="${maratona.climaEsperado}" required>
                <label for="tipoTerreno">Tipo do Terreno:</label>
                <input type="text" id="tipoTerreno" name="tipoTerreno" value="${maratona.tipoTerreno}" required>
                <button type="submit">Atualizar Maratona</button>
            </form>
        `;
            divform.appendChild(form);

            // Carregar as categorias após criar o formulário
            fetch('http://localhost:8080/api/categorias')
                .then(response => response.json())
                .then(categorias => {
                    console.log(categorias);
                    if (categorias.length === 0) {
                        Swal.fire({
                            title: "Erro",
                            text: "Não existe categoria! Crie uma para utilizar.",
                            icon: "error",
                            confirmButtonColor: "#d33"
                        }).then((result) => {
                            if (result.isConfirmed) {
                                window.location.href = "categoria.html";
                            }
                        });
                    } else {
                        const categoriaSelect = document.getElementById('categoria');
                        categorias.forEach(categoria => {
                            const option = document.createElement('option');
                            option.value = categoria.codCategoria;
                            option.text = categoria.categoria;
                            // Verificar se a categoria está selecionada para este maratona
                            if (maratona.categorias.some(cat => cat.codCategoria === categoria.codCategoria)) {
                                option.selected = true;
                            }
                            categoriaSelect.appendChild(option);
                        });
                    }
                })
                .catch(error => {
                    console.error('Error fetching categorias:', error);
                });

           // Função de cadastro
const marathonForm = document.getElementById('add-marathon-form');
marathonForm.addEventListener('submit', function (event) {
    event.preventDefault();

    // Obter os valores dos campos
    const criador = document.getElementById('criador').value;
    const nome = document.getElementById('nome').value;
    const local = document.getElementById('local').value;
    const dataInicio = document.getElementById('dataInicio').value;
    const dataFinal = document.getElementById('dataFinal').value;
    const status = document.getElementById('status').value;
    const distancia = document.getElementById('distancia').value;
    const descricao = document.getElementById('descricao').value;
    const regras = document.getElementById('regras').value;
    const limiteParticipantes = document.getElementById('limiteParticipantes').value;
    const valor = document.getElementById('valor').value;
    const climaEsperado = document.getElementById('climaEsperado').value;
    const tipoTerreno = document.getElementById('tipoTerreno').value;

    // Enviar os dados via API
    fetch(`http://localhost:8080/api/maratonas/${maratonaId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            criador,
            nome,
            local,
            dataInicio,
            dataFinal,
            status,
            distancia,
            descricao,
            regras,
            limiteParticipantes,
            valor,
            climaEsperado,
            tipoTerreno
        })
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Erro ao atualizar maratona');
            }
        })
        .then(data => {
            Swal.fire({
                title: "Maratona atualizada com sucesso!",
                text: "Todos os dados da maratona foram alterados.",
                icon: "success",
                confirmButtonColor: "#3085d6"
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = "alterar.html";
                }
            });
        })
        .catch(error => {
            console.error('Erro ao atualizar maratona:', error);
        });
    });
});
});