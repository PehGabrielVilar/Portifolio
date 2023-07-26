const sectionCards = document.querySelector("section.cards");
const card = document.querySelector("div.card");

const imagem = [
  {
    id: "dropzart_/",
    title: "Logotipo",
    thumb: "https://github.com/PehGabrielVilar/PehGabrielVilar.github.io/blob/master/imagens/desenhos/Logotipo.jpg?raw=true",
    info: "Logotipo do meu instagram"
  },
  {
    id: "dropzart_/",
    title: "Programando",
    thumb: "https://github.com/PehGabrielVilar/PehGabrielVilar.github.io/blob/master/imagens/desenhos/Eu.jpg?raw=true",
    info: "Fiz um autorretrato, programando"
  },
  {
    id: "p/Ct9KroOriGV5uQjncWpyuj00h54jclrJ2dQ4oI0/",
    title: "Ouvindo Música",
    thumb: "https://github.com/PehGabrielVilar/PehGabrielVilar.github.io/blob/master/imagens/desenhos/Eu2.jpg?raw=true",
    info: "Fiz um autorretrato, inspirado em animações."
  },
  { 
    id: "dropzart_/",
    title: "Kobe Bryant",
    thumb: "https://github.com/PehGabrielVilar/PehGabrielVilar.github.io/blob/master/imagens/desenhos/KobeBryant.jpeg?raw=true",
    info: "Desenho inspirado na animação 'The Boondocks'."
  },
];

imagem.map(imageData => {
  const cardClone = card.cloneNode(true);
  cardClone.querySelector("img").src = imageData.thumb;
  cardClone.querySelector(".title").innerHTML = imageData.title;
  cardClone.querySelector(".info > p.text--medium").innerHTML = imageData.info;

  sectionCards.appendChild(cardClone);
});

sectionCards.addEventListener("click", event => {
  const clickedCard = event.target.closest(".card");
  if (clickedCard) {
    const titleElement = clickedCard.querySelector(".title");
    const title = titleElement.textContent.trim();
    const image = imagem.find(imageData => imageData.title === title);
    if (image) {
      const githubLink = `https://www.instagram.com/${image.id}`;
        window.open(githubLink, "_blank"); 
    }
  }
});

card.remove();
