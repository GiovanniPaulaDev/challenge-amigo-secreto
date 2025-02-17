//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.var nomes = ['Diego', 'Gabriel', 'Lucas'];
var nomes = [];

function adicionarAmigo() {
    var inputElement = document.querySelector("#amigo").value;
    nomes.push(inputElement);
    document.querySelector('#listaAmigos').innerHTML = list(nomes).outerHTML;
}

function list(array) {
    //Cria a lista do elemento
    var listElement = document.createElement("ul");
    //listElement.setAttribute('id', 'myList'); 
    for (var i = 0; i < array.length; i++) {
        //Cria a lista de item
        var itemElement = document.createElement('li');
        //Defini seu conteudo
        itemElement.appendChild(document.createTextNode(array[i]));
        //Adiciona um item a lista
        listElement.appendChild(itemElement);
        document.querySelector('#amigo').value = '';
    }
    return listElement;
}
// Add the contents of options[0] to #foo:
//   document.querySelector('#listaAmigos').appendChild(list(nomes));


