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

    // Confirmar Contraseña
    if (!form["password-confirm"].value) {
      errors.push({
        name: "password-confirm",
        message: "Tu contraseña no puede estar vacia",
      });
      form.password.classList.remove("is-valid");
      form.password.classList.add("is-invalid");
  } else if (form["password-confirm"].value != form.password.value) {
    errors.push({
      name: "password",
      message: "Las contraseñas no coinciden",
    });
    form.password.classList.remove("is-valid");
    form.password.classList.add("is-invalid");
} else {
    form.password.classList.remove("is-invalid");
    form.password.classList.add("is-valid");
  }

    //nombre
    if (!form.firstName.value) {
        errors.push({
          name: "firstName",
          message: "Tu nombre no puede estar vacio",
        });
        form.firstName.classList.remove("is-valid");
        form.firstName.classList.add("is-invalid");
    } else {
        form.firstName.classList.remove("is-invalid");
        form.firstName.classList.add("is-valid");
      }

    //apellido
    if (!form.lastName.value) {
        errors.push({
          name: "lastName",
          message: "Tu apellido no puede estar vacio",
        });
        form.lastName.classList.remove("is-valid");
        form.lastName.classList.add("is-invalid");
    } else {
        form.lastName.classList.remove("is-invalid");
        form.lastName.classList.add("is-valid");
      }

    //imagen
    if (!form.image.value) {
        errors.push({
          name: "image",
          message: "debes subir una imagen",
        });
        form.image.classList.remove("is-valid");
        form.image.classList.add("is-invalid");
    } else {
        form.image.classList.remove("is-invalid");
        form.image.classList.add("is-valid");
      }

    //direccion
    if (!form.adress.value) {
        errors.push({
          name: "adress",
          message: "Tu direccion no puede estar vacia",
        });
        form.adress.classList.remove("is-valid");
        form.adress.classList.add("is-invalid");
    } else {
        form.adress.classList.remove("is-invalid");
        form.adress.classList.add("is-valid");
      }

    //ciudad
    if (!form.city.value) {
        errors.push({
          name: "city",
          message: "Tu ciudad no puede estar vacia",
        });
        form.city.classList.remove("is-valid");
        form.city.classList.add("is-invalid");
    } else {
        form.city.classList.remove("is-invalid");
        form.city.classList.add("is-valid");
      }

    //codigo postal
    if (!form.zipCode.value) {
        errors.push({
          name: "zipCode",
          message: "Tu codigo postal no puede estar vacio",
        });
        form.zipCode.classList.remove("is-valid");
        form.zipCode.classList.add("is-invalid");
    } else if (!/^\d+$/.test(form.zipCode.value)){
        errors.push({
          name: "zipCode",
          message: "Tu codigo postal debe ser solo numeros",
      });
    } else if (form.zipCode.value.length < 4){
        errors.push({
          name: "zipCode",
          message: "Tu codigo postal debe contener minimo 4 numeros",
      });
    } else {
        form.zipCode.classList.remove("is-invalid");
        form.zipCode.classList.add("is-valid");
      }

    //numero de contacto
    if (!form.cell.value) {
        errors.push({
          name: "cell",
          message: "Tu numero de contacto no puede estar vacio",
        });
        form.cell.classList.remove("is-valid");
        form.cell.classList.add("is-invalid");
    } else if (!/^\d+$/.test(form.cell.value)){
      errors.push({
        name: "cell",
        message: "Tu numero de contacto debe ser solo numeros",
    });
    } else if (!/^\d{10}$/.test(form.cell.value)){
      errors.push({
        name: "cell",
        message: "Tu numero de contacto no es valido",
    });
    } else {
        form.cell.classList.remove("is-invalid");
        form.cell.classList.add("is-valid");
      }

   //Error campos vacios
    errors.forEach((error) => {
      console.log(error)
      const errorLabel = document.getElementById("error-" + error.name);
      errorLabel.style.display = "block"
      errorLabel.innerHTML = error.message;
    })
    if (errors.length === 0){
      form.submit();
    }
  });
}


// boton de acultar contraseña
const togglePasswordButton = document.querySelectorAll('#toggle-password');
const passwordInput = document.querySelector('input[name="password"]');
const confirmPasswordInput = document.querySelector('input[name="password-confirm"]');

togglePasswordButton.forEach((button) => {
    button.addEventListener('click', function() {
        const fieldType = this.previousElementSibling.type;

        if (fieldType === 'password') {
            this.previousElementSibling.type = 'text';
            this.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';
        } else {
            this.previousElementSibling.type = 'password';
            this.innerHTML = '<i class="fa-solid fa-eye"></i>';
        }
    });
});
