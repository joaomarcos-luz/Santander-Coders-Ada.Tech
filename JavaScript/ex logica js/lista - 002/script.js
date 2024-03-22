Ex 01. Encontrando o Tesouro Perdido
Você está em uma expedição em busca de um tesouro perdido. Para localizar o tesouro, você tem um mapa com pistas. Retorne a posição do elemento que representa o tesouro.

let mapa = ['cade', 'o', 'tesouro']
let x = mapa.indexOf("tesouro")
console.log(x)


Ex 02. Organizando Livros na estante
Você está organizando sua estante de livros. Retorne um array com os títulos de livros organizados em ordem alfabética.

let arrayLivro = ['The Whicher', 'Os 3 porquinhos', 'Bela e aFera', 'Peter Pan']
let ordemAlfabetica  = arrayLivro.sort()
console.log( ordemAlfabetica)


Ex 3. Removendo itens indesejados
Você recebeu um array de números, mas quer remover todos os números pares. Retorna um novo array apenas com os números ímpares.

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let arrayImpar = array.filter(n => n % 2 === 1)
console.log(arrayImpar)


Ex 04. Qual o resultado das seguintes comparações:

const a = 5;
const b = 10;
const c = 2;

const res1 = a < b && b > c
console.log(res1)

const res2 = a > b && b < c;
console.log(res2)

const res3 = a < b && b < c;
console.log(res3)

const res4 = a < b || b < c;
console.log(res4)

const res5 = a > b && b > c;
console.log(res5)

const res6 = !(a > c);
console.log(res6)

const res7 = a < b || b < c && a < c;
console.log(res7)


Ex 5. Verificando acesso a festa
Imagine que você é o segurança de um clube exclusivo. Os clientes devem ter mais de 18 anos para entrar. Crie um programa que verifica a idade do cliente e permite ou nega o acesso com base nessa condição. Crie um código que solicite a idade do cliente. Se a idade for maior ou igual a 18, exiba "Acesso permitido!". Caso contrário, exiba "Acesso negado!".

let idade = Number(prompt('Digite um numero: ')) // se não for usar retirar
let idade1 = 27 //se for ultilizar o prompt retirar.

if(idade1 > 18) {
    console.log("Acesso permitido!")
} else {
    console.log("Acesso negado!")
}


Ex 06. Decidindo o Melhor Caminho para a Escola
Você é um estudante a caminho da escola. Dependendo do clima, você pode decidir o meio de transporte mais adequado. Solicite ao usuário se está chovendo. Se estiver, exiba "Leve um guarda-chuva!". Se não estiver, exiba "Vá de bicicleta!".

let estudante = prompt('Esta chovendo? ') // Se não for ultilizar retirar
let estudante = "Chuva" //Se não for ultilizar retirar 

let tempo = estudante.toLowerCase() === "chuva" ? "Leve um guarda-chuva!" : "Vá de bicicleta!"

console.log(tempo)


Ex 7. Calculando desconto de compra
Você está em uma loja e deseja calcular o desconto em uma compra com base no tipo de cliente. Crie um programa que, com base no tipo escolhido (normal, premium ou vip), calcule o desconto a ser aplicado sobre o valor da compra. Solicite ao usuário escolher entre "normal", "premium" e "vip" como tipos de cliente. Com base na escolha, calcule e exiba o valor final da compra após aplicar o desconto correspondente.

normal: desconto de 5%
premium: desconto de 10%
vip: desconto de 15%

//Usanso prompt
//let valorCompra = Number(prompt('Qual valor da compra?'))
//let client = prompt("Qual o tpo de cliente: normal, premim ou vip?")

let valorCompra = 100
let cliente = "Premium"
let desconto
let valorDesconto

switch (cliente.toLowerCase()) {
    case "normal":
        desconto = (valorCompra * 5) / 100
        valorDesconto = valorCompra - desconto
        break;
    case "premium":
        desconto = (valorCompra * 10) / 100
        valorDesconto = valorCompra - desconto
        console.log(valorDesconto)
        break
    case "vip":
        desconto = (valorCompra * 15) / 100
        valorDesconto = valorCompra - desconto
        console.log(valorDesconto)
    default:
        console.log("Tipo de cliente não identificado!")
        break;
}


Ex 8. Nome do produto
Você está criando um sistema de inventário e precisa registrar o nome de um novo produto. Crie um programa que solicite ao usuário informar o nome do produto e, caso não seja fornecido, atribua o valor padrão “Produto sem nome”.

//let nomeProduto = prompt("Qual o nome do produto?") || "Produto sem nome"

let nomeProduto = "" || "Produto sem nome"
console.log(`Nome do produto: ${nomeProduto}`)