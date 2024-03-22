//Métodos de acesso e accessors
//Exemplo: Classe Quadrado com cor encapsulada e métodos de acesso
class Quadrado {
    #cor
    #area
    constructor(base, altura){
        this.#cor = "Blue"
        this.base = base
        this.altura = altura
        this.#obterArea()
    }

    get cor(){
        return this.#cor//Mostra o valor privado.
    }

    set cor(novaCor){//Atribuir um novo valor a um valor privado.
        this.#cor = novaCor
    }

    get area(){
        return this.#area
    }

    #obterArea(){
        this.#area = this.base * this.altura
    }
}

const quadrado = new Quadrado(20, 20)
console.log(quadrado)
console.log(quadrado.cor)
quadrado.cor = "red"
console.log(quadrado.cor)
console.log(quadrado.area)


//Métodos de acesso e accessor

class Quadrado{
    #area

    obterArea(){
        return this.base * this.altura// usandoo a função fora do construtor.
    }
    constructor(base, altura, cor){
        this.base = base
        this.altura = altura
        this.cor = cor
        this.#area = this.obterArea()
    }

   get area(){
    return this.#area//Mostra o metodo privado Area.
   }

   set area(novaArea){
        return this.#area = novaArea// Usando o set para altera o valor de um metodo privado.
   }
}

const quadrado = new Quadrado(5, 5, "Blue")
console.log(quadrado)
console.log(quadrado.area)
quadrado.area = 500//alterando metodo privado.
console.log(quadrado.area)


//Métodos de acesso e accessor
class Quadrado{
    #area
    #cor
    constructor(base, altura){
        this.#cor = "Blue"
        this.base = base
        this.altura = altura
        this.#areaTotal()
    }

    get cor(){
        return this.#cor
    }

    get area(){
        return this.#area
    }

    #areaTotal(){
        this.#area = this.base * this.altura
    }
}

const quadrado = new Quadrado(8, 13)
console.log(quadrado)//Mostra o objeto.
console.log(quadrado.cor)//Mostra a Cor privada do objeto.
console.log(quadrado.area)//Mostra a Area privada do objeto.


//Métodos de acesso e accessor
class Quadrado{
    #cor
    constructor(base, altura){
        if(isNaN(base) || isNaN(altura)){
            throw "A base e altura deve ser um número"
        }
        this.base = base
        this.altura = altura
    }

    get cor(){
        return this.#cor
    }

    set cor(cor){
        if (cor !== "red" && cor !== "green" && cor !== "blue") {
            console.log(
              'O valor da propriedade cor deve ser "red", "green" ou "blue"'
            );
        } else {
            this.#cor = cor;
        }
    }
}

const quadrado = new Quadrado(10, 10)
console.log(quadrado)
console.log(quadrado.cor)
quadrado.cor = "red"
console.log(quadrado.cor)


//Métodos de acesso e accessor
class Quadrado{
    #cor
    #base
    #altura
    constructor(base ,altura){
        if(isNaN(base) || isNaN(altura))
            throw "A base e altura deve ser em número."
        this.#base = base
        this.#altura = altura
    }

    get cor(){
        return this.#cor
    }

    set cor(cor){
        if(cor !== "Blue" && cor !== "Red" && cor !== "Green"){
            console.log(
                "O valor da propriedade cor deve ser: Blue, Red, Green"
            )
        } else {
            this.#cor = cor
        }
    }

    get base(){
        return this.#base
    }

    set base(base){
        if(isNaN(base)) throw "A base precisa ser um número"
        this.#base = base
    }

    get altura(){
        return this.#altura
    }

    set altura(altura){
        if(isNaN(altura)) throw "A altura precisa ser um número"
        this.#altura = altura
    }
}

const quadrado = new Quadrado(5, 5)
console.log(quadrado)//Mostrara um array vazio pos todos os atributos são privados.

quadrado.cor = "Blue"//Atribuindo valor a cor.
console.log(quadrado.cor)//valor cor.

quadrado.base = "3"//Atribuindo valor a base.
console.log(quadrado.base)//valor base.

quadrado.altura = 5 //Atribuindo valor a altura.
console.log(quadrado.altura)//valor altura.