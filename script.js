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

    const tituloElemento =document.createElement("h3");
    tituloElemento.textContent = titulo;

    const descricaoElemento = document.createElement("p");
    descricaoElemento.textContent = descricao;

    const dataElemento = document.createElement("small");
    dataElemento.textContent = data;
    
    elementoLista.append(tituloElemento);
    elementoLista.append(descricaoElemento);
    elementoLista.append(dataElemento);

    elementoLista.setAttribute("data-indice", indice);

    lista.append(elementoLista);

    const botaoRemover = document.createElement("button");
    botaoRemover.textContent = "Remover";

    elementoLista.append(botaoRemover);

    botaoRemover.addEventListener("click", () => {
        const indice = entradas.indexOf(entrada);
        console.log("indice",indice);

        entradas.splice(indice, 1);
        console.log(entradas);

        lista.removeChild(elementoLista);
    });

    formulario.reset();
}

formulario.addEventListener("submit", adicionar);

// Recupera as entradas salvas no localStorage ao carregar a página
window.addEventListener("load", () => {
    
    const entradasSalvas = JSON.parse(
        localStorage.getItem("entradas") || "[]"
    );

    entradas.push(...entradasSalvas);
    
    entradasSalvas.forEach((entrada) => {
        const botaoRemover = document.createElement("button");
        botaoRemover.textContent = "Remover";

        const elementoLista = document.createElement("li")
        
        const tituloElemento = document.createElement("h3");
        tituloElemento.textContent = entrada.titulo;

        const descricaoElemento = document.createElement("p");
        descricaoElemento.textContent = entrada.descricao;

        const dataElemento = document.createElement("small");
        dataElemento.textContent = entrada.data;

        elementoLista.append(tituloElemento);
        elementoLista.append(descricaoElemento);
        elementoLista.append(dataElemento);
        elementoLista.append(botaoRemover);

        botaoRemover.addEventListener("click", () => {
            const indice = entradasSalvas.indexOf(entrada);
            entradasSalvas.splice(indice, 1);

            localStorage.setItem("entradas", JSON.stringify(entradasSalvas));

            lista.removeChild(elementoLista);

        });

        lista.append(elementoLista);
    });

});

// Registra o Service Worker
navigator.serviceWorker.register("service-worker.js");

// Detecta quando a PWA pode ser instalada
let eventoInstalacao;

window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();

    eventoInstalacao = event;

    installbutton.addEventListener("click", () => {
        eventoInstalacao.prompt();
    })
});