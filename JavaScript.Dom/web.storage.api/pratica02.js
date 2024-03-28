//Lembrando esse codigo so roda no navegador e precisa ir em aplicativo e armazenamento local.
const listaDeCompras = [
    { item: "Feijão", comprado: false },
    { item: "Arroz", comprado: true },
    { item: "Frango", comprado: false },
  ];
  
  localStorage.setItem("listaDeCompras", JSON.stringify(listaDeCompras));