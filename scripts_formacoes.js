const sectionCardsl = document.querySelector("section.cardsformacoes");

const cardl = document.querySelector("div.formacoes");

const formacoes = [
  {
    thumb: "imagens/jogo/DarkDeep1.jpg",
  },
  {
    thumb: "imagens/jogo/DarkDeep2.jpg",
  },
  {
    thumb: "imagens/jogo/DarkDeep3.jpg",
  },
];

formacoes.map(imagem => {
  const cardClone = cardl.cloneNode(true);
  cardClone.querySelector("img").src = imagem.thumb;
  cardClone.querySelector(".title").innerHTML = imagem.title;

  sectionCardsl.appendChild(cardClone);
});

cardl.remove();