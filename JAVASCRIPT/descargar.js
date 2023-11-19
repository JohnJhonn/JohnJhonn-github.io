// Ejemplo básico de interactividad con JavaScript
document.addEventListener("DOMContentLoaded", function () {
    // Puedes agregar más interactividad aquí
    console.log("El DOM ha sido cargado");
});

function descargar(recurso) {
    // Define el nombre del archivo y la ruta de la carpeta donde se encuentra
    const archivo = "MathScience.exe"; // Reemplaza con el nombre correcto de tu archivo
    const rutaCarpeta = "../PROGRAMA/"; // Reemplaza con la ruta correcta de tu carpeta

    // Combina el nombre del archivo y la ruta de la carpeta
    const urlDescarga = rutaCarpeta + archivo;

    // Abre la opción de descarga utilizando el atributo "download" de un enlace
    const enlaceDescarga = document.createElement("a");
    enlaceDescarga.href = urlDescarga;
    enlaceDescarga.download = archivo;
    enlaceDescarga.click();

    // Puedes agregar un mensaje de consola para confirmar la descarga
    console.log(`Descargando ${archivo} desde ${rutaCarpeta}`);
}
