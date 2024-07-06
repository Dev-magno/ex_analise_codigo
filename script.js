// Magno Lopes
let slideIndex = 1; // variavel slideIndex inicializada com 1.
showSlides(slideIndex); // chamada da função showSlides que mostra o slide inicial slideIndex.

// função para avançar ou retroceder.
function plusSlides(n) { // o parâmentro n é o número de slides que se deseja avançar.
    showSlides(slideIndex += n); // a função showSlides() com o argumento slideIndex += n atualiza seu valor adicionando n ao valor atual. Em seguida a funcação slideIndex() é chamada com esse novo valor. Se n for positivo, os slides avançarão; se n for negativo, os slides retrocederão.
}

// função usada para apresentar o slide quando o ponto de navegação é clicado 
function currentSlide(n) { // o parâmentro n é o número de slides que se deseja mostrar.
    showSlides(slideIndex = n); // a função showSlides() é chamada com o argumento slideIndex = n. Isso atribui diretamente o valor de n à variável slideIndex e, em seguida, a função showSlides() é chamada com esse novo valor.
}

// função que exibe o slide
function showSlides(n) { // o parâmetro n indica o incice do slide a ser mostrado
    let i; // varial i declarada que será usada na interação do slide e pontos de navegação
    let slides = document.getElementsByClassName("mySlides"); // seleciona os elementos html que possuem classe CSS "mySlides" e guarda na variavel slides
    let pontos = document.getElementsByClassName("ponto"); // seleciona os elementos html que possuem classe CSS "ponto" que são os botões de navegação do slide e guarda na variavel pontos.

    if (n > slides.length) { // esta linha de código verifica se o número de slide 'n' é maior que o número total de slides (slides.length).
        slideIndex = 1 // Se for aqui faz com que retorne para o primeiro slide
    }
    
    if (n < 1) { // verifica se o número de slide 'n' é menor que 1, se for...
        slideIndex = slides.length // slideIndex recebe o número total de slides e faz com que vá para o último slide
    }
    
    for (i = 0; i < slides.length; i++) { // Percorre todos os slides e define o estilo display de cada um deles para "none", dessa forma, são ocultados.
        slides[i].style.display = "none";
    }
    
    for (i = 0; i < pontos.length; i++) { // aqui faz uma intereção (loop) que percorre todos os pontos de navegação. Remove em cada ponto de navegação a classe 'active'  e desativa qualquer marcação de slide atual. 
        pontos[i].className = pontos[i].className.replace(" active", "");
    }
    
    slides[slideIndex - 1].style.display = "block"; // esta linha exibe o slide atual '[slideIndex - 1]' e apartir das condições inciciais de slideIndex, indica qual slide deve ser mostrado.
    
    pontos[slideIndex - 1].className += " active"; // a linha adicona a clsse "active" ao ponto de navegação correspondente ao slide atual e marca o ponto visualmente o ponto ativo.
}

 /*Parte 3
    Esta função foi projetada para controlar, em um carrossel de slides, a exibição de slides. O parâmetro 'n' que ela recebe indica qual slide deve ser mostrado. A função verifica se 'n' está nos limites disponíveis dos slides. Caso, não esteja, ela ajusta 'n' para o primeiro ou para o último slide. 

    Depois, oculta todos os outros slides e remove qualquer marcação do slide atual nos pontos de navegação. Então, exibe o slide correto e marca o ponto de navegação correspondente como ativo. 

    Resumindo, ela percorre todos os slides. De acordo com o parâmetro passado, exibe o slide correspondente ao indicado, tornando ativo apenas o seu ponto de navegação e constantemente ajusta o parâmetro para o primeiro ou último. Fazendo assim com que o carrossel de slide seja corretamente exibido na tela.
     */
