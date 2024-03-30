//Utilizando funções assíncronas por Promises

//Exemplo 01
const somarAsync = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const res = a + b
            resolve(res)
        },1000) 
    })
}

const promise = somarAsync(10, 10)
promise.then((res) => console.log(res))
promise.catch((err) => console.error(err))


//Exemplo 02