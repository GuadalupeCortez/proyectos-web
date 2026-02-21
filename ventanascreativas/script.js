// Seleccionar controles
const controlBordes = document.getElementById("bordes");
const controlSombra = document.getElementById("sombra");
const controlColor = document.getElementById("colorVentana");

// Seleccionar todas las ventanas
const ventanas = document.querySelectorAll(".ventana");

// Función para actualizar diseño de ventanas
function actualizarVentanas() {
    ventanas.forEach(ventana => {
        ventana.style.borderRadius = controlBordes.value + "px";
        ventana.style.boxShadow = `0 0 ${controlSombra.value}px rgba(0,0,0,0.3)`;
        ventana.style.backgroundColor = controlColor.value;
    });
}

// Eventos
controlBordes.addEventListener("input", actualizarVentanas);
controlSombra.addEventListener("input", actualizarVentanas);
controlColor.addEventListener("input", actualizarVentanas);