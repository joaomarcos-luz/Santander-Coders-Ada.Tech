const form = document.querySelector("form")
const cepInput = document.querySelector("#cep")
const sectionRes = document.querySelector(".addres")

form.addEventListener("submit", (event) => {

    event.preventDefault()

    const cep = cepInput.value.replace('-', '')

    if(cep.length !== 8){
        alert("O CEP deve conter 8 digitos.")
        return
    }

    const buscaEndereco = () => {
        return new Promise((resolve, reject) => {
          fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then((response) => response.json())
            .then((data) => {
              if (data.error) {
                reject(new Error(`Erro ao obter dados do endereço para o CEP ${cep}!`));
              } else {
                resolve(data);
              }
            });
        });
      }

      buscaEndereco()
        .then((data) => {
            sectionRes.innerHTML = `
            <p>${data.logradouro}, ${data.bairro} - ${data.localidade}, ${data.uf}.</p>
            `
        })
        .catch((error) => {
            alert(error.message)
        })
})