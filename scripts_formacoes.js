const sectionCardsl = document.querySelector("section.cardsformacoes");

const cardl = document.querySelector("div.formacoes");

const formacoes = [
  {
    thumb: "imagens/instituicoes/Etec\ Irma\ Agostina.jpg",
    link: "",
  },
  {
    thumb: "imagens/instituicoes/Fatec.jpeg",
    link: "",
  },
  {
    thumb:"imagens/instituicoes/Saga.jpg",
    link: "",
  },
];

formacoes.map(imagem => {
  const cardClone = cardl.cloneNode(true);
  cardClone.setAttribute("id", imagem.link);
  cardClone.querySelector("img").src = imagem.thumb;
  cardClone.querySelector(".title").innerHTML = imagem.title;

  sectionCardsl.appendChild(cardClone);
});

cardl.remove();