document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});

 // URL do JSON
 const urlGet = 'get_promocao.php';
 const urlUpdate = 'update_promocao.php';

 // Função para obter o JSON
 async function getJson() {
     try {
         const response = await fetch(urlGet);
         if (!response.ok) {
             throw new Error('Erro ao obter os dados');
         }
         return response.json();
     } catch (error) {
         console.error('Erro ao obter o JSON:', error);
         throw error;
     }
 }

 // Função para atualizar o JSON
 async function updateJson(newData) {
     try {
         const response = await fetch(urlUpdate, {
             method: 'POST',
             headers: {
                 'Content-Type': 'application/json'
             },
             body: JSON.stringify(newData)
         });
         if (!response.ok) {
             throw new Error('Erro ao atualizar os dados');
         }
         return response.json();
     } catch (error) {
         console.error('Erro ao atualizar o JSON:', error);
         throw error;
     }
 }

 // Função principal para obter, modificar e atualizar o JSON
 async function modifyJson(event) {
     event.preventDefault(); // Previne o comportamento padrão do formulário

     try {
         // Passo 1: Obter o JSON
         let data = await getJson();
         console.log('Dados obtidos:', data); // Log dos dados obtidos

         // Passo 2: Obter o valor do input
         const valorInput = document.getElementById('valor').value;
         console.log('Valor do input:', valorInput); // Log do valor do input

         // Passo 3: Modificar o valor da chave desejada
         if (data.promocao && data.promocao.valor !== undefined) {
             data.promocao.valor = parseInt(valorInput); // Atualiza o valor da chave "valor"
         } else {
             console.error('Estrutura do JSON não conforme esperado:', data);
             throw new Error('Estrutura do JSON não conforme esperado');
         }

         // Passo 4: Atualizar o JSON no servidor
         let updatedData = await updateJson(data);
         console.log('Dados atualizados:', updatedData); // Log para verificar o JSON atualizado
     } catch (error) {
         console.error('Erro durante a modificação do JSON:', error);
     }
 }

 // Adiciona o evento de submit ao formulário
 document.getElementById('add-category-form').addEventListener('submit', modifyJson);