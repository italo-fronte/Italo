function iniciarCarrossel(id, direcao) {
  const carousel = document.getElementById(id).querySelector(".carousel-inner");
  if (!carousel) {
    console.error(`Erro: Não foi possível encontrar .carousel-inner dentro de #${id}`);
    return;
  }
  
  const imagens = carousel.children;
  let index = 0;
  const numImagens = imagens.length;
  
  function atualizarCarrossel() {
    const containerWidth = carousel.parentElement.offsetWidth;
    carousel.style.transform = `translateX(${direcao * index * containerWidth}px)`;
  }
  
  atualizarCarrossel();
  
  setInterval(() => {
    index = (index + 1) % numImagens;
    atualizarCarrossel();
  }, 3000);
}

document.addEventListener("DOMContentLoaded", () => {
  iniciarCarrossel("carousel1", -1);
  iniciarCarrossel("carousel2", -1);
  iniciarCarrossel("carousel3", -1);
});
