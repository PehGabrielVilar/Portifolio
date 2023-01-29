const sectionCardsl = document.querySelector("section.cardslinguagem");

const cardl = document.querySelector("div.linguagem");

const linguagem = [
  {
    title: "Python",
    thumb: "https://github.com/PehGabrielVilar/PehGabrielVilar.github.io/blob/master/imagens/linguagens/Python.jpeg?raw=true",
  },
  {
    title: "JavaScript",
    thumb: "https://github.com/PehGabrielVilar/PehGabrielVilar.github.io/blob/master/imagens/linguagens/JavaScript.jpeg?raw=true",
  },
  {
    title: "CSS3",
    thumb: "https://github.com/PehGabrielVilar/PehGabrielVilar.github.io/blob/master/imagens/linguagens/Css3.jpeg?raw=true",
  },
  {
    title: "HTML5",
    thumb: "https://github.com/PehGabrielVilar/PehGabrielVilar.github.io/blob/master/imagens/linguagens/HTML5.jpeg?raw=true",
  },
  {
    title: "Java",
    thumb: "https://github.com/PehGabrielVilar/PehGabrielVilar.github.io/blob/master/imagens/linguagens/Java.jpeg?raw=true",
  },
  {
    title: "Android",
    thumb: "https://github.com/PehGabrielVilar/PehGabrielVilar.github.io/blob/master/imagens/ferramentas/Android.jpeg?raw=true",
  },

];

linguagem.map(imagem => {
  const cardClone = cardl.cloneNode(true);
  cardClone.querySelector("img").src = imagem.thumb;
  cardClone.querySelector(".title").innerHTML = imagem.title;

  sectionCardsl.appendChild(cardClone);
});

cardl.remove();




