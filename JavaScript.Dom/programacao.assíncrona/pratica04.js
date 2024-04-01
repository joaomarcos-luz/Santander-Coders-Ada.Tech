const somarAsync = (a, b) => {
    return new Promise((resolve, reject) => {
        if(isNaN(a) || isNaN(b)){
          reject("Os de a e b, devem ser númericos.")
        }

            try{
                setTimeout(() => {
                    const res = a + b
                    resolve(res)
                },1000)
            }catch (err){
                reject(err)
            }
    })
}

const calculo = async () => {
    try {
        const res1 = await somarAsync(10, 20)
        const res2 = await somarAsync(res1, 30)
        const res3 = await somarAsync(res2, 40)
        const resultado = await somarAsync(res3, 50)
        console.log(resultado)
    } catch (error) {
        console.error(error)
    }
}

calculo()