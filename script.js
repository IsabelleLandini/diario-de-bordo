// Seleciona os elementos do formulário e da lista
const lista = document.querySelector("ul");
const formulario = document.querySelector("form")

// Armazena as entradas adicionadas pelo usuário
const entradas = [];

console.log(lista);
console.log(formulario);

function adicionar (event) {
    console.log("entrou na função");
    event.preventDefault();

    // Captura os valores preenchidos no formulário
    const titulo = document.querySelector("#titulo").value;
    const descricao = document.querySelector("#descricao").value;
    const data = document.querySelector("#data").value;

    // Cria um objeto com os dados da entrada
    const entrada = {
        titulo,
        descricao,
        data
    }

    // Adiciona a entrada ao array e obtém seu índice
    entradas.push(entrada);
    localStorage.setItem("entradas", JSON.stringify(entradas));
    console.log(entradas);

    const indice = entradas.length - 1

    const elementoLista = document.createElement("li");
    elementoLista.textContent = titulo + "\n" + descricao + "\n" + data;
    elementoLista.setAttribute("data-indice", indice);

    lista.append(elementoLista);

    const botaoRemover = document.createElement("button");
    botaoRemover.textContent = "Remover";

    elementoLista.append(botaoRemover);

    botaoRemover.addEventListener("click", function() {
        const indice = entradas.indexOf(entrada);
        console.log("indice",indice);

        entradas.splice(indice, 1);
        console.log(entradas);

        lista.removeChild(elementoLista);
    });

    formulario.reset();
}



formulario.addEventListener("submit", adicionar);

window.addEventListener("load", function() {
    
    const entradasSalvas = JSON.parse(
        localStorage.getItem("entradas")
    );

    entradas.push(...entradasSalvas);
    
    entradasSalvas.forEach(function(entrada) {
        const botaoRemover = document.createElement("button");
        botaoRemover.textContent = "Remover";

        const elementoLista = document.createElement("li");
        
        elementoLista.textContent = entrada.titulo + "\n" + entrada.descricao + "\n" + entrada.data;
        elementoLista.append(botaoRemover);

        botaoRemover.addEventListener("click", function() {
            const indice = entradasSalvas.indexOf(entrada);
            entradasSalvas.splice(indice, 1);

            localStorage.setItem("entradas", JSON.stringify(entradasSalvas));

            lista.removeChild(elementoLista);
        });

        lista.append(elementoLista);
    });

});