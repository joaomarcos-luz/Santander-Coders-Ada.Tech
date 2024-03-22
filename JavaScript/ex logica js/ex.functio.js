//Function
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function rolagem(valor){
    return valor ? randomIntFromInterval(1, valor) : console.log("Digite um número")
}

function validar(valor){
    return valor === 4 || valor === 6 || valor === 8 || valor === 10 || valor === 20
}

let result = false

do {
    const dice = 20
    if(dice){
        if(validar(dice)){
            console.log("Rolagem" + rolagem(dice))
            result = true
        }
    }else{
        console.log("Valor não encontrado")
    }

} while (!result);


//Function
function obterNumero(){
    const numero = "a"
    if(isNaN(numero)){
        throw "Digite um número"
    } return numero
}


function calcular(operado, num1, num2){
    switch (operado) {
        case "+" :
            return num1 + num2
            break
        case "-" :
            return num1 - num2
            break
        case "*" :
            return num1 * num2
            break
        case "/" :
            return num1 / num2
            break
        default:
            throw "Operador númerico não encontrado"
            break;
    }
}

const operador = "+"
const num1 = obterNumero()
const num2 = obterNumero()
const res = calcular(operador, num1, num2)
console.log(res)