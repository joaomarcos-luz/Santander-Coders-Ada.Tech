//localStorage

//Lenbrando so roda no navegador.

/*O **localStorage**: ele guarda os dados de cada aplicação de forma isolada, baseando-se na URL base da página. Todos esses dados continuam armazenados mesmo se o navegador for fechado e aberto novamente.
O **sessionStorage**: o armazenamento funciona da mesma forma nele, mas os dados ficam disponíveis apenas durante a sessão da página. Em outras palavras, enquanto a aba do navegador estiver aberta, o que inclui recarregamentos e restaurações de páginas, os dados serão guardados. */

const listaDeCompras = [
    { item: "Arroz", comprado: true },
    { item: "Feijão", comprado: false },
    { item: "Frango", comprado: true }
];

// Convertendo a lista de compras para uma string JSON e armazenando no localStorage
localStorage.setItem("listaDeCompras", JSON.stringify(listaDeCompras));

// Recuperando a lista de compras do localStorage e convertendo de volta para um objeto JavaScript
const listaDeComprasLocalStorage = localStorage.getItem("listaDeCompras");
const listaDeComprasRecuperada = JSON.parse(listaDeComprasLocalStorage || "[]");

console.log(listaDeComprasRecuperada);