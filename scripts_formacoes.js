const sectionCardsl = document.querySelector("section.cardsformacoes");

const cardl = document.querySelector("div.formacoes");

const formacoes = [
  {
    thumb: "imagens/instituicoes/Etec\ Irma\ Agostina.jpg",
  },
  {
    thumb: "imagens/instituicoes/Fatec.jpeg",
  },
  {
    thumb: "imagens/instituicoes/Saga.jpg",
  },
];

formacoes.map(imagem => {
  const cardClone = cardl.cloneNode(true);
  cardClone.querySelector("img").src = imagem.thumb;
  cardClone.querySelector(".title").innerHTML = imagem.title;

  sectionCardsl.appendChild(cardClone);
});

cardl.remove();