// contact.js
document.addEventListener("DOMContentLoaded", function () {
  fetch("/components/ContactForm/index.html")
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("contact-form").innerHTML = html;
    })
    .then(() => {
      // Adiciona o evento de submit após o formulário ser carregado
      const form = document.querySelector(".contact-form");
      if (form) {
        form.addEventListener("submit", function (e) {
          e.preventDefault();
          // Adicione aqui a lógica para enviar o formulário
          console.log("Formulário enviado");
        });
      }
    })
    .catch((error) => console.error("Erro ao carregar o formulário:", error));
});
