const botones = document.querySelectorAll(".filtro");
const tarjetas = document.querySelectorAll(".card");

botones.forEach(boton => {
    boton.addEventListener("click", () => {

        // Quitar activo
        botones.forEach(b => b.classList.remove("activo"));
        boton.classList.add("activo");

        const categoria = boton.dataset.categoria;

        tarjetas.forEach(card => {
            if (categoria === "todos" || card.dataset.categoria === categoria) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});