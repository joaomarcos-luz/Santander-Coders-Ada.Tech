//Introduão a POO
const pessoa = {
    nome: "joão",
    idade: 27,
    alteraIdade: function (novaIdade) {
        this.idade = novaIdade
    }
}

pessoa.alteraIdade(pessoa.idade + 25)

console.log(pessoa.idade)
console.log(pessoa)

//Introduão a POO

const pessoa = {
    nome: "joão",
    idade: 27,
    alteraIdade: function (novaIdade) {
        this.idade = novaIdade
    }
}

pessoa.idade = 32
console.log(pessoa.idade)
console.log(pessoa.nome)
console.log(pessoa)

//Introduão a POO

const quadrado = {
  base: 10,
  altura: 10,
  calcularArea: function (v1, v2) {
    return this.base * this.altura;
  },
}

const area = quadrado.calcularArea()

console.log(area)