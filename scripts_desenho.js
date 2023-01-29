const sectionCards = document.querySelector("section.cards");

const card = document.querySelector("div.card");

const imagem = [
  {
    title: "Thanos",
    thumb: "https://github.com/PehGabrielVilar/PehGabrielVilar.github.io/blob/master/imagens/desenhos/Thanos.jpg?raw=true",
    info: "Desenho do vilão do Vingadores, criado pela Marvel.",
  },
  {
    title: "Thor",
    thumb: "https://github.com/PehGabrielVilar/PehGabrielVilar.github.io/blob/master/imagens/desenhos/Thor.jpg?raw=true",
    info: "Desenho do herói e membro dos vingadores, criado pela Marvel.",
  },
  {
    title: "Tanjiro",
    thumb: "https://github.com/PehGabrielVilar/PehGabrielVilar.github.io/blob/master/imagens/desenhos/Tanjiro.jpg?raw=true",
    info: "Desenho do personagem do anime e mangá Demon Slayer criado por Koyoharu Gotouge."
  },
  {
    title: "Demon Slayer",
    thumb: "https://github.com/PehGabrielVilar/PehGabrielVilar.github.io/blob/master/imagens/desenhos/DemonSlayer.jpg?raw=true",
    info: "Desenho do anime e mangá criado por Koyoharu Gotouge."
  },
  {
    title: "Ryuk",
    thumb: "https://github.com/PehGabrielVilar/PehGabrielVilar.github.io/blob/master/imagens/desenhos/Ryuk.jpg?raw=true",
    info: "Desenho do personagem do Anime Death Note, criado por Takeshi Obata."
  },
  {
    title: "Seja seu Herói",
    thumb: "https://github.com/PehGabrielVilar/PehGabrielVilar.github.io/blob/master/imagens/desenhos/Hero.jpg?raw=true",
    info: "Desenho livre, criado por Pedro Gabriel Vilar."
  },
  {
    title: "'XXX'",
    thumb: "https://github.com/PehGabrielVilar/PehGabrielVilar.github.io/blob/master/imagens/desenhos/Livre.jpg?raw=true",
    info: "Desenho livre, criado por Pedro Gabriel Vilar."
  },
  {
    title: "Picles Rick",
    thumb: "https://github.com/PehGabrielVilar/PehGabrielVilar.github.io/blob/master/imagens/desenhos/PicklesRick.jpg?raw=true",
    info: "Desenho da animação criada por Justin Roiland e Dan Harmon.",
  },
  {
    title: "Rick and Morty",
    thumb: "https://github.com/PehGabrielVilar/PehGabrielVilar.github.io/blob/master/imagens/desenhos/RickandMorty.jpeg?raw=true",
    info: "Desenho da animação criada por Justin Roiland e Dan Harmon."
  },
  {
    title: "Autorretrato",
    thumb: "https://github.com/PehGabrielVilar/PehGabrielVilar.github.io/blob/master/imagens/desenhos/Eu.jpeg?raw=true",
    info: "Fiz um autorretrato inspirada na banda Gorillaz."
  },
  {
    title: "Kobe Bryant",
    thumb: "https://github.com/PehGabrielVilar/PehGabrielVilar.github.io/blob/master/imagens/desenhos/KobeBryant.jpeg?raw=true",
    info: "Desenho inspirado na animação 'The Boondocks'"
  },
  {
    title: "Arte Livre",
    thumb: "https://github.com/PehGabrielVilar/PehGabrielVilar.github.io/blob/master/imagens/desenhos/Sketch.jpeg?raw=true",
    info: "Inspirado no jogo Hollow Knight e sketch de tatuagem."
  }
];

imagem.map(imagem => {
  const cardClone = card.cloneNode(true);
  cardClone.querySelector("img").src = imagem.thumb;
  cardClone.querySelector(".title").innerHTML = imagem.title;
  cardClone.querySelector(".info > p.text--medium").innerHTML = imagem.info;
  sectionCards.appendChild(cardClone);
});

card.remove();
