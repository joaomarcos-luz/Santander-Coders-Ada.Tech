c

class Quadrado {
    constructor(base, altura){
        if(isNaN(base) || isNaN(altura))
        throw "Base e Altura deve ser atribuido um número"
    this.base = base
    this.altura = altura
    this.cor = undefined
    }
    calcularArea(){
        return this.base * this.altura
    }
}

const quadrado = new Quadrado(10, 10)
console.log(quadrado)
console.log(quadrado.calcularArea())

//Método Arrow Function 

class Quadrado {
    constructor(base, altura){
        if(isNaN(base) || isNaN(altura))
        throw "Base e Altura deve ser atribuido um número"
    this.base = base
    this.altura = altura
    this.cor = undefined
    }
    calcularArea = () => this.base * this.altura
}

const quadrado = new Quadrado(10, 10)
console.log(quadrado.calcularArea())


//Métodos - oque podem fazer
class Quadrado {
    constructor(base, altura) {
      if (isNaN(base) || isNaN(altura))
        throw "base e altura precisam ser números";
      this.base = base;
      this.altura = altura;
      this.cor = undefined;
    }
    calcularArea() {
      return this.base * this.altura;
    }
    duplicarParaDireita() {
      this.base = this.base * 2;
    }
    duplicarParaBaixo() {
      this.altura = this.altura * 2;
    }
    imprimir() {
      return `<div style='width:${this.base}px;height:${
        this.altura
      }px;background-color:${this.cor || "blue"}'></div>`;
    }
  }
  
  const quadrado = new Quadrado(3, 4);
  console.log(quadrado); // Quadrado { base: 3, altura: 4, cor: undefined }
  console.log(quadrado.calcularArea()); //12
  quadrado.duplicarParaBaixo();
  console.log(quadrado); // Quadrado { base: 3, altura: 8, cor: undefined }
  quadrado.duplicarParaDireita();
  console.log(quadrado); // Quadrado { base: 6, altura: 8, cor: undefined }
  console.log(quadrado.imprimir()); // <div style='width:6px;height:8px;background-color:blue'></div>
  
  //experimente esse no navegador:
  const quadrado2 = new Quadrado(100, 100);
  document.write(quadrado2.imprimir());

//Metodo

class soma{
  constructor(n1, n2){
    if (isNaN(n2) || isNaN(n1)){
        throw "numero1 e numero2, precisam ser números";
  }
    this.n1 = n1
    this.n2 = n2
  }
  somar(){
    return this.n1 + this.n2
  }
}

const resp = new soma(5, 5)
console.log(resp.somar())

//Metodo
class Nome {
  constructor(nome){
    this.nome = nome
  }
  maiusculo(){
    return this.nome = this.nome.toUpperCase()
  }
}

const nome = new Nome("joão")
console.log(nome.maiusculo())

//Metodo
class Calculo{
  constructor(v1, v2){
    this.v1 = v1 
    this.v2 = v2
  }
  multiplicar(){
    return this.v1 * this.v2
  }
}

const calculo = new Calculo(10, 10)
console.log(calculo)
console.log(calculo.multiplicar())