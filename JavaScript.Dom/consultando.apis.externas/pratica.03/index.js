const form = document.querySelector("form")
const input = document.querySelector("#cep")
const section = document.querySelector("#address")

form.addEventListener("submit", async (event) => {

    event.preventDefault()

    const cep = input.value.replace("-", "")

    if(cep.length === 8){
        try {
            const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
            const data = await resposta.json()

            if(data.error !== "true"){//É o mesmo que: !data.error
                section.innerHTML = `
                <p>${data.logradouro}, ${data.bairro} - ${data.localidade}, ${data.uf}.</p>
            `
            } else {
                alert(`Erro ao obter dados do endereço para o CEP ${cep}! 🚨`)
            }
        } catch (error) {
            alert(`Erro ao obter dados do endereço para o CEP ${cep}! 🚨`);
        }
    }
})