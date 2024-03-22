//Metodo Reduce serve para transforma um array em um único valor.

//Reduce
const array = [1, 5, 9, 8, 2]

const total = array.reduce((acumular, numeroAtual) => acumular + numeroAtual)//Arrow Function

console.log(total)


//Reduce
const array = [1, 5, 9, 8, 2]

const total = array.reduce(function(acumular, numeroAtual){
    return acumular + numeroAtual
})//Function Normal

console.log(total)


//Reduce
const array = [1, 5, 9, 8, 2]

const total = array.reduce((acumular, numeroAtual) => acumular + numeroAtual ,5)//Acumulador já começa com 5

console.log(total)


//Reduce
const array = [1, 5, 9, 8, 2]

const total = array.reduce(function(acumular, numeroAtual){
    return acumular + numeroAtual
}, 5)//Acumulador começa com 5

console.log(total)


//Reduce
const intensCarrinho = [
    {produto: "Controle", quantidade: "2", preco: 350},
    {produto: "Cadeira", quantidade: "1", preco: 799},
    {produto: "Baterria", quantidade: "2", preco: 120}
]

const valorTotalCarrinho = intensCarrinho.reduce((somarCarrinho, valorAtual) => somarCarrinho + valorAtual.quantidade * valorAtual.preco ,0)

console.log(valorTotalCarrinho)


//Reduce
const clientes = ["João", "Maarcos", "Pedro", "Paulo", "José"]

const nomesCliente = clientes.reduce((nome, nomeAtual) => {
    const  inicialNome = nomeAtual[0].toLocaleLowerCase()
    if(nome[inicialNome]){
        nome[inicialNome] ++
    }else{
        nome[inicialNome] = 1
    }
    return nome
}, {})

console.log(nomesCliente)


//Reduce
const clientes = ["João", "Maarcos", "Pedro", "Paulo", "José"]

const InicialNomesCliente = clientes.reduce((nomesInicial, nomesAtual) =>{
    const letraInicial = nomesAtual[0].toLocaleLowerCase()
    nomesInicial[letraInicial] ? nomesInicial[letraInicial]++ : nomesInicial[letraInicial] = 1
    return nomesInicial//Usando Ternario
},{})//Cria novo objeto por que começa com novo objeto.

console.log(InicialNomesCliente)


//Reduce
const pessoas = [
    {nome: "Paulo", idade: 13},
    {nome: "tiago", idade: 29},
    {nome: "Ruan", idade: 22},
    {nome: "Adriano", idade: 34},
    {nome: "Gabriel", idade: 5},
    {nome: "Ricardo", idade: 40}
]

const idadePessoas = pessoas.reduce((pessoaIdade, pessoaAtual) => {
    if(pessoaIdade[pessoaAtual.idade]){
        pessoaIdade[pessoaAtual.idade].push(pessoaAtual.nome)
    }else{
        pessoaIdade[pessoaAtual.idade] = []
        pessoaIdade[pessoaAtual.idade].push(pessoaAtual.nome)
    }
    return pessoaIdade
}, {})

console.log(idadePessoas)


//Reduce
const pessoas = [
    {nome: "Paulo", idade: 13},
    {nome: "tiago", idade: 29},
    {nome: "Ruan", idade: 22},
    {nome: "Adriano", idade: 34},
    {nome: "Gabriel", idade: 5},
    {nome: "Ricardo", idade: 40}
]

const idadePessoas = pessoas.reduce((pessoaIdade, pessoaAtual) => {
    
    pessoaIdade[pessoaAtual.idade] = pessoaIdade[pessoaAtual.idade] || []
    pessoaIdade[pessoaAtual.idade].push(pessoaAtual.nome)//Essa logica econimizou o If / Else

    return pessoaIdade
}, {})

console.log(idadePessoas)


//Reduce
const numeros = [-10, -5, 1, 5, 8, 10, 13]

const soma = numeros.reduce((arrayAcumulador, correnteNumeros) => {
    if(correnteNumeros > 0) arrayAcumulador.push(correnteNumeros * 2)
    return arrayAcumulador //Pra isso pode ser usado o Filter() e map().
}, [])

console.log(soma)

//Faz o mesmo 
const numeros = [-10, -5, 1, 5, 8, 10, 13]
const soma = numeros.filter(n => n > 0).map(n => n * 2)
console.log(soma)
//O Reduce é muito bom mas não é bom pra todos os casos isso vai depender da ocasião.
//O Reduce muita das vezes é melhor que o For e isso é muito interresante por gerar um codigo mais limpo e mais facil.