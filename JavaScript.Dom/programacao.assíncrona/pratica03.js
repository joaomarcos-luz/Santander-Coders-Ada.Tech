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
