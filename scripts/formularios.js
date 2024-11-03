function mostrarForm(codigo) {
  let form = codigo ? document.querySelector(codigo) : null;
  if (!form) {
    form = document.getElementById("ingreso");
  }
  // Desactiva todos los formularios activos
  document
    .querySelectorAll(".contenedor__todo form.activo")
    .forEach(function (activeForm) {
      activeForm.classList.remove("activo");
    });

  // Activa el formulario que nos interesa
  form.classList.add("activo");
  setTimeout(function () {
    form.querySelector("*[autofocus]").focus();
  }, 300);
}

function activarAlternarFormularios() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      mostrarForm(e.target.getAttribute("href"));
    });
  });
}
