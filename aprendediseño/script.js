// Elementos de control
const botonDemo = document.getElementById("botonDemo");

const tamanoBoton = document.getElementById("tamanoBoton");
const tamanoTexto = document.getElementById("tamanoTexto");
const colorBoton = document.getElementById("colorBoton");
const brillo = document.getElementById("brillo");
const opacidad = document.getElementById("opacidad");
const bordes = document.getElementById("bordes");
const sombra = document.getElementById("sombra");

// Función que actualiza estilos
function actualizarEstilos() {
    botonDemo.style.width = tamanoBoton.value + "px";
    botonDemo.style.fontSize = tamanoTexto.value + "px";
    botonDemo.style.backgroundColor = colorBoton.value;
    botonDemo.style.filter = `brightness(${brillo.value}%)`;
    botonDemo.style.opacity = opacidad.value / 100;
    botonDemo.style.borderRadius = bordes.value + "px";
    botonDemo.style.boxShadow = `0 0 ${sombra.value}px rgba(255,255,255,0.8)`;
}

// Escuchar cambios en todos los controles
tamanoBoton.addEventListener("input", actualizarEstilos);
tamanoTexto.addEventListener("input", actualizarEstilos);
colorBoton.addEventListener("input", actualizarEstilos);
brillo.addEventListener("input", actualizarEstilos);
opacidad.addEventListener("input", actualizarEstilos);
bordes.addEventListener("input", actualizarEstilos);
sombra.addEventListener("input", actualizarEstilos);