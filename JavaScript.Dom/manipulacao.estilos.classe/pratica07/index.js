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

           inputNovoItem.addEventListener("click", (event) => {
            if (event.target.checked) {
                inputNovoItem.classList = "checked"
                textoNovoItem.classList = "checked"
                /*Ao clicar no input checkboxclassList adiciona class: checked para ser utilizado o estilo que estã no estilo.js.*/
            } else {
                inputNovoItem.classList.remove("checked")
                textoNovoItem.classList.remove("checked")
                //Ao remove a marcação do input checkbox e removido a class checked do input e span.
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