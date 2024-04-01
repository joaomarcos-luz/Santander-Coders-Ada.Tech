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

/*Nesse caso ele deve todar todo sistema pra depois rodar o somarAsync que vai demora um pouco ele não espera*/

console.log("invocando o somarAsync")

somarAsync(10, 20)
    .then((res) => somarAsync(res, 30))
    .then((res) => somarAsync(res, 40))
    .then((res) => somarAsync(res, 50))
    .then(console.log)
    .catch(console.error)

console.log("depois do somar async")

/*Executando o código acima, a saída do nosso código seria:

invocando o somarAsync
depois do somar async
150
Veja que a thread livre continuou processando nosso programa enquanto a promise aguardava ser resolvida. No caso de async / await isso não acontece:*/


//Exemplo 06
const somarAsync = (a, b) => {
    return new Promise((resolver, reject) => {
        setTimeout(() => {
            const res = a + b
            resolver(res)
        },1000)
    })
}

/*Ele vai rodar o restante do sistema apenas depois que cada await do async for resolvido e asim o restante do sistema tendo que aguarda sua resolução.*/

const calcular = async () => {
    console.log("invocando o somarAsync")

    const res1 = await somarAsync(10, 20)
    const res2 = await somarAsync(res1, 30)
    const res3 = await somarAsync(res2, 40)
    const resultado = await somarAsync(res3, 50)
    console.log(resultado)

    console.log("depois do somar async")
}

calcular()

/*Nesse caso, a saída do do programa ao rodar o código acima seria:

invocando o somarAsync
150
depois do somar async
Observe que o resultado foi impresso na ordem esperada. O restante do código aguardou a resolução da promise. No entanto, como disse, isso pode enganar.

Se tivesse colocado as mensagem no contexto global, a thread não esperaria a resolução de calcular(), porque é uma função assíncrona e não podemos usar await em contexto global.*/

//Exemplo 07
const somarAsync = (a, b) => {
    return new Promise((resolver, reject) => {
        setTimeout(() => {
            const res = a + b
            resolver(res)
        },1000)
    })
}

const calcular = async () => {
    console.log("invocando o somarAsync")

    const res1 = await somarAsync(10, 20)
    const res2 = await somarAsync(res1, 30)
    const res3 = await somarAsync(res2, 40)
    const resultado = await somarAsync(res3, 50)
    .then((resultado) => console.log(resultado))//Esse exemplo foi pra ver se funcionaria.
    .catch((err) => console.error(err))

    console.log("depois do somar async")
}

calcular()


//Exemplo 08
