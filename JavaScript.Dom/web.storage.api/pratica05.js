//sessionStorage

//Só roda no navegador.

/*O **localStorage**: ele guarda os dados de cada aplicação de forma isolada, baseando-se na URL base da página. Todos esses dados continuam armazenados mesmo se o navegador for fechado e aberto novamente.
O **sessionStorage**: o armazenamento funciona da mesma forma nele, mas os dados ficam disponíveis apenas durante a sessão da página. Em outras palavras, enquanto a aba do navegador estiver aberta, o que inclui recarregamentos e restaurações de páginas, os dados serão guardados. */

const idade = 27
const altura = 1.75

sessionStorage.setItem("idade", String(idade))
sessionStorage.setItem("alrura", String(altura))

sessionStorage.clear()

const idadeSessionStorage = sessionStorage.getItem("idade")
const alturaSessionStorage = sessionStorage.getItem("altura")

console.log(idadeSessionStorage)
console.log(alturaSessionStorage)