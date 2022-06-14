var btnSobre = document.querySelector("#show");
var pontos = document.querySelector(".pontos");
var maisTexto = document.querySelector(".mais");
var maisTexto2 = document.querySelector(".mais2");
var maisTexto3 = document.querySelector(".mais3");
var maisTexto4 = document.querySelector(".mais4");

btnSobre.addEventListener('click', function(){
    if(pontos.style.display === "none"){
        pontos.style.display = "Inline";
        maisTexto.style.display = "none";
        maisTexto2.style.display = "none";
        maisTexto3.style.display = "none";
        maisTexto4.style.display = "none";
        btnSobre.innerHTML="Sobre";
    }else{
        pontos.style.display = "none";
        maisTexto.style.display = "inline";
        maisTexto2.style.display = "inline";
        maisTexto3.style.display = "inline";
        maisTexto4.style.display = "inline";
        btnSobre.innerHTML="Ver menos";
    }
})


    
