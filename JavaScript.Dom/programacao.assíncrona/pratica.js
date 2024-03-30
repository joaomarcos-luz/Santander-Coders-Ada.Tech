//Utilizando funções assíncronas por callback

/*setTimeout é uma função em JavaScript que é usada para agendar a execução de um trecho de código após um determinado período de tempo.*/

const delayedHello = function () {
    setTimeout(() => {
      console.log("Hello!");
    }, 1000);
  };

delayedHello()


//Usando Arrow Functiom.

const delayHello = () => setTimeout(() => console.log("Hello Word.") ,1000)

delayHello()


/*Quando uma função assíncrona retorna um resultado, a forma de obter esse resultado é diferente de uma função normal. Não é possível usar o return na função assíncrona, portanto, não é possível pegar o resultado como faríamos normalmente. Para contornar essa limitação, solicitamos que seja passada uma função por parâmetro, que será invocada quando a parte assíncrona terminar. Chamamos essa função de callback.

Por exemplo:*/

const somarAsync = function(a, b, callback){
    setTimeout(() => {
        if(callback) callback(a + b)
    }, 1000)//Espera 1 segundo pra execultar a function.
}

//if verifica se o callback foi passado
//A arrow function callback recebe seu parametro dentro da function somarAsync.

const callback = (resultado) => console.log(resultado)
somarAsync(10, 10, callback)


//Usando Arrow Function
const somarAsyn = (a, b, c) => setTimeout(() => {
    if(c) c(a + b)/*Se o if tiver apenas uma opção não precisa usar chaves para abrir e fechar a logica.*/
},1000)

const callback = (resultado) => console.log(resultado)

somarAsyn(10, 15, callback)//So ira execultar se o callbeck for passado como parametro.

