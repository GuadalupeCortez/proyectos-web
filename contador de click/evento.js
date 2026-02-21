// Variable que guarda el número de clics
let numeroDeClics = 0;

// Seleccionamos los elementos del HTML
const contador = document.getElementById("contador");
const botonClick = document.getElementById("botonClick");
const botonReset = document.getElementById("botonReset");

// Evento: cuando se da clic al botón principal
botonClick.addEventListener("click", () => {
    numeroDeClics++;              // Aumenta el contador
    contador.textContent = numeroDeClics; // Muestra el valor en pantalla
});

// Evento: reiniciar contador
botonReset.addEventListener("click", () => {
    numeroDeClics = 0;            // Regresa a cero
    contador.textContent = numeroDeClics;
});