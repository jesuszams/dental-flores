$(document).ready(function () {
    // Cargar el logo de la empresa
    $("#logo").attr("src", "images/logo.png"); // Cambia "images/logo.png" por la ruta de tu logo

    // Cargar imágenes de los tratamientos
    const servicios = [
        {
            nombre: "Limpieza dental profesional",
            imagen: "images/limpieza.jpg"
        },
        {
            nombre: "Blanqueamiento dental",
            imagen: "images/blanqueamiento.jpeg"
        },
        {
            nombre: "Ortodoncia",
            imagen: "images/Ortodoncia.jpeg"
        },
        {
            nombre: "Implantes dentales",
            imagen: "images/implantes.jpg"
        },
        {
            nombre: "Tratamiento de caries",
            imagen: "images/caries.jpg"
        },
        {
            nombre: "Endodoncia",
            imagen: "images/endodoncia.jpg"
        }
    ];

    // Generar la lista de servicios con imágenes
    servicios.forEach(servicio => {
        $("#services-list").append(`
            <li>
                <img src="${servicio.imagen}" alt="${servicio.nombre}">
                <span>${servicio.nombre}</span>
            </li>
        `);
    });
});
