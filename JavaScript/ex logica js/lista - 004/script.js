1. Escreva uma função que retorne o dobro de um número.

let dobro = (num) => num * 2 
console.log(dobro(5))


2. Explique o resultado das operações abaixo e justifique com base na coerção de tipos em JavaScript.

console.log(4 + "4"); //Retornara 44, o sinal de + vai concatenar.
console.log("4" - 2); //Retornara 2, vai converter a string em numro
console.log(false == ""); //Retornnara true, usando == o JavaScript verifica o valor e não o tipo
console.log("  1  " == 1); //Retornara true, quando usamos == não defini tipo de iten e entende que anbos são iguais.


3. Crie uma função que recebe um array de números como parâmetro e retorna o maior número do array.

function array(numeros) {
    
    let maior = numeros[0]

    for (let i = 0; i <  numeros.length; i++) { 
        if (numeros[i] > maior){
            maior = numeros[i]
        }
    }
    return maior
}

const resultado = array([90, 08, 99, 13, 09])
console.log(resultado)


4. O que será impresso no console após a execução do código abaixo?

const str2 = "10";
const num2 = 10;

console.log(str2 == num2); //Vai da true usando == e false usando ===
//== verifica se os valores são iguais 
//=== verifica se os itens são iguais
//Nesse exempo temos uma String e um Number


5. Implemente uma função recursiva que retorna a soma de todos os números de 1 a n.

function soma(n) {
    if(n === 1){
        return 1
    }else{
        return n + soma(n - 1)
    }
}

let n = 5
let resultado = soma(n)
console.log(`A soma de números de  1 a ${n} é ${resultado}`)


6. Qual será o valor de x após a execução dessa função?

function teste() {
    let x = 10;
}

let res = teste();
console.log(res);

7. Crie uma função que recebe uma string como parâmetro e retorna a string em letras maiúsculas.

function conversorDeNome(nome) {
    return nome.toUpperCase()
}

console.log(conversorDeNome("joão"))