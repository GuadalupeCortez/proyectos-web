// Elementos
const producto = document.getElementById("producto");
const precio = document.getElementById("precio");
const cantidad = document.getElementById("cantidad");
const agregar = document.getElementById("agregar");
const tabla = document.getElementById("tabla");

// Datos guardados
let productos = JSON.parse(localStorage.getItem("productosDashboard")) || [];
renderizar();

// Agregar producto
agregar.addEventListener("click", () => {
    if (!producto.value || !precio.value || !cantidad.value) return;

    productos.push({
        producto: producto.value,
        precio: precio.value,
        cantidad: cantidad.value
    });

    guardar();
    renderizar();
    limpiar();
});

// Mostrar productos
function renderizar() {
    tabla.innerHTML = "";

    productos.forEach((item, index) => {
        const fila = document.createElement("tr");

        fila.innerHTML = `
            <td contenteditable="true">${item.producto}</td>
            <td contenteditable="true">${item.precio}</td>
            <td contenteditable="true">${item.cantidad}</td>
            <td><button class="eliminar">Eliminar</button></td>
        `;

        fila.querySelector(".eliminar").onclick = () => {
            productos.splice(index, 1);
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

// Guardar
function guardar() {
    localStorage.setItem("productosDashboard", JSON.stringify(productos));
}

// Limpiar
function limpiar() {
    producto.value = "";
    precio.value = "";
    cantidad.value = "";
}