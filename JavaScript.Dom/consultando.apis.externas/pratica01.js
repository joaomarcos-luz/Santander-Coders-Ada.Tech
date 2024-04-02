//Exemplo 01
fetch('https://viacep.com.br/ws/01001000/json/')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(Error => console.error(Error))


//Exemplo 02
fetch('https://viacep.com.br/ws/75470000/json/')
    .then(response => {
        if(!response.ok){
            throw new Error("Erro ao fazer a requisição")
    }
        return response.json()
    })
    .then(data => console.log(data))
    .catch(Error => console.error("Erro:", Error))


//Exemplo 03
fetch('https://viacep.com.br/ws/75470000/json/')
    .then(response => {
        if(!response){
            console.error("Erro ao fazer a requisição")
        }
        return response.json()
    })
    .then(data => console.log(data))
    .catch(Error => console.error(Error))