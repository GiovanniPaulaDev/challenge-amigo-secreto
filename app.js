// Declara um array vazio para armazenar os nomes dos amigos.
let amigos = [];
// Função para adicionar amigos na lista
function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value.trim();
    // Verifica se o campo está vazio.
    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    // Verifica se o nome contém apenas letras.
    if (/[^a-zA-Z]/.test(nome)) {
        alert("Por favor, insira apenas letras no nome.");
        input.value = "";
        return;
    }

    if (amigos.includes(nome)) {
        alert("Este nome já foi adicionado. Por favor, insira um nome diferente.");
        input.value = "";
        return;
    }

    amigos.push(nome);
    atualizarLista();
    input.value = "";
}

// Função para atualizar a lista de amigos na tela.
function atualizarLista() {
    let lista = document.getElementById("listaAmigos"); // Obtém a referência da lista (<ul>).
    lista.innerHTML = ""; // Limpa a lista antes de adicionar novos itens.

    for (let i = 0; i < amigos.length; i++) { // Loop for percorre o array amigos.
        let li = document.createElement("li"); // Cria um novo elemento de lista (<li>).
        li.textContent = amigos[i]; // Define o texto do <li> como o nome do amigo.

        // Cria um botão de remover para cada amigo na lista.
        let botaoRemover = document.createElement("button");
        botaoRemover.textContent = "Remover"; // Define o texto do botão como "Remover".
        botaoRemover.classList.add("button-remove"); // Adiciona uma classe CSS para o botão de remover.
        botaoRemover.onclick = () => removerAmigo(i); // Adiciona a função de remoção do amigo ao botão.

        li.appendChild(botaoRemover); // Adiciona o botão de remover dentro do <li>.
        lista.appendChild(li); // Adiciona o <li> dentro da <ul>, exibindo os nomes na tela.
    }
}

// Função para remover um amigo da lista.
function removerAmigo(index) {
    amigos.splice(index, 1); // Remove o amigo da lista usando o índice.
    atualizarLista(); // Atualiza a lista na interface.
}

// Função para sortear amigo secreto.
function sortearAmigo() {
    if (amigos.length == 0) { // Valida se há amigos na lista antes do sorteio.
        alert("Nenhum amigo disponível para sorteio."); // Exibe um alerta.
        return; // Interrompe a execução.
    }

    if (amigos.length % 2 !== 0) { // aceita somente uma quantidade de nomes pares.
        alert("Favor inserir mais um nome!!!");
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * amigos.length); // Gera um número aleatório entre 0 e tamanho do array.
    let amigoSorteado = amigos[indiceSorteado]; // Obtém o nome correspondente ao índice sorteado.
    document.getElementById("resultado").innerHTML = `Amigo sorteado: <strong>${amigoSorteado}</strong>`; // Exibe o nome sorteado.
}
// Função para resetar a lista de amigos e o resultado do sorteio.
function resetar() {
    amigos = [];
    atualizarLista();
    document.getElementById("resultado").innerHTML = "";
}

