//Atributos e métodos estáticos

class Pessoa{
    static totalCadastro = 0
    constructor(nome){
        this.nome = nome
        ++Pessoa.totalCadastro
    }
}

const pessoa = new Pessoa("João")
console.log(pessoa)
console.log(Pessoa.totalCadastro) // Mostrará a quantidade de cadastro mas pra isso não usa a variavel e sim a classe.


//Atributos e métodos estáticos
class pessoa{
    static totalCadastro = 0
    constructor(nome){
        this.nome = nome
        ++pessoa.totalCadastro
    }
}

const pessoa1 = new pessoa("João")
console.log(pessoa.totalCadastro)

const pessoa2 = new pessoa("Nelma")
console.log(pessoa.totalCadastro)

const pessoa3 = new pessoa("Paulo")
console.log(pessoa.totalCadastro)

const pessoa4 = new pessoa("Ricardo")
console.log(pessoa.totalCadastro)

const pessoa5 = new pessoa("Apollo")
console.log(pessoa.totalCadastro)

const pessoa6 = new pessoa("Zaia")
console.log(pessoa.totalCadastro)

//Atributos e métodos estáticos
class Utils {
    constructor() {}
  
    static calcularIdade(data) {
      const dataAtual = new Date();
      const anoAtual = dataAtual.getUTCFullYear();
      const mesAtual = dataAtual.getMonth() + 1;
      const diaAtual = dataAtual.getDate();
  
      const dataAnterior = new Date(data.replace("-", "/"));
      const anoAniversario = dataAnterior.getUTCFullYear();
      const mesAniversario = dataAnterior.getMonth() + 1;
      const diaAniversario = dataAnterior.getDate();
  
      let idade = anoAtual - anoAniversario;
  
      if (
        mesAtual < mesAniversario ||
        (mesAtual == mesAniversario && diaAtual < diaAniversario)
      ) {
        idade--;
      }
  
      return idade;
    }
  }
  
  class Pessoa {
    constructor(nome, dataNascimento) {
      this.nome = nome;
      this.dataNascimento = dataNascimento;
      this.idade = Utils.calcularIdade(this.dataNascimento);
    }
  }
  
  const p1 = new Pessoa("João", "1996-07-08");
  console.log(p1)

  //Atributos e métodos estáticos

  class Dobrar{
    constructor(){}
    static dobraValor(num){
        return num * 2
    }
  }

  class Dobro{
    constructor(valor){
        if(isNaN(valor)){
            throw "Apenas números são validos, Digite um Número!"
        }
    this.valor = valor
    this.dobro = Dobrar.dobraValor(valor)
    }
  }

const dobro = new Dobro(5)
console.log(dobro)


  //Atributos e métodos estáticos
  class Maiusculo{
    constructor(){}

    static converter(nome){
        return nome.toUpperCase()
    }
  }

class Nome{
    constructor(nome){
        if(typeof nome !== "string"){
            throw "Converte apenas letras, Digite uma Letra!"
        }
    this.nome = nome
    this.maiusculo = Maiusculo.converter(nome)
    }
  }

  const nome1 = new Nome("joão")
  console.log(nome1)

  const nome2 = new Nome("Paulo")
  console.log(nome2)

  //Atributos e métodos estáticos / pratica 02
  class maiusculo{
    constructor(){}
    static converter(nome){
      return nome.toUpperCase()
    }
  }
  class nome{
    constructor(nome){
      this.nome = nome
      this.maiusculo = maiusculo.converter(nome)
    }
  }

  const nome1 = new nome("nelma")
  console.log(nome1)
  
   //Atributos e métodos estáticos 

   class cliente{
    static 
   }

   //Static
   class conveter{
    static maiuscula(texto){
      return texto.toUpperCase()
    }
   }

   const texto = "olá mundo!"
   const convertido = conveter.maiuscula(texto)
   console.log(convertido)


//Static
  class Quadrado{
    static calculoArea(base, altura){
        return base * altura
    }

    constructor(base, altura){
      this.base = base
      this.altura = altura
    }

    getarea(){
      return this.area = Quadrado.calculoArea(this.base, this.altura)
    }
  }

  const quandrado = new Quadrado(5, 5)
  const area = quandrado.getarea()
  console.log(area)


//Static
  class Pessoa{
    static contar = 0

    constructor(){
      Pessoa.contar ++
    }

    static getPessoa(){
      return Pessoa.contar
    }
  }

  const pessoa1 = new Pessoa("João")
  const pessoa2 = new Pessoa("Hevyny")
  const pessoa3 = new Pessoa("Ricardo")
  console.log("Número de pessoas: " + Pessoa.getPessoa())


//Static
class Jogos{
  static = "jogo de ação"//Todo jodo tera esta identificação devido ao static que faz com que oque estiver dentro dele seja ultilizado para todos.

  constructor(nome){
    this.nome = nome
  }
}

const jogo1 = new Jogos("Red Ded")
console.log(jogo1)

const jogo2 = new Jogos("GTA V")
console.log(jogo2)

const jogo3 = new Jogos("Call Of Duty")
console.log(jogo3)

//Static
class Converter{
  static maiusculo(nome){
    return nome.toUpperCase()
  }

  constructor(nome){
    this.nome = Converter.maiusculo(nome)
  }
}

const convertido1 = new Converter("joão")
console.log(convertido1)

const convertido2 = new Converter("nelma")
console.log(convertido2)

const convertido3 = new Converter("ricardo")
console.log(convertido3)

const convertido4 = new Converter("hevyny")
console.log(convertido4)

const convertido5 = new Converter("tainara")
console.log(convertido5)

const convertido6 = new Converter("paulo ricardo")
console.log(convertido6)