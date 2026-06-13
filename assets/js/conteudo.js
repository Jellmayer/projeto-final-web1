const botao = document.getElementById("mostrarAplicacoes");
const aplicacoes = document.getElementById("aplicacoes");
const mensagemArrastar = document.getElementById("arrastarTela");

botao.addEventListener("click", () => {
  aplicacoes.classList.toggle("d-none");
  mensagemArrastar.classList.toggle("d-none");
  botao.textContent = aplicacoes.classList.contains("d-none")
    ? "Mostrar aplicações práticas"
    : "Ocultar aplicações práticas";
});
