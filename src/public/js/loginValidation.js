window.onload = function () {
  const form = document.querySelector("form");
  form.email.focus()

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(form)
    const errorsElement = document.querySelectorAll(".text-danger");
    errorsElement.forEach(element => {
      element.style.display = "none"
      element.innerHTML = "";
    })
    const errors = [];

    // Email
    if (!form.email.value) {
      errors.push({
        name: "email",
        message: "Es obligatorio llenar este campo",
      });
      form.email.classList.remove("is-valid");
      form.email.classList.add("is-invalid");
    } else if (form.email.value) {
      let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (!form.email.value.match(mailformat)) {
        errors.push({
          name: "email",
          message: "El email debe ser valido",
        });
        form.email.classList.remove("is-valid");
        form.email.classList.add("is-invalid");
      } else {
        form.email.classList.remove("is-invalid");
        form.email.classList.add("is-valid");
      }
    } else {
      form.email.classList.remove("is-invalid");
      form.email.classList.add("is-valid");
    }

    // Contraseña
    if (!form.password.value) {
      errors.push({
        name: "password",
        message: "Tu contraseña no puede estar vacia",
      });
      form.password.classList.remove("is-valid");
      form.password.classList.add("is-invalid");
    } else if (form.password.value.length < 8) {
      errors.push({
        name: "password",
        message: "La contraseña debe tener minimo 8 caracteres",
      });
      form.password.classList.remove("is-valid");
      form.password.classList.add("is-invalid");
    } else {
      form.password.classList.remove("is-invalid");
      form.password.classList.add("is-valid");
    }

    //Error campos vacios
    errors.forEach((error) => {
      console.log(error)
      const errorLabel = document.getElementById("error-" + error.name);
      errorLabel.style.display = "block"
      errorLabel.innerHTML = error.message;
    })
    if (errors.length === 0) {
      form.submit();
    }
  });
}


// boton de acultar contraseña
const togglePasswordButton = document.getElementById('toggle-password');
const passwordInput = document.querySelector('input[name="password"]');
const passwordIcon = document.querySelector('.fa-solid.fa-eye');

togglePasswordButton.addEventListener('click', function () {
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    passwordIcon.classList.remove('fa-eye');
    passwordIcon.classList.add('fa-eye-slash');
  } else {
    passwordInput.type = 'password';
    passwordIcon.classList.remove('fa-eye-slash');
    passwordIcon.classList.add('fa-eye');
  }
});

