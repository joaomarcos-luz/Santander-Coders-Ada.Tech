const form = document.querySelector("form")
const cepInput = document.querySelector("#cep")
const sectionRes = document.querySelector(".addres")

form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const cep = cepInput.value.replace(/[.,\-'\"]/g, "");

    if (cep.length !== 8 || isNaN(cep)) {
        alert("CEP inválido. Digite um CEP com 8 dígitos numéricos");
        return;
    }

    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();

        if (data.erro) {
            throw new Error(`CEP: ${cep}, não encontrado! 🚨`);
        } else {
            const addressInfo = [
                data.logradouro,
                data.bairro && `, ${data.bairro}`,
                data.localidade && ` - ${data.localidade}`,
                data.uf && `, ${data.uf}`
            ].filter(Boolean).join('');

            if (addressInfo) {
                sectionRes.innerHTML = `<p>${addressInfo}</p>`;
            } 
        }
    } catch (error) {
        console.error(error.message);
        sectionRes.innerHTML = `<p>${error.message}</p>`;
        alert('Ocorreu um erro ao processar a solicitação. Por favor, tente novamente mais tarde.🚨');
    }
});