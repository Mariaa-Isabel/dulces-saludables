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

function chequearSesion() {
  const usuarioActual = localStorage.getItem("usuarioActual");
  if (usuarioActual) {
    document.getElementById("usuario").innerHTML = usuarioActual;
    document.getElementById("sesion").classList.add("activa");
  } else {
    document.getElementById("usuario").innerHTML = "";
    document.getElementById("sesion").classList.remove("activa");
  }
}

function cerrarSesion() {
  if (confirm("¿Estas seguro/a?")) {
    localStorage.removeItem("usuarioActual");
    chequearSesion();
  }
}

function agregarListeners() {
  document.getElementById("salir").addEventListener("click", cerrarSesion);
}

activarNavegacionSuave();
chequearSesion();
agregarListeners();
