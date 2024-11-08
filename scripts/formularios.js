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

function extraerDatosFormulario(form) {
  return Array.from(form.elements).reduce((acc, elemento) => {
    if (elemento.type !== "submit" && elemento.type !== "button") {
      acc[elemento.name] = elemento.value;
    }
    return acc;
  }, {});
}

function registrarUsuario(e) {
  e.preventDefault();
  const form = e.target;
  const email = document.getElementById("register-email").value;
  const data = extraerDatosFormulario(form);
  localStorage.setItem(email, JSON.stringify(data));
  mostrarForm('#ingreso');
}

function iniciarSesion(e) {
  e.preventDefault();
  const form = e.target;
  const datosForm = extraerDatosFormulario(form);
  const usuario = localStorage.getItem(datosForm.email);
  if (!usuario) {
    alert("Correo o contraseña incorrecta");
    return;
  }

  try {
    const datosUsuario = JSON.parse(usuario);
    if (
      datosUsuario.email != datosForm.email ||
      datosUsuario.password != datosForm.password
    ) {
      alert("Correo o contraseña incorrecta");
    } else {
      localStorage.setItem('usuarioActual', datosUsuario.email);
      location.href = '/index.html';
    }
  } catch (e) {
    alert("Correo o contraseña incorrecta");
  }
}

function activarSubmitFormularios() {
  document
    .getElementById("registro")
    .addEventListener("submit", registrarUsuario);
  document.getElementById("ingreso").addEventListener("submit", iniciarSesion);
}

mostrarForm(document.location.hash);
activarAlternarFormularios();