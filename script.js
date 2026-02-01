const produtos = [

  {
    nome: "Samsung Galaxy A16 128GB 4GB RAM Câmera 50MP Tela 6.7 NFC Preto",
    descricao: "Celular Samsung Galaxy A16,Tela Ampla,Super AMOLED de 6.7",
    preco: "R$ 792,03",
    categoria: "eletronicos",
    plataforma: "mercado",
    link: "https://mercadolivre.com/sec/2vYZZzW",
    imagem: "https://raw.githubusercontent.com/ClaudemirX1/Afiliado/refs/heads/main/Produtos/mercadolivre/a16.webp"
  },
  {
    nome: "Lavadora Lava Jato Portátil Pressão 2 Baterias + Maleta",
    descricao: "Transforme a limpeza em uma tarefa simples e sem esforço com a nossa Lavadora Jato Portátil de Alta Pressão.",
    preco: "R$ 108,59",
    categoria: "acessorios",
    plataforma: "mercado",
    link: "https://mercadolivre.com/sec/2VKS4qH",
    imagem: "https://raw.githubusercontent.com/ClaudemirX1/Afiliado/refs/heads/main/Produtos/mercadolivre/lavadora.webp"
  },
  {
    nome: "Smartwatch Série IWO 8 T800 Ultra",
    descricao: "Monitor cardíaco, oxímetro, modos esportivos, assistente de voz, monitor de sono e música BT.",
    preco: "R$ 39,90",
    categoria: "eletronicos",
    plataforma: "shopee",
    link: "https://s.shopee.com.br/5L67ihEWTO",
    imagem: "https://raw.githubusercontent.com/ClaudemirX1/Afiliado/refs/heads/main/Produtos/mercadolivre/br-11134207-7r98o-ltxyui9rvtec1c.webp"
  },
  {
    nome: "Mini compressor de ar Portatil",
    descricao: "Bomba compressor de ar portatil digital superpotente com lanterna,recarregavel bivolt.",
    preco: "R$ 69,88",
    categoria: "acessorios",
    plataforma: "shopee",
    link: "https://s.shopee.com.br/3B1dBQlVZz",
    imagem: "https://raw.githubusercontent.com/ClaudemirX1/Afiliado/refs/heads/main/Produtos/shoppe/commpreesor.jpg"
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