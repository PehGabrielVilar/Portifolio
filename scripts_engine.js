const sectionCards2 = document.querySelector("section.cardsengine");

const card2 = document.querySelector("div.engine");

const engine = [
  {
    title: "Construct 3",
    thumb: "https://github.com/PehGabrielVilar/PehGabrielVilar.github.io/blob/master/imagens/engine_de_jogos/C3.jpeg?raw=true",
  },
  {
    title: "Godot",
    thumb: "https://github.com/PehGabrielVilar/PehGabrielVilar.github.io/blob/master/imagens/engine_de_jogos/Godot.jpeg?raw=true",
  }
];

engine.map(imagem => {
  const cardClone = card2.cloneNode(true);
  cardClone.querySelector("img").src = imagem.thumb;
  cardClone.querySelector(".title").innerHTML = imagem.title;

  sectionCards2.appendChild(cardClone);
});

card2.remove();