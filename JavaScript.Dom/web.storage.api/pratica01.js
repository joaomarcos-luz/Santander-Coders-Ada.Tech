//localStorage

/*localStorage em um navegador, ele armazena dados localmente no navegador. No entanto, se você tentar executar esse código diretamente no terminal, não funcionará porque localStorage não está disponível em um ambiente de terminal padrão. */
//Resumindo: esse codigo só vai funcionar colocado no navegador.


/*O **localStorage**: ele guarda os dados de cada aplicação de forma isolada, baseando-se na URL base da página. Todos esses dados continuam armazenados mesmo se o navegador for fechado e aberto novamente.
O **sessionStorage**: o armazenamento funciona da mesma forma nele, mas os dados ficam disponíveis apenas durante a sessão da página. Em outras palavras, enquanto a aba do navegador estiver aberta, o que inclui recarregamentos e restaurações de páginas, os dados serão guardados. */

localStorage.setItem("linguagemDeProgramacao", "JavaScript");

const linguagem = localStorage.getItem("linguagemDeProgramacao");

console.log(linguagem); // "JavaScript"