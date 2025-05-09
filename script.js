function iniciarCarrossel(id) {
    const carousel = document.getElementById(id);
    const imagens = carousel.children;
    let index = 0;

    // Esconde todas as imagens, menos a primeira
    for (let i = 1; i < imagens.length; i++) {
        imagens[i].style.opacity = "0";
    }

    setInterval(() => {
        // Esconde todas as imagens
        for (let i = 0; i < imagens.length; i++) {
            imagens[i].style.opacity = "0";
        }
        
        // Mostra a imagem atual
        imagens[index].style.opacity = "1";
        
        index = (index + 1) % imagens.length;
    }, 2000);
}

document.addEventListener("DOMContentLoaded", () => {
    iniciarCarrossel("carousel1");
    iniciarCarrossel("carousel2");
    iniciarCarrossel("carousel3");
});