const sectionCardsl = document.querySelector("section.cardslinguagem");

const cardl = document.querySelector("div.linguagem");

const linguagem = [
    {
        title: "Android",
        thumb: "https://github.com/PehGabrielVilar/PehGabrielVilar.github.io/blob/master/imagens/linguagem_de_programacao/Android.jpeg?raw=true",
      },
      {
        title: "CSS3",
        thumb: "https://github.com/PehGabrielVilar/PehGabrielVilar.github.io/blob/master/imagens/linguagem_de_programacao/Css3.jpeg?raw=true",
        
      },
      {
        title: "HTML5",
        thumb: "https://github.com/PehGabrielVilar/PehGabrielVilar.github.io/blob/master/imagens/linguagem_de_programacao/HTML5.jpeg?raw=true",
        
      },
      {
        title: "Java",
        thumb: "https://github.com/PehGabrielVilar/PehGabrielVilar.github.io/blob/master/imagens/linguagem_de_programacao/Java.jpeg?raw=true",
        
      },
      {
        title: "Python",
        thumb: "https://github.com/PehGabrielVilar/PehGabrielVilar.github.io/blob/master/imagens/linguagem_de_programacao/Python.jpeg?raw=true",
        
      },
];

linguagem.map(imagem => {
  const cardClone = cardl.cloneNode(true);
  cardClone.querySelector("img").src = imagem.thumb;
  cardClone.querySelector(".title").innerHTML = imagem.title;
  
  sectionCardsl.appendChild(cardClone);
});

cardl.remove();