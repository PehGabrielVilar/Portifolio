const sectionCardsl = document.querySelector("section.cardslinguagem");

const cardl = document.querySelector("div.linguagem");

const linguagem = [
    {
        title: "Android",
        thumb: src="imagens/linguagem_de_programacao/Android.JPEG",
      },
      {
        title: "CSS3",
        thumb: src="imagens/linguagem_de_programacao/CSS3.JPEG",
        
      },
      {
        title: "HTML5",
        thumb: src="imagens/linguagem_de_programacao/HTML5.JPEG",
        
      },
      {
        title: "Java",
        thumb: src="imagens/linguagem_de_programacao/Java.JPEG",
        
      },
      {
        title: "Python",
        thumb: src="imagens/linguagem_de_programacao/Python.JPEG",
        
      },
];

linguagem.map(imagem => {
  const cardClone = cardl.cloneNode(true);
  cardClone.querySelector("img").src = imagem.thumb;
  cardClone.querySelector(".title").innerHTML = imagem.title;
  
  sectionCardsl.appendChild(cardClone);
});

cardl.remove();