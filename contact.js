fetch("./components/ContactForm/index.html")
  .then((response) => response.text())
  .then((html) => {
    document.getElementById("contact-form").innerHTML = html;
  });
