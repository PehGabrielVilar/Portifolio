const sectionCards = document.querySelector("section.cards");

const card = document.querySelector("div.card");

const imagem = [
  {
    title: "Thanos",
    thumb: "https://github.com/PehGabrielVilar/PehGabrielVilar.github.io/blob/master/imagens/desenhos/Thanos.jpg?raw=true",
    info: "Vilão do Vingadores, criado pela Marvel."
  },
  {
    title: "Thor",
    thumb: "https://github.com/PehGabrielVilar/PehGabrielVilar.github.io/blob/master/imagens/desenhos/Thor.jpg?raw=true",
    info: "Herói e membro dos vingadores, criado pela Marvel."
  },
  {
    title: "Cristiano Ronaldo",
    thumb: "https://github.com/PehGabrielVilar/PehGabrielVilar.github.io/blob/master/imagens/desenhos/Cristiano.jpg?raw=true",
    info: "Jogador de futebol eleito 5 vezes melhor do mundo."
  },
  {
    title: "?",
    thumb: "https://github.com/PehGabrielVilar/PehGabrielVilar.github.io/blob/master/imagens/desenhos/Livre.jpg?raw=true",
    info: "Estilo livre, criado por Pedro Gabriel Vilar"
  },
  {
    title: "Seja seu Herói",
    thumb: "https://github.com/PehGabrielVilar/PehGabrielVilar.github.io/blob/master/imagens/desenhos/Hero.jpg?raw=true",
    info: "Estilo livre, criado por Pedro Gabriel Vilar"
  },
  {
    title: "Demon Slayer",
    thumb: "https://github.com/PehGabrielVilar/PehGabrielVilar.github.io/blob/master/imagens/desenhos/DemonSlayer.jpg?raw=true",
    info: "Anime e Mangá criado por Koyoharu Gotouge."
  },
  {
    title: "Ryuk",
    thumb: "https://github.com/PehGabrielVilar/PehGabrielVilar.github.io/blob/master/imagens/desenhos/Ryuk.jpg?raw=true",
    info: "Personagem do Anime Death Note, criado por Takeshi Obata."
  },
  {
    title: "Picles Rick",
    thumb: "https://github.com/PehGabrielVilar/PehGabrielVilar.github.io/blob/master/imagens/desenhos/PicklesRick.jpg?raw=true",
    info: "Animação criada por Justin Roiland e Dan Harmon"
  },
  {
    title: "Rick and Morty",
    thumb: "https://github.com/PehGabrielVilar/PehGabrielVilar.github.io/blob/master/imagens/desenhos/RickandMorty.jpeg?raw=true",
    info: "Animação criada por Justin Roiland e Dan Harmon"
  },
  {
    title: "Auto-retrato",
    thumb: "https://github.com/PehGabrielVilar/PehGabrielVilar.github.io/blob/master/imagens/desenhos/Eu.jpeg?raw=true",
    info: "Me fiz, em uma versão inspirada na banda Gorillaz."
  },
  {
    title: "Kobe Bryant",
    thumb: "https://github.com/PehGabrielVilar/PehGabrielVilar.github.io/blob/master/imagens/desenhos/KobeBryant.jpeg?raw=true",
    info: "Desenho inspirado na animação 'The Boondocks.'"
  },
  {
    title: "Arte Livre",
    thumb: "https://github.com/PehGabrielVilar/PehGabrielVilar.github.io/blob/master/imagens/desenhos/Sketch.jpeg?raw=true",
    info: "Inspirado em sketchs de tatuagem."
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
