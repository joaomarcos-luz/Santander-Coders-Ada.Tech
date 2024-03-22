//Classe Quadrado com validação de tipo em base e altura


class Quadrado{ //A diferença pra variavel é Q maiusculo
    constructor(base, altura){
        if(isNaN(base) || isNaN(altura)) // Mostrara o erro caso for uma String
            throw "Base e altura precisa ser numeros"
        this.base = base
        this.altura = altura
    }
}

const quadrado = new Quadrado("a", "b")
console.log(quadrado)

//Caso tenha cor o quadrado definiremos como Undefined e definiremos fora dá Classe

class quadrado{
    constructor(base, altura, cor){
        if(isNaN(base) || isNaN(altura))
        throw "A base e altura precisa ser número"
    this.base = base
    this.altura = altura
    this.cor = undefined
    }
}

const quadrado1 = new quadrado(10, 10)
console.log(quadrado1)

quadrado1.cor = "Azul"
console.log(quadrado1)