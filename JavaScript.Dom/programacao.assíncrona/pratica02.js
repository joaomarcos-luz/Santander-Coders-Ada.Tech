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
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const res = a + b
            resolve(res)
        } ,1000)
    })
}


const promise = somarAsync(10, 20)
promise.then((res) => console.log(res)).catch((err) => console.error(err))


//Exemplo 03

const somarAsync = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const res = a + b
            resolve(res)
        } ,1000)
    })
}


somarAsync(20, 20)
    .then((res) => console.log(res))
    .catch((err) => console.error(err))


//Exemplo 04

const somarAsync = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const res = a + b
            resolve(res)
        } ,1000)
    })
}


somarAsync(50, 50)
    .then((res) => console.log(res)).catch((err) => console.error(err))


//Exemplo 05

const somarAsync = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const res = a + b
            resolve(res)
        } ,1000)
    })
}

somarAsync(100, 100).then(console.log).catch(console.error)


//Exemplo 06

const somarAsync = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const res = a + b
            resolve(res)
        } ,1000)
    })
}

somarAsync(40, 40)
    .then((res) => somarAsync(res, 30))
    .then((res) => somarAsync(res, 40))
    .then((res) => somarAsync(res, 50))
    .then(console.log)
    .catch(console.error)


//exemplo 07

const somar = (a, b) => {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            const res = a + b
            resolve(res)
        })
    })
}

somar(10, 10)
    .then((res) => somar(res, 30))
    .then((res) => somar(res, 40))
    .then((res) => somar(res, 50))
    .then(console.log)
    .catch(console.error)
