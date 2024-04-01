//Utilizando funções assíncronas por: async/await.

//Exemplo 01
const somarAsync = async (a, b) => {
    return new Promise((resposta, erro) => {
        setTimeout(() => {
            const res = a + b
            resposta(res)
        } ,1000)
    })
}

const calcular = async function () {
    const res = await somarAsync(10, 20)
    console.log(res)
}

calcular()


//Exemplo 02
const somarAsync = async (a, b) => {
    return new Promise((resposta, reject) => {
        setTimeout(() => {
            const res = a + b
            resposta(res)
        },1000)
    })
}

const calcular = async () => {
    const res1 = await somarAsync(10, 20)
    const res2 = await somarAsync(res1, 30)
    const res3 = await somarAsync(res2, 40)
    const resultado = await somarAsync(res3, 50)
    console.log(resultado)
}

calcular()


//Exemplo 03
const somarAsync = async (a, b) => {
    return new Promise((resposta, reject) => {
        setTimeout(() => {
            const res = a + b
            resposta(res)
        },1000)
    })
}

const calcular = async () => {
    const res1 = await somarAsync(10, 20)
    const res2 = await somarAsync(res1, 30)
    const res3 = await somarAsync(res2, 40)
    const resultado = await somarAsync(res3, 50)
    console.log(resultado)
}

(async () => {
    await calcular();
})();


//Exemplo 04
const somarAsync = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const res = a + b
            resolve(res)
        },1000)
    })
}

somarAsync(10, 20)
    .then((res) => somarAsync(res, 30))
    .then((res) => somarAsync(res, 40))
    .then((res) => somarAsync(res, 50))
    .then((res) => console.log(res))
    .catch((err) => console.error(err))


//Exemplo 05
const somarAsync = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const res = a + b
            resolve(res)
        },1000)
    })
}

somarAsync(10, 20)
    .then((res) => somarAsync(res, 30))
    .then((res) => somarAsync(res, 40))
    .then((res) => somarAsync(res, 50))
    .then(console.log)
    .catch(console.error)


