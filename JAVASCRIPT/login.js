// script.js
$(document).ready(function () {
    // Validación del formulario
    function validateForm() {
        var username = $("#username").val();
        var email = $("#email").val();
        var password = $("#password").val();
        var password2 = $("#password_2").val();

        // Verificar que todos los campos estén completos
        if (username === "" || email === "" || password === "" || password2 === "") {
            alert("Todos los campos son obligatorios");
            return;
        }

        // Verificar que las contraseñas coincidan
        if (password !== password2) {
            alert("Las contraseñas no coinciden");
            return;
        }

        // Puedes agregar más validaciones según tus requisitos

        // Si todas las validaciones son exitosas, puedes enviar el formulario o realizar otras acciones
        alert("Formulario validado correctamente");
    }

    // Asigna la función validateForm al evento click del botón
    $("#registrationForm button").on("click", validateForm);

    // Corregir el error en el siguiente código
    $("#tooglePassword input[type='checkbox']").on("change", function () {
        var passwordInput = $("#password");
        if (this.checked) {
            passwordInput.attr("type", "text");
        } else {
            passwordInput.attr("type", "password");
        }
    });
});
