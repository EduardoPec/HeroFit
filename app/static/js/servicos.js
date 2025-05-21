document.addEventListener("DOMContentLoaded", () => {
 // Botão Hamburguer
    document.querySelector(".hamburguer").addEventListener("click", () => {
    document.querySelector(".menu-header").classList.toggle("ativo");
  });
});
