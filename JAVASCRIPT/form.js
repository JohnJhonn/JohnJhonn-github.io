document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("registrationForm");
    const errorMessage = document.getElementById("error-message");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("password_2").value;

        // Validación de campos vacíos
        if (username.trim() === "" || email.trim() === "" || password.trim() === "" || confirmPassword.trim() === "") {
            errorMessage.textContent = "Por favor, completa todos los campos.";
            return;
        }

        // Validación de contraseñas que coinciden
        if (password !== confirmPassword) {
            errorMessage.textContent = "Las contraseñas no coinciden. Por favor, inténtalo de nuevo.";
            return;
        }

        // Validación de nivel de confianza de la contraseña
        const nivel = verificarContrasena(password);
        if (nivel < 3) {
            errorMessage.textContent = "La contraseña debe tener al menos 8 caracteres, incluir números, letras minúsculas, mayúsculas y caracteres especiales.";
            return;
        }

        // Aquí puedes enviar el formulario si todas las validaciones son exitosas
        errorMessage.textContent = "";
        alert("¡Registro exitoso!");
    });

    function verificarContrasena(contrasena) {
        // Implementa tu lógica de verificación aquí, similar a la función anterior
        // Devuelve el nivel de confianza calculado
    }
});
