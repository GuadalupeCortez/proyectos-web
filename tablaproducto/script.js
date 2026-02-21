// Elementos
const producto = document.getElementById("producto");
const precio = document.getElementById("precio");
const cantidad = document.getElementById("cantidad");
const agregar = document.getElementById("agregar");
const tabla = document.getElementById("tabla");

// Cargar datos
let datos = JSON.parse(localStorage.getItem("tablaGlass")) || [];
renderizar();

// Agregar producto
agregar.addEventListener("click", () => {
    if (!producto.value || !precio.value || !cantidad.value) return;

    datos.push({
        producto: producto.value,
        precio: precio.value,
        cantidad: cantidad.value
    });

    guardar();
    renderizar();
    limpiar();
});

// Renderizar tabla
function renderizar() {
    tabla.innerHTML = "";

    datos.forEach((item, index) => {
        const fila = document.createElement("tr");

        fila.innerHTML = `
            <td contenteditable="true">${item.producto}</td>
            <td contenteditable="true">${item.precio}</td>
            <td contenteditable="true">${item.cantidad}</td>
            <td><button class="eliminar">✖</button></td>
        `;

        fila.querySelector(".eliminar").onclick = () => {
            datos.splice(index, 1);
            guardar();
            renderizar();
        };

        fila.querySelectorAll("[contenteditable]").forEach((celda, i) => {
            celda.oninput = () => {
                if (i === 0) item.producto = celda.textContent;
                if (i === 1) item.precio = celda.textContent;
                if (i === 2) item.cantidad = celda.textContent;
                guardar();
            };
        });

        tabla.appendChild(fila);
    });
}

// Guardar datos
function guardar() {
    localStorage.setItem("tablaGlass", JSON.stringify(datos));
}

// Limpiar inputs
function limpiar() {
    producto.value = "";
    precio.value = "";
    cantidad.value = "";
}