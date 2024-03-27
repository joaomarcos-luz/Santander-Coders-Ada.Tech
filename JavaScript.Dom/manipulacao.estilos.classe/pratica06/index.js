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
                textoNovoItem.className = "checked"
                inputNovoItem.className = "checked"
                //Caso click no checkbox sera adicionado a class checked ou input e span,
            }else{
                textoNovoItem.className = ""
                inputNovoItem.className = ""
                 //Caso remova a marcação do checkbox sera retirado o nome da class.

                 /*
                 Em outras palavras, caso houvesse outras classes no span ou no input, as duas últimas soluções iriam "apagá-las" dos elementos. Isso não estaria certo, concorda?

                Para evitar esse problema, podemos acessar o atributo classList do elemento em questão. Por meio dele, conseguimos acessar uma lista com todas as classes do nosso elemento. E, ainda melhor, esse atributo contém vários métodos que facilitam o nosso trabalho, como os métodos add e remove, que nos permitem adicionar e remover, respectivamente, uma classe da tag.

                O código a seguir apresenta a solução que leva em consideração a possibilidade da existência de outras classes, fazendo uso do classList:
                 */
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