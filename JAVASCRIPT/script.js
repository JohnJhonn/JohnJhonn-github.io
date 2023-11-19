document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menuToggle");
    const menu = document.querySelector(".menu");

    menuToggle.addEventListener("click", function () {
        menu.classList.toggle("show");
    });

    menu.addEventListener("click", function (event) {
        if (event.target.tagName === "A") {
            menu.classList.remove("show");
            // Marcar el enlace activo
            document.querySelectorAll(".menu a").forEach(link => link.classList.remove("active"));
            event.target.classList.add("active");
        }
    });

    // Cerrar submenú al hacer clic fuera de él
    document.addEventListener("click", function (event) {
        const submenus = document.querySelectorAll(".submenu-content");
        submenus.forEach(submenu => {
            if (!submenu.contains(event.target) && !event.target.classList.contains("submenu")) {
                submenu.style.display = "none";
            }
        });
    });
});
