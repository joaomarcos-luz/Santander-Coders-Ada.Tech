// Ex 01) Declare duas variáveis, a e b, atribuindo a elas valores booleanos diferentes. Em seguida, crie uma condição que verifica se ambas são verdadeiras.
let a = true;
let b = false;

 if(a === b) {
    console.log("Verdadeiro")
 } else {
    console.log("Falso")
 }


// Ex 03) Declare duas variáveis numéricas, c e d, e realize uma operação matemática entre elas. Imprima o resultado no console.
var c = 10;
var d = 10;

console.log(`${c + d}`)


//Declare uma variável e contendo uma string de sua escolha. Em seguida, concatene essa string com outra e imprima o resultado./
// EX 03 - var nome = "Dannyel";

let nome1 = 'João'
let nome2 = 'Marcos'
console.log(`${nome1} ${nome2}`)


// Ex 04) Declare duas variáveis, f e g, ambas inicializadas como undefined. Imprima no console se essas variáveis são estritamente iguais.
let f = undefined;
let g 

 console.log(`${f} ${g}`);

//Ex 05) Declare um objeto vazio chamado c. Adicione propriedades a esse objeto, como nome e idade, e imprima o objeto no console.
let c = {}

c.nome = 'João'
c.idade = 27

console.log(c)

//Ex 06) Declare uma array vazia chamada d. Adicione alguns elementos a essa array e, em seguida, imprima o comprimento da array.

let array = []

array.push('Hello')
array.push('Word')

console.log(array)

// Ex 07) Declare uma variável e inicializada como null. Imprima no console o tipo de e utilizando o operador typeof.
let v1 = null
console.log(typeof v1)

//Ex 08) Troque o valor das variáveis c e d entre si. Ou seja, c deve receber o valor de d e vice-versa.
let c = 10
let d = 5

let res = [c, d] = [d, c]

console.log(`${c} ${d}`)


// console.log(c,d)

//Ex 09) Crie uma variável chamada combinação e atribua a ela um valor que seja uma combinação de pelo menos dois tipos diferentes (por exemplo, um número e uma string).
let conbinacao = "João " + 27
console.log(conbinacao)