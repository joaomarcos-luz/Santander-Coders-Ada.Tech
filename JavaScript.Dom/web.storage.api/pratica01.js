/*localStorage em um navegador, ele armazena dados localmente no navegador. No entanto, se você tentar executar esse código diretamente no terminal, não funcionará porque localStorage não está disponível em um ambiente de terminal padrão. */
//Resumindo: esse codigo só vai funcionar colocado no navegador.
localStorage.setItem("linguagemDeProgramacao", "JavaScript");

const linguagem = localStorage.getItem("linguagemDeProgramacao");

console.log(linguagem); // "JavaScript"