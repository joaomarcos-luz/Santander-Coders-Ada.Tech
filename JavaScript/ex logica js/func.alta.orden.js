//Funções de alta-ordem
const dividir = (a, b) => a && b > 0 ? a / b : NaN

const calcular = (calcular, a, b) => calcular(a, b)

const resp = calcular(dividir, 50, 5)

console.log(resp)


//Funções de alta-ordem
const saldacao = (nome) => `Hello ${nome}`

const qualNome = (salde) => {//function passada de parametro.
    let txt = salde("Mary")//Declaro uma function dentro do corpo de outra function.
    return txt
}

console.log(qualNome(saldacao))//Uma function chama a outra.


//Funções de alta-ordem
const saldacao = (nome) => `Hello ${nome}`

const qualNome = (salde) => {//function passada de parametro.
    let txt = salde("Mary")//Declaro uma function dentro do corpo de outra function.
    return txt
}

console.log(qualNome(nome => {
    return `Cliente ${nome}`
}))


//Funções de alta-ordem
const animeNaruto = [//O Filter é uma Function de alta orden e não percebemos.
    {nome: "Naruto", personagem: "Heroi"},
    {nome: "Pain", personagem: "Vilao"}
]

const herois = animeNaruto.filter(p => p.personagem === "Heroi")

console.log(herois)


//Funções de alta-ordem
const animeNaruto = [//O Filter é uma Function de alta orden e não percebemos.
    {nome: "Naruto", personagem: "Heroi"},
    {nome: "Pain", personagem: "Vilao"}
]

const isHeroi = tipo => tipo.personagem === "Heroi"//Exemplo que é uma função dentro da oltra.

const herois = animeNaruto.filter(isHeroi)

console.log(herois)


//Funções de alta-ordem
function soma(multplicar){
    return function(numero){
        return multplicar * numero
    }
}

const duplicar = soma(2)
const triplicar = soma(3)
const quadriplicar = soma(4)

console.log(duplicar(10))
console.log(triplicar(10))
console.log(quadriplicar(10))


//Funções de alta-ordem
const soma = multplicar => numero => multplicar * numero//Usando Arow function.

const duplicar = soma(2)
const triplicar = soma(3)
const quadriplicar = soma(4)

console.log(duplicar(10))
console.log(triplicar(10))
console.log(quadriplicar(10))