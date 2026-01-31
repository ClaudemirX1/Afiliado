const produtos = [
  {
    nome: "Relógio Inteligente",
    descricao: "Smartwatch compatível com Android e iOS",
    preco: "R$ 149,90",
    categoria: "eletronicos",
    plataforma: "shopee",
    link: "https://shopee.com.br/SEU-LINK-AFILIADO",
    imagem: "https://raw.githubusercontent.com/ClaudemirX1/Imagem/refs/heads/main/relogio.jpg?token=GHSAT0AAAAAADUPKSUV7TGI4P3SJM3FC2CQ2L6IHWQ"
  },
  {
    nome: "Fone Bluetooth",
    descricao: "Som potente e bateria potente",
    preco: "R$ 89,90",
    categoria: "eletronicos",
    plataforma: "mercado",
    link: "https://mercadolivre.com/sec/1XipK2W",
    imagem: "https://http2.mlstatic.com/D_NQ_NP_913995-MLA94997648052_102025-O.webp"
  },
  {
    nome: "iPhone 16 128GB",
    descricao: "Apple iPhone 16 128GB Preto 5G",
    preco: "R$ 3.450,00",
    categoria: "eletronicos",
    plataforma: "magalu",
    link: "https://www.magazineluiza.com.br/apple-iphone-16-128gb-preto-6-1-48mp-ios-5g/p/238803400/te/ip16/",
    imagem: "https://m.magazineluiza.com.br/a-static/420x420/apple-iphone-16-128gb-preto-61-48mp-ios-5g/magazineluiza/238803400/fb05ee53628b697809bce2ba5f5d567e.jpg"
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