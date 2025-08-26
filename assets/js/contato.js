function abrirFormulario() {
  document.getElementById("fundoContato").style.display = "flex";
}

function fecharFormulario() {
  document.getElementById("fundoContato").style.display = "none";
}

// Fecha ao clicar fora da caixa
document.getElementById("fundoContato").addEventListener("click", function () {
  fecharFormulario();
});
