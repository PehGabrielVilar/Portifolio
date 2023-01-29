var btnSobre = document.querySelector("#show");
var pontos = document.querySelector(".pontos");
var maisTexto = document.querySelector(".mais");


btnSobre.addEventListener('click', function () {
    if (pontos.style.display === "none") {
        pontos.style.display = "Inline";
        maisTexto.style.display = "none";
        btnSobre.innerHTML = "Sobre";
    } else {
        pontos.style.display = "none";
        maisTexto.style.display = "inline";
        btnSobre.innerHTML = "Ver menos";
    }
})

