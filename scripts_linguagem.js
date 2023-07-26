
  const sectionCardsl = document.querySelector("section.cardslinguagem");
  const cardl = document.querySelector("div.linguagem");

  const linguagem = [
    {
      id: "P.A.",
      title: "Python",
      thumb: "https://github.com/PehGabrielVilar/PehGabrielVilar.github.io/blob/master/imagens/linguagens/Python.jpeg?raw=true",
    },
    {
      id: "React-app",
      title: "JavaScript",
      thumb: "https://github.com/PehGabrielVilar/PehGabrielVilar.github.io/blob/master/imagens/linguagens/JavaScript.jpeg?raw=true",
    },
    {
      id: "PehGabrielVilar.github.io",
      title: "CSS3",
      thumb: "https://github.com/PehGabrielVilar/PehGabrielVilar.github.io/blob/master/imagens/linguagens/Css3.jpeg?raw=true",
    },
    {
      id: "SITEModeloOSI",
      title: "HTML5",
      thumb: "https://github.com/PehGabrielVilar/PehGabrielVilar.github.io/blob/master/imagens/linguagens/HTML5.jpeg?raw=true",
    },
    {
      id: "PWII-ProjetoWeb",
      title: "Java",
      thumb: "https://github.com/PehGabrielVilar/PehGabrielVilar.github.io/blob/master/imagens/linguagens/Java.jpeg?raw=true",
    },
    {
      id: "appBookClub",
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

  sectionCardsl.addEventListener("click", event => {
    const clickedCard = event.target.closest(".linguagem");
    if (clickedCard) {
      const titleElement = clickedCard.querySelector(".title");
      const title = titleElement.textContent.trim();
      const language = linguagem.find(imagem => imagem.title === title);
      if (language) {
        const githubLink = `https://github.com/PehGabrielVilar/${language.id}`;
        window.open(githubLink, "_blank"); 
      }
    }
  });

  cardl.remove();



