/* -------------------------
   EFECTO DE DESPLAZAMIENTO
   (Parallax simple)
-------------------------- */

window.addEventListener("scroll", () => {
  const scroll = window.scrollY;

  // Mueve los fondos lentamente para simular profundidad
  document.querySelectorAll(".bosque, .camino, .noche").forEach(escena => {
    escena.style.backgroundPositionY = -(scroll * 0.2) + "px";
  });
});