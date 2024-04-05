const form = document.querySelector("form")
const cepInput = document.querySelector("#cep")
const sectionRes = document.querySelector(".addres")

form.addEventListener("submit", async (event) => {

    event.preventDefault()
    const cep = await cepInput.value.replace(/[.,\-'\"]/g, "")

    if (cep.length !== 8 || isNaN(cep)) {
        alert("CEP inválido. Digite um CEP com 8 dígitos númericos")
        return
    }

    try {
        const response = await fetch(`https://viacep.com.br/s/${cep}/json/`)
        const data = await response.json();

        if (data.erro) {
            throw new Error(`CEP: ${cep}, não encontrado! 🚨`)
        } else {
            const addressInfo = [
                data.logradouro,
                data.bairro && `, ${data.bairro}`,
                data.localidade && ` - ${data.localidade}`,
                data.uf && `, ${data.uf}`
                /*Vai filtra e remove todos que forem undefined e null, join() vai junta o que sobrou e atribuir a addressInfo.*/
            ].filter(Boolean).join('')

            /*vai adicionar a sectionRes.innerHTML os valores que esta dentro de addressInfo apos a filtragem dos valores.*/
            if (addressInfo) {
                sectionRes.innerHTML = `<p>${addressInfo}</p>`
            } else {
                throw new Error(`Endereço incompleto.`)
            }
        }
    } catch (error) {
        console.error(error.message);
        sectionRes.innerHTML = `<p>Erro ao obter dados do CEP: ${cep}. Tente novamente mais tarde.</p>`
    }
})