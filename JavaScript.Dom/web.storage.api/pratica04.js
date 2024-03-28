//sessionStorage
//

//Só roda no navegador.

const idade = 27
const altura = 1.75

sessionStorage.setItem("idade", String(idade))
sessionStorage.setItem("altura", String(altura))

sessionStorage.removeItem("idade")

const idadeSessionStorage = sessionStorage.getItem("idade")
const alturaSessionStorage = sessionStorage.getItem("altura")

console.log(idadeSessionStorage)
console.log(alturaSessionStorage)