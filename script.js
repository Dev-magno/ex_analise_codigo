let slideIndex = 1; // variavel slideIndex inicializada com 1.
showSlides(slideIndex); // chamada da função showSlides que mostra o slide inicial slideIndex.

// função para avançar ou retroceder.
function plusSlides(n) { // o parâmentro n é o número de slides que se deseja avançar.
    showSlides(slideIndex += n); // a função showSlides() com o argumento slideIndex += n atualiza seu valor adicionando n ao valor atual. Em seguida a funcação slideIndex() é chamada com esse novo valor. Se n for positivo, os slides avançarão; se n for negativo, os slides retrocederão.
}

// função usada para apresentar um slide específico quando o ponto de navegação é clicado 
function currentSlide(n) { // o parâmentro n é o número de slides que se deseja mostrar.
    showSlides(slideIndex = n); // a função showSlides() é chamada com o argumento slideIndex = n. Isso atribui diretamente o valor de n à variável slideIndex e, em seguida, a função showSlides() é chamada com esse novo valor.
}

// função que exibe um slide específico
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let pontos = document.getElementsByClassName("ponto");

    if (n > slides.length) { 
        slideIndex = 1 
    }
    
    if (n < 1) { 
        slideIndex = slides.length 
    }
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    for (i = 0; i < pontos.length; i++) {
        pontos[i].className = pontos[i].className.replace(" active", "");
    }
    
    slides[slideIndex - 1].style.display = "block";
    
    pontos[slideIndex - 1].className += " active";
}
