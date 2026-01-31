const produtos = [

  {
    nome: "Samsung Galaxy A16 128GB 4GB RAM Câmera 50MP Tela 6.7 NFC Preto",
    descricao: "Celular Samsung Galaxy A16,Tela Ampla,Super AMOLED de 6.7",
    preco: "R$ 792,03",
    categoria: "eletronicos",
    plataforma: "mercado",
    link: "https://mercadolivre.com/sec/2vYZZzW",
    imagem: "https://raw.githubusercontent.com/ClaudemirX1/Afiliado/refs/heads/main/Produtos/mercadolivre/a16.webp"
  }
];

const container = document.getElementById("produtos");

function mostrarProdutos(lista) {
  container.innerHTML = "";
  lista.forEach(produto => {
    container.innerHTML += `
      <div class="card">
        <img src="${produto.imagem}">
        <div class="info">
          <h2>${produto.nome}</h2>
          <p>${produto.descricao}</p>
          <span class="preco">${produto.preco}</span>
          <a class="botao ${produto.plataforma}"
             href="${produto.link}"
             target="_blank" rel="nofollow noopener">
             Comprar na ${produto.plataforma === "shopee" ? "Shopee" : (produto.plataforma === "magalu" ? "Magazine Luiza" : "Mercado Livre")}
          </a>
        </div>
      </div>
    `;
  });
}

function filtrar(categoria) {
  if (categoria === "todos") {
    mostrarProdutos(produtos);
  } else {
    mostrarProdutos(produtos.filter(p => p.categoria === categoria));
  }
}

mostrarProdutos(produtos);