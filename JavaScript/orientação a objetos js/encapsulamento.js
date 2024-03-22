//Encapsulamento

//Quadrado com cor encapsulada
class Quadrado{
    #cor
    constructor(base, altura){
        if(isNaN(base) || isNaN(altura)){
            throw "O valor da base e altura tem que ser número"
        }
    this.#cor = "Blue"//# bloqueia a a visualização do conteudo dentro desse metodo.
    this.base = base
    this.altura = base
    }
    areaTotal(){
        return this.base * this.altura
    }
}

const quadrado = new Quadrado(4, 5)
console.log(quadrado)


 //Quadrado com cor encapsulada
class Quadrado{
    #cor = "Blue" //Pode ser colocado forá do constructor quanto dentro.
    constructor(base, altura){
        if(isNaN(base) || isNaN(altura)){
            throw "O valor da base e altura tem que ser número"
        }
    this.base = base
    this.altura = base
    }
    areaTotal(){
        return this.base * this.altura
    }
}

const quadrado = new Quadrado(4, 5)
console.log(quadrado)


 //Quadrado com cor encapsulada
 class Cliente{
    #saldo
    constructor(nome, idade){
        this.#saldo = 100
        this.nome = nome
        this.idade = idade 
    }
 }


//Quadrado com cor encapsulada
class Cliente{
    #saldo = 1000
    constructor(nome, idade){
        this.nome = nome
        this.idade = idade 
    }
 }

 const cliente = new Cliente("João", 27)
 console.log(cliente)


//Quadrado com cor encapsulada
 class Quadrado {
    #cor;
    constructor(base, altura) {
      this.#cor = "blue";
      this.base = base;
      this.altura = altura;
      this.area = this.#obterArea();
    }
  
    #obterArea() {
      return this.base * this.altura;
    }
  }
  
  const quadrado = new Quadrado(3, 4);
  console.log(quadrado); // Quadrado { base: 3, altura: 4 }
  quadrado.cor = "red"; // Errado! cria um atributo cor a mais no objeto!
  // Exibe mensagem de erro - "Propriedade '#cor' não pode ser acessada de 
  // fora da classe 'Quadrado' porque possui identificador de atributo privado".
  console.log(quadrado.#cor); 
  // Exibe mensagem de erro - "Propriedade '#obterArea' não pode ser acessada 
  // de fora da classe 'Quadrado' porque possui identificador de atributo privado".
  console.log(quadrado.#obterArea()); 
   