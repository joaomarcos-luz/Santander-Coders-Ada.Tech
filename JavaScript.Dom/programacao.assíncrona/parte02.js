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
const somarAsync = (a, b) => {
    return new Promise((resultado, erro) => {
        setTimeout(() => {
            const res = a + b
            resultado(res)
        },1000)
    })
}

const promise = somarAsync(10, 20)
promise.then((res) => console.log(res)).catch((err) => console.error(err))


//Exemplo 02

const somarAsync = (a, b) => {
    return new Promise((resolver, erro) => {
        setTimeout(() => {
            const res = a + b
            resolver(res)
        } ,1000)
    })
}

somarAsync(20, 20)
    .then((res) => console.log(res))
    .catch((err) => console.error(err))


//Exemplo 03

const somarAsync = (a, b) => {
    return new Promise((resolver, erro) => {
        setTimeout(() => {
            const res = a + b 
            resolver(res)
        } ,1000)
    })
}

somarAsync(50, 50)
    .then((res) => console.log(res)).catch((err) => console.error(err))