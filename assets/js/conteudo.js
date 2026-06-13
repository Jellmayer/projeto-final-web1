const botao = document.getElementById("mostrarAplicacoes");
const aplicacoes = document.getElementById("aplicacoes");

botao.addEventListener("click", () => {
  aplicacoes.classList.toggle("d-none");
  botao.textContent = aplicacoes.classList.contains("d-none")
    ? "Mostrar aplicações práticas"
    : "Ocultar aplicações práticas";
});
