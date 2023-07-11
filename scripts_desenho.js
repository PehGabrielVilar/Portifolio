const sectionCards = document.querySelector("section.cards");

const card = document.querySelector("div.card");

const imagem = [
  {
    title: "Seja seu Herói",
    thumb: "https://github.com/PehGabrielVilar/PehGabrielVilar.github.io/blob/master/imagens/desenhos/Hero.jpg?raw=true",
    info: "Desenho livre, criado por Pedro Gabriel Vilar."
  },
  {
    title: "Tanjiro",
    thumb: "https://github.com/PehGabrielVilar/PehGabrielVilar.github.io/blob/master/imagens/desenhos/Tanjiro.jpg?raw=true",
    info: "Desenho do personagem do anime e mangá Demon Slayer"
  },
  {
    title: "Autorretrato",
    thumb: "https://github.com/PehGabrielVilar/PehGabrielVilar.github.io/blob/master/imagens/desenhos/Eu.jpg?raw=true",
    info: "Fiz um autorretrato inspirado em animações."
  },
  {
    title: "Kobe Bryant",
    thumb: "https://github.com/PehGabrielVilar/PehGabrielVilar.github.io/blob/master/imagens/desenhos/KobeBryant.jpeg?raw=true",
    info: "Desenho inspirado na animação 'The Boondocks'."
  },
];

imagem.map(imagem => {
  const cardClone = card.cloneNode(true);
  cardClone.querySelector("img").src = imagem.thumb;
  cardClone.querySelector(".title").innerHTML = imagem.title;
  cardClone.querySelector(".info > p.text--medium").innerHTML = imagem.info;
  sectionCards.appendChild(cardClone);
});

card.remove();
