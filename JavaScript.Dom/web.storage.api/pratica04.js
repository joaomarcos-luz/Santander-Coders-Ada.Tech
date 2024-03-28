//sessionStorage
//

//Só roda no navegador.

/*O **localStorage**: ele guarda os dados de cada aplicação de forma isolada, baseando-se na URL base da página. Todos esses dados continuam armazenados mesmo se o navegador for fechado e aberto novamente.
O **sessionStorage**: o armazenamento funciona da mesma forma nele, mas os dados ficam disponíveis apenas durante a sessão da página. Em outras palavras, enquanto a aba do navegador estiver aberta, o que inclui recarregamentos e restaurações de páginas, os dados serão guardados. */

const idade = 26;
const altura = 1.77;

// Salvando a idade no sessionStorage
sessionStorage.setItem("idade", String(idade));
// Salvando a altura no sessionStorage
sessionStorage.setItem("altura", String(altura));

// Removendo a idade do sessionStorage
sessionStorage.removeItem("idade");

// Obtendo a idade e altura do sessionStorage
const idadeSessionStorage = sessionStorage.getItem("idade");
const alturaSessionStorage = sessionStorage.getItem("altura");

console.log(idadeSessionStorage); // null
console.log(alturaSessionStorage); // '1.77'