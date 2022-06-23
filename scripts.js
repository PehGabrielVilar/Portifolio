const sectionCards = document.querySelector("section.cards");

const card = document.querySelector("div.card");

const imagem = [
  {
    title: "Thanos",
    thumb: "https://github.com/PehGabrielVilar/PehGabrielVilar.github.io/blob/master/imagens/desenhos/Thanos.jpeg?raw=true",
    info: "Vilão do Vingadores, criado pela Marvel."
  },
  {
    title: "Thor",
    thumb: "imagens/thor.jpg",
    info: "Herói e membro dos vingadores, criado pela Marvel."
  },
  {
    title: "Cristiano Ronaldo",
    thumb: "imagens/cristiano.jpeg",
    info: "Jogador de futebol eleito 5 vezes melhor do mundo."
  },
  {
    title: "Doodles",
    thumb: "imagens/doodles.jpeg",
    info: "Personagens de várias animações diferentes, juntos."
  },
  {
    title: "Arte Livre",
    thumb: "imagens/desenhos/tanjiro.jpeg",
    info: "Criação minha."
  },
  {
    title: "Demon Slayer",
    thumb: "imagens/demonslayer.jpeg",
    info: "Anime e Mangá criado por Koyoharu Gotouge."
  },
  {
    title: "Ryuk",
    thumb: "imagens/ryuk.jpeg",
    info: "Personagem do Anime Death Note, criado por Takeshi Obata."
  },
  {
    title: "Shikamaru",
    thumb: "imagens/shikamaru.jpeg",
    info: "Personagem do Anime Naruton, criado por Masashi Kishimoto."
  },
  {
    title: "Rick and Morty",
    thumb: "imagens/rickandmorty.jpeg",
    info: "Animação criada por Justin Roiland e Dan Harmon"
  },
  {
    title: "Auto-retrato",
    thumb: "imagens/eu.jpeg",
    info: "Me fiz, em uma versão inspirada na banda Gorillaz."
  },
  {
    title: "Kobe Bryant",
    thumb: "imagens/kobebryant.jpeg",
    info: "Desenho inspirado na animação 'The Boondocks.'"
  },
  {
    title: "Arte Livre",
    thumb: "imagens/sketch.jpeg",
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
