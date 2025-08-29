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

document
  .getElementById("formContato")
  .addEventListener("submit", function (event) {
    const nome = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("message").value.trim();

    // cancela o envio primeiro
    event.preventDefault();

    if (nome && email && mensagem) {
      alert("✅ Sua mensagem foi enviada com sucesso!");
      // envia o formulário manualmente depois do alerta
      this.submit();
    } else {
      alert("⚠️ Por favor, preencha todos os campos antes de enviar.");
    }
  });
