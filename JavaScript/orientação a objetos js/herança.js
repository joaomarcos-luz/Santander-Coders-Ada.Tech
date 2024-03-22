//Herança e polimorfismo
class Pessoa{
    constructor(nome, idade){
        this.nome = nome
        this.idade = idade 
    }
}

class Cidadao extends Pessoa{// Class Cidadao é um extenção da Class Pessoa.
    constructor(nome, idade, cpf, rg){
        super(nome, idade)//Super: refere-se a superclasse que foi herdada.
        this.cpf = cpf
        this.rg = rg
    }
}

const pessoa = new Pessoa("João", 27)//Atribuição de valores a Class Pessoa.
console.log(pessoa)

const cidadao = new Cidadao("Gabriel", 5, "455.321.123-23", 6556893)//Atribuição de valores a Class Cidadao.
console.log(cidadao)


//Herança e polimorfismo
class Animal{
    constructor(especie){
        this.especie = especie
    }
}

class Raca extends Animal{
    constructor(especie, nomeRaca, porte){
        super(especie)
        this.nomeRaca = nomeRaca
        this.porte = porte
    }
}

class Pet extends Raca{
    constructor(especie, nomeRaca, porte, nomePet, idadePet, sexoPet, corPet){
        super(especie, nomeRaca, porte)
        this.nomePet = nomePet
        this.idadePet = idadePet
        this.sexoPet = sexoPet 
        this.corPet = corPet
    }
}

const animal = new Animal("Canina")
console.log(animal)

const raca = new Raca("Canina", "Bull-Terrier", "Medio")
console.log(raca)

const pet = new Pet("Canina", "Bull-Terrier", "Medio", "Apollo", "0.9/meses", "Macho", "Branca")
console.log(pet)


//Herança e polimorfismo
class Animal{
    constructor(especie){
        this.especie = especie
    }
}

class Raca extends Animal{
    constructor(especie, nomeRaca, porte){
        super(especie)//Recebi os parametros da Class Animal
        this.nomeRaca = nomeRaca
        this.porte = porte
    }
}

class Pet extends Raca{
    constructor(especie, nomeRaca, porte, nomePet, idadePet, sexoPet, corPet){
        super(especie, nomeRaca, porte)//Recebi os parametros da Class Raca e Raca recebeu e passo os parametros da Class Animal.
        this.nomePet = nomePet
        this.idadePet = idadePet
        this.sexoPet = sexoPet 
        this.corPet = corPet
    }
}

//Não precisei atribuir valor a Class Anmal e Class Raca, por que usei o super() para passar os parametros.
const pet = new Pet("Canina", "Bull-Terrier", "Medio", "Apollo", "0.9/meses", "Macho", "Branca")
console.log(pet)


//Uso do instanceof para determinar tipos
class Pessoa {
    constructor(nome, idade) {
      this.nome = nome;
      this.idade = idade;
    }
}
  
class Cidadao extends Pessoa {
    constructor(nome, idade, cpf, rg) {
      super(nome, idade);
      this.cpf = cpf;
      this.rg = rg;
    }
}

const cidadao = new Cidadao("teste", 20, "00000", "11111");
console.log(
  cidadao instanceof Cidadao, //true
  cidadao instanceof Pessoa //true
);


//Uso do instanceof para determinar tipos
class Proprietario {
    constructor(nome, idade, sexo) {
      this.nome = nome;
      this.idade = idade;
      this.sexo = sexo;
    }
  }

class Animal{
    constructor(especie){
        this.especie = especie
    }
}

class Raca extends Animal{
    constructor(especie, nomeRaca, porte){
        super(especie)
        this.nomeRaca = nomeRaca
        this.porte = porte
    }
}

class Pet extends Raca{
    constructor(especie, nomeRaca, porte, nomePet, idadePet, sexoPet, corPet){
        super(especie, nomeRaca, porte)
        this.nomePet = nomePet
        this.idadePet = idadePet
        this.sexoPet = sexoPet 
        this.corPet = corPet
    }
}

const proprietario = new Proprietario("João Marcos", 27, "Masculino")
console.log(proprietario)

const pet = new Pet("Canina", "Bull-Terrier", "Medio", "Apollo", "0.9/meses", "Macho", "Branca")
console.log(pet)
console.log(
    pet instanceof Pet, //pet Herda de Pet : True.
    pet instanceof Raca,//pet Herda de Raca : True.
    pet instanceof Animal,//pet Herda de Animal : True.
    pet instanceof Proprietario//pet não Herda da Class Propriedade.
)