const sectionCardsl = document.querySelector("section.cardslinguagem");

const cardl = document.querySelector("div.linguagem");

const linguagem = [
  {
    title: "Python",
    thumb: "https://github.com/PehGabrielVilar/PehGabrielVilar.github.io/blob/master/imagens/linguagens/Python.jpeg?raw=true",
    link: "",
  },
  {
    title: "JavaScript",
    thumb: "https://github.com/PehGabrielVilar/PehGabrielVilar.github.io/blob/master/imagens/linguagens/JavaScript.jpeg?raw=true",
    link: "React-app",
  },
  {
    title: "CSS3",
    thumb: "https://github.com/PehGabrielVilar/PehGabrielVilar.github.io/blob/master/imagens/linguagens/Css3.jpeg?raw=true",
    link: "PWII-ProjetoWeb",
  },
  {
    title: "HTML5",
    thumb: "https://github.com/PehGabrielVilar/PehGabrielVilar.github.io/blob/master/imagens/linguagens/HTML5.jpeg?raw=true",
    link: "SITEModeloOSI",
  },
  {
    title: "Java",
    thumb: "https://github.com/PehGabrielVilar/PehGabrielVilar.github.io/blob/master/imagens/linguagens/Java.jpeg?raw=true",
    link: "DS-AtividadeDupla",
  },
  {
    title: "Android",
    thumb: "https://github.com/PehGabrielVilar/PehGabrielVilar.github.io/blob/master/imagens/ferramentas/Android.jpeg?raw=true",
  },
  
];

linguagem.map(imagem => {
  const cardClone = cardl.cloneNode(true);
  cardClone.setAttribute("id", linguagem.link);
  cardClone.querySelector("img").src = imagem.thumb;
  cardClone.querySelector(".title").innerHTML = imagem.title;

  sectionCardsl.appendChild(cardClone);
});

cardl.remove();




