# 📓 Diário de Bordo

Aplicação web desenvolvida como exercício de **PWA (Progressive Web App)**, permitindo registrar e consultar atividades do dia a dia.

O projeto funciona também offline e utiliza o armazenamento local do navegador para manter as entradas salvas.

## Funcionalidades

* Adicionar uma nova entrada
* Informar título, descrição e data
* Listar as entradas cadastradas
* Remover entradas
* Persistir os dados utilizando `localStorage`
* Instalar a aplicação como PWA
* Utilizar a aplicação offline
* Interface responsiva para diferentes tamanhos de tela

## Tecnologias

* HTML5
* CSS3
* JavaScript
* PWA
* Service Worker
* Web App Manifest
* LocalStorage

## PWA

A aplicação possui:

* `manifest.json` configurado para instalação
* Ícones nos tamanhos 192x192 e 512x512
* Service Worker para funcionamento offline
* Recurso de instalação através do `beforeinstallprompt`
* Cache dos principais arquivos da aplicação

## Persistência

As entradas são armazenadas no `localStorage` do navegador, permitindo que os dados permaneçam disponíveis mesmo após atualizar ou fechar a aplicação.

## Como executar

1. Clone este repositório.
2. Abra o projeto em um servidor local.
3. Acesse a aplicação pelo navegador.
4. Para testar os recursos de PWA e instalação, utilize um navegador compatível e uma conexão segura (`HTTPS`) ou ambiente local.

## Estrutura do projeto

```text
diario-de-bordo/
├── index.html
├── style.css
├── script.js
├── manifest.json
├── service-worker.js
└── icons/
    ├── icon-192.png
    ├── icon-512.png
    └── icon.svg
```

## 👩🏻‍💻 Autora

**Isabelle Landini**

