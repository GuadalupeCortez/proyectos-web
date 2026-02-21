// Lista de horas de ejemplo para el botón
const horasEjemplo = [2, 6, 10, 14, 18, 22];
let indiceHora = 0;

// Elementos del DOM
const textoHora = document.getElementById("horaActual");
const mensajeHora = document.getElementById("mensajeHora");
const botonCambiar = document.getElementById("botonCambiar");

// Función que cambia el fondo según la hora
function cambiarFondoSegunHora(hora) {

    if (hora >= 0 && hora < 6) {
        document.body.style.background = "linear-gradient(135deg, #0f2027, #203a43, #2c5364)";
        mensajeHora.textContent = "🌙 Madrugada";
    } 
    else if (hora >= 6 && hora < 12) {
        document.body.style.background = "linear-gradient(135deg, #fceabb, #f8b500)";
        mensajeHora.textContent = "🌅 Mañana";
    } 
    else if (hora >= 12 && hora < 18) {
        document.body.style.background = "linear-gradient(135deg, #00c6ff, #0072ff)";
        mensajeHora.textContent = "☀️ Tarde";
    } 
    else {
        document.body.style.background = "linear-gradient(135deg, #141e30, #243b55)";
        mensajeHora.textContent = "🌆 Noche";
    }

    // Mostrar hora en pantalla
    textoHora.textContent = hora.toString().padStart(2, "0") + ":00";
}

// Hora real del sistema al cargar la página
const horaActualSistema = new Date().getHours();
cambiarFondoSegunHora(horaActualSistema);

// Evento para simular cambio de hora
botonCambiar.addEventListener("click", () => {
    const horaSimulada = horasEjemplo[indiceHora];
    cambiarFondoSegunHora(horaSimulada);

    indiceHora++;
    if (indiceHora >= horasEjemplo.length) {
        indiceHora = 0;
    }
});