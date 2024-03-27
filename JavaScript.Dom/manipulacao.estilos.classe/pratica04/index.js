const input = document.querySelector("input#input")
      const button = document.querySelector("button#add")
      const lista = document.querySelector("ul#lista")

      button.addEventListener("click", (event) => {
        if (input.value.length <= 2) {
            window.alert("O item deve ter no minimo 3 letras para ser adicionado a lista.")
        } else {
            const novoItem = document.createElement("li")
            const inputNovoItem = document.createElement("input")
            const textoNovoItem = document.createElement("span")
            const buttonRemoverNovoItem = document.createElement("button")

            inputNovoItem.setAttribute("type", "checkbox")

            /* Adicionando event listener: Ao clicar no
            input[type="checkbox"] o produto será marcado (riscado)
            ou desmarcado (não riscado) como comprado
            */
            inputNovoItem.addEventListener("click", (event) => {
                //checked é quando a caixa ta marcada se tiver marcada o texto ficara riscado.
                //checked marcado true.
                //checked nao marcado false.

                // Adicionando um novo atributo ao checkbox
                if (event.target.checked) {
                    textoNovoItem.style.textDecoration = "line-through"
                    textoNovoItem.style.opacity = "0.6"//Quais meio trasparente.
                    inputNovoItem.style.opacity = "0.6"
                    /*opacity vai deixar o input e texto trasparente sendo 1 pra normal e 0 para todo trasparente*/
                } else {
                    textoNovoItem.style.textDecoration = "none"
                    textoNovoItem.style.opacity = "1"//Normal
                    inputNovoItem.style.opacity = "1"
                }
            })

            textoNovoItem.textContent = input.value
            buttonRemoverNovoItem.textContent = "Remover"

            novoItem.insertAdjacentElement("beforeend", inputNovoItem)
            novoItem.insertAdjacentElement("beforeend", textoNovoItem)
            novoItem.insertAdjacentElement("beforeend", buttonRemoverNovoItem)

            lista.appendChild(novoItem)

            buttonRemoverNovoItem.addEventListener("click", (event) => {
                lista.removeChild(event.target.parentElement)
            })

            input.value = ""
        }
      })