    const style = document.createElement("style")

    style.innerHTML = `
        body {
            background-color: #222222;
            color: #e7e7e7e7;
            margin: 2rem;
            whidth: 50%; 
        }
    `

    const headTag = document.querySelector("head")

    headTag.appendChild(style)