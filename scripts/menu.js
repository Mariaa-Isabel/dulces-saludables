function activarNavegacionSuave() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault(); // Evita que el fragmento se añada a la URL

      const targetSection = document.querySelector(this.getAttribute("href"));
      targetSection.scrollIntoView({
        behavior: "smooth", // Desplazamiento suave
      });
    });
  });
}

activarNavegacionSuave();