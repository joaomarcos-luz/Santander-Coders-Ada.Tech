//localStorage

//Lembrando esse codigo so roda no navegador e precisa ir em aplicativo e armazenamento local.

/*O **localStorage**: ele guarda os dados de cada aplicação de forma isolada, baseando-se na URL base da página. Todos esses dados continuam armazenados mesmo se o navegador for fechado e aberto novamente.
O **sessionStorage**: o armazenamento funciona da mesma forma nele, mas os dados ficam disponíveis apenas durante a sessão da página. Em outras palavras, enquanto a aba do navegador estiver aberta, o que inclui recarregamentos e restaurações de páginas, os dados serão guardados. */

const listaDeCompras = [
    { item: "Feijão", comprado: false },
    { item: "Arroz", comprado: true },
    { item: "Frango", comprado: false },
  ];
  
  localStorage.setItem("listaDeCompras", JSON.stringify(listaDeCompras));