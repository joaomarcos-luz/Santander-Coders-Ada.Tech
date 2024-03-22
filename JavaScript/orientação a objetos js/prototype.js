//Prototypo
class Pessoa{
    nome
    constructor(nome){
        this.nome = nome
    }
}

const pessoa = new Pessoa("Marcos")
 
Pessoa.prototype.cpf = "123.456.789-10"
console.log(Pessoa.cpf)

console.log(pessoa)


//Prototypo
class Energia{
    constructor(disparos){
        this.disparos = disparos
    }
}

const energia = new Energia(100)

Energia.prototype.disparar=function () {//A cada vez que chamar o disparar diminui o valor do disparos.
    if(this.disparos > 0)
    this.disparos--
}

energia.disparar()//A cada vez chamado diminui o disparar
energia.disparar()
energia.disparar()
energia.disparar()
energia.disparar()

console.log(Energia)
console.log(energia)
console.log(energia.disparos)
//O valor é 95 por que o disparar foi chamado 5 vezes.