//Function Void(Vazia)
let valor = 20

function incremento(){
    valor = 20 + 20
}

incremento()//valor = 20 + 20
console.log(valor)

//functio Void(Vazia)

let valor

function increment(){
    return valor = 20 + 30
}

console.log(increment())

//Função com parametro

function mostraNome(nome){
    console.log(nome)
}
""
mostraNome("João")
mostraNome("Maria")
mostraNome("José")

//Função com parametro

const mostraNome = (nome) => console.log(nome) 

mostraNome("João")
mostraNome("Maria")
mostraNome("José")

//Função com parametro -  return/

function soma(n1, n2){
    const valorSoma = n1 + n2
    return valorSoma
}

console.log(soma(5, 5))
console.log(soma(10, 10))

//Arrow Function(=>)

const soma = (n1, n2) => n1 + n2

console.log(soma(5, 4))
console.log(soma(10, 11))

//Arrow Function(=>)

const soma = (n1, n2) => {
    const resSoma = n1 + n2
    return resSoma
}

console.log(soma(5, 6))
console.log(soma(10, 9))

//Arrow Function(=>)

const soma = (n1, n2) => n1 + n2

const resp1 = soma(5, 2)
const resp2 = soma(10, 2)

console.log(resp1)
console.log(resp2)

//HOF - Higher Order Function 

function multiplyBy(n1){
    return function multiplyBy(n2){
        return n1 * n2
    }
    return n2
}

console.log(multiplyBy(5)(5))

//HOF - Higher Order Function 

const soma = (n1) => (n2) => n1 + n2

console.log(soma(10)(10))

//HOF - Higher Order Function 

const soma = (n1) => (n2) => n1 + n2

const res = soma(10)
console.log(res(5))

//HOF - Higher Order Function 

function multiplyBy(n1){
    return function multiplyBy(n2){
        console.log(n1 + n2)
    }
}

const num2 = multiplyBy(15)
num2(15)

//HOF - Higher Order Function 

function multiplyBy(n1){
    return function multiplyBy(n2){
        console.log(n1 * n2)
    }
}

multiplyBy(2)(5)

//HOF - Higher Order Function 

const multiplyBy = (num1) => (num2) => console.log(num1 * num2)

multiplyBy(10)(10) 

//Composição de Funções  

const gritar = s => s.toUpperCase()
const enfatizar = s => `${s} !!!`

console.log(enfatizar(gritar("joao")))

//Composição de Funções  

const gritar = s => s.toUpperCase()
const enfatizar = s => `${s} !!!`

const gritado = gritar("joão")
const res = enfatizar(gritado)

console.log(res)


//Composição de Funções  

const gritar = s => s.toUpperCase()
const enfatizar = s => `${s} !!!`

const compor = (f1, f2, texto) => {
    let resul = f1(texto)
    resul = f2(resul)
    return resul
}

const resp = compor(gritar, enfatizar, "joão")
console.log(resp)

//Composição de Funções  

const gritar = s => s.toUpperCase()
const enfatizar = s => `${s} !!!`

const compor = (f1, f2, texto) => {
    let resul = f1(texto)
    resul = f2(resul)
    return resul
}

console.log(compor(gritar, enfatizar, "joão"))

//Composição de Funções  

const gritar = s => s.toUpperCase()
const enfatizar = s => `${s} !!!`
const perguntar = s => `${s} ???`

const compor = (f1, f2, f3, texto) => {
    let resul = f1(texto)
    resul = f2(resul)
    resul = f3(resul)
    return resul
}

const resp1 = compor(
    gritar, enfatizar, perguntar, 
    "joão"
    )

console.log(resp1)

const resp2 = compor(
    gritar, perguntar, enfatizar,
    "paulo"
    )
    
console.log(resp2)

//Composição de Funções  

function externa(){
    function interna(){
        console.log("Olá")
    }
    return interna()
}

externa()

//Composição de Funções  

function externa(){
    function interna(){
        return `Olá Mundo!`
    }
    return interna
}

const func  = externa()
console.log(func())

//Composição de Funções  

function externa(){
    function interna(){
        return `Olá Mundo!`
    }
    return interna()
}

console.log(externa())

//Composição de Funções  

function texto1(txt1){
    return function texto2(txt2){
        return console.log(`${txt1} ${txt2}!`)
    }
}

texto1("Hello")("Word")

//Composição de Funções  

function texto1(txt1){
     function texto2(txt2){
        return console.log(`${txt1} ${txt2}!`)
    }
    return texto2
}

texto1("Hello")("Word")

//Composição de Funções  

function texto1(txt1){
    function texto2(txt2){
       return `${txt1} ${txt2}!`
   }
   return texto2
}

console.log(texto1("Hello")("Word"))

//Composição de Funções  

function texto1(txt1){
    return function texto2(txt2){
       return `${txt1} ${txt2}!`
   }
}

console.log(texto1("Hello")("Word"))

//Composição de Funções  

function texto1(txt1){
    function texto2(txt2){
       return `${txt1} ${txt2}!`
   }
   return texto2
}

const texto2 = texto1("Hello")
const res = texto2("Word")
console.log(res)

//Composição de Funções  

function texto1(txt1){
    function texto2(txt2){
       return `${txt1} ${txt2}!`
   }
   return texto2
}

const saldacao = texto1("Hello")
console.log(saldacao("Word"))

//Composição de Funções - Passando parametros de forma parcelada.

function externa(nome){
    return function (idade){
        return `Meu nome é ${nome} e tenho ${idade} anos.`
    }
}

const joaofnc = externa("joao")
const mariafnc = externa("Paulo")

console.log(joaofnc(90))
console.log(joaofnc(27))
console.log(joaofnc(13))
console.log(joaofnc(08))
console.log(" ")
console.log(mariafnc(13))
console.log(mariafnc(11))
console.log(mariafnc(8))
console.log(mariafnc(4))

//Composição de Funções  usando function anonima

function soma(n1){
    return function(n2){
        return n1 + n2
    }
}

console.log(soma(1)(1))

//Composição de Funções   usando function anonima

function soma(n1){
    return function(n2){
        return console.log(n1 + n2)
    }
}

soma(2)(2)

//Composição de Funções   usando function anonima

function soma(n1){
    return function(n2){
        return n1 + n2
    }
}

const somar = soma(1)
const resp = somar(2)
console.log(resp)

//Composição de Funções   usando function anonima

function soma(n1){
    return function(n2){
        return n1 + n2
    }
}

const somar = soma(1)
console.log(somar(4))

//Composição de Funções - usando function anonima - sem parametro

function texto(){
    return function(){
        return "Estou praticando composição de funções"
    }
}

const resp = texto()
console.log(resp())

//Composição de Funções - usando function anonima - sem parametro

function texto(){
    return function(){
        return "Estou praticando composição de funções"
    }
}

console.log(texto()())

//Composição de Funções - usando function anonima - sem parametro

function texto(){
    return function(){
        return console.log("Estou praticando composição de funções")
    } // Se fazer com o console.log dentro da funcao interna da undefinid
}

const resp = texto()
console.log(resp())

//Composição de Funções  usando arrow function

const soma = (n1) => (n2) => n1 + n2
const valor1 = soma(3)
const valor2 = valor1(3)
console.log(valor2)

//Composição de Funções  usando arrow function

const soma = (n1) => (n2) => n1 + n2
const res = soma(5)
console.log(res(10))

//Composição de Funções  usando arrow function

const soma = (n1) => (n2) => console.log(n1 + n2)
soma(5)(10)

//Composição de Funções  usando arrow function

const soma = (n1) => (n2) => n1 + n2
console.log(soma(10)(10))

//Composição de Funções  

const gritar = s => s.toUpperCase()
const exclamar = s => `${s} !!!`
const enterogar = s => `${s} ???`

function compor(fgri, fexc, fent) {
    return function texto(txt){
        let res = fgri(txt)
        res = fexc(res)
        res = fent(res)
        return res 
    }
}

const resp = compor(gritar, exclamar, enterogar)
console.log(resp("joão"))

//Composição de Funções  

const gritar = s => s.toUpperCase()
const exclamar = s => `${s} !!!`
const enterogar = s => `${s} ???`

function compor(...funcoes) {
    return function texto(txt){
        let resul = txt
        for (const funcao of funcoes) {
            resul = funcao(resul)
        }
        return resul
    }
}

const exagerar1 = compor(gritar, exclamar, enterogar)
const exagerar2 = compor(gritar, exclamar)

const resultado1 = exagerar1("joão")
const resultado2 = exagerar2("paulo")

console.log(resultado1)
console.log(resultado2)

//Composição de Funções  

const gritar = s => s.toUpperCase()
const exclamar = s => `${s} !!!`
const enterogar = s => `${s} ???`
const esticar = s => s.split("").reduce((final, l) => final + ` ${l}`)
 

function compor(...funcoes) {
    return function texto(txt){
        let resul = txt
        for (const funcao of funcoes) {
            resul = funcao(resul)
        }
        return resul
    }
}

const exagerar1 = compor(gritar, exclamar, enterogar, esticar)
const exagerar2 = compor(gritar, exclamar, enterogar)
const exagerar3 = compor(gritar, exclamar)
const exagerar4 = compor(gritar, enterogar)

console.log(exagerar1("joão"))
console.log(exagerar2("marcos"))
console.log(exagerar3("soares"))
console.log(exagerar4("luz"))

//Composição de Funções  

const maius = s => s.toUpperCase()
const arr = s => s.split("")

function compor(...funcoes){
    return function nome(txt){
        let resul = txt
        let array = []
        for (const elemento of funcoes) {
            resul = elemento(resul)
        }
        return resul
    }
}

const resul = compor(maius, arr)
console.log(resul("joao"))