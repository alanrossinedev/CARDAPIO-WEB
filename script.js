// Simulação de adição de itens ao pedido
// Seleciona todos os botões que possuem a classe 'adicionar'
const botoesAdicionar = document.querySelectorAll(".adicionar");

//Seleciona a lista onde os itens do pedido serão exibidos
const listaPedido = document.getElementById("lista-pedido");

// Seleciona o elemento que exibirá o valor total do pedido
const totalElemento = document.getElementById('total');

// Variável para armazenar o total do pedido
let total = 0;

// Percorre todos os botões "Adicionar" e adicona um evento de clique a cada um deles
botoesAdicionar.forEach((botao) => {
    botao.addEventListener("click", () => {
        // Obtém o elemento pai do botão (provavelmente o card de produto)
        const produto = botao.parentElement;

        // Obtém o nome do produto a partir do texto dentro da tag <h3>
        const nome = produto.querySelector('h3').textContent;

        // Obtém o preço do produto, removendo o texto "R$" e convertendo para numero decimal
        const preco = parseFloat(produto.querySelector('.preco').textContent.replace("R$",""));

        // Cria um novo item de lista <li> para adicionar o produto ao pedido
        const itemPedido = document.createElement("li");
        itemPedido.textContent = `${nome} - R$ ${preco.toFixed(2)}`;

        // Adiciona item criado á lista de pedidos
        listaPedido.appendChild(itemPedido);

        // Atualiza o total de compra, somando o preço do novo item
        total += preco;

        // Atualiza o texto do elemento que exibe o total do pedido
        totalElemento.textContent = `Total: R$ ${total.toFixed(2)}`;

        });

    });

    // Simulação de finalização de pedido
    // Seleciona o botão "Finalizar Pedido"
    const botaoFinalizarPedido = document.getElementById("finalizar-pedido");

    // Adiciona um evento de clique ao botão de finalizar pedido
    botaoFinalizarPedido.addEventListener("click", () =>{

        // Exibe um alerta indicando que o pedido foi realizado com sucesso
        alert("Pedido finalizado! " + totalElemento.textContent);

        // Limpa a lista de pedidos, removendo todos os itens
        listaPedido.innerHTML = '';

        // Reseta o o total para zero
        total = 0;

        // Atualiza o texto do total para refletir a mudança
        totalElemento.textContent = `Total: R$ ${total.toFixed(2)}`;

    });
