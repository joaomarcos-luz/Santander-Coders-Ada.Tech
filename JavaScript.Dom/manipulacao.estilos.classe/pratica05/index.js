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
            if(event.target.checked){
                textoNovoItem.setAttribute("class", "checked")
                inputNovoItem.setAttribute("class", "checked")
                /*Caso o input checkbox deja clicado adicionara a class chacked ao span e input e assim pegando o Css do estilo.js e ao tira a marcação ele remove a class do span e input.
                */ 
            }else{
                textoNovoItem.removeAttribute("class")
                inputNovoItem.removeAttribute("class")
                //Caso o checkbox seja desmarcado a class sera removida.
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