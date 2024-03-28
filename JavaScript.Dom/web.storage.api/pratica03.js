//Lenbrando so roda no navegador.
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