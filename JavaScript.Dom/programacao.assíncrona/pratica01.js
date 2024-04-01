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


/*Imagine que quero usar somarAsync para fazer 10 + 20 + 30 + 40 + 50. Neste caso, a solução poderia ser implementada dessa forma:*/
//Exemplo 01

const somarAsync = (a, b, callback) => {
    setTimeout(() => {
        const resultado = a + b;
        callback(resultado);
    }, 1000);
};

somarAsync(10, 20, (res1) => {
    somarAsync(res1, 30, (res2) => {
        somarAsync(res2, 40, (res3) => {
            somarAsync(res3, 50, (resultado) => {
                console.log(resultado);
            });
        });
    });
});

//Exemplo 02
const soma = (a, b, callback) => setTimeout(() => {
    if(callback) callback(a + b)
} ,1000)

soma(10, 20, (res1) => {
    soma(res1, 30, (res2) => {
        soma(res2, 50, (res3) => {
            soma(res3, 90, (resultado) => {
                console.log(resultado)
            })
        })
    })
})

//Exemplo 03
const somar = (a, b , callback) => setTimeout(() => {
    const resultado = a + b
    callback(resultado)
} ,1000)

somar(10, 10, (res1) => {
    somar(res1, 20, (res2) => {
        somar(res2, 50, (res3) => {
            somar(res3, 80, (resultado) => {
                console.log(resultado)
            })
        })
    })
})


//Exemplo
const soma = (a, b, callback) => setTimeout(() => {
    if(callback) callback(a + b)
} ,1000)

const callback = (res) => console.log(res)

soma(5, 8, callback)