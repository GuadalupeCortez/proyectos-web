// Elementos
const producto = document.getElementById("producto");
const precio = document.getElementById("precio");
const cantidad = document.getElementById("cantidad");
const agregar = document.getElementById("agregar");
const tabla = document.getElementById("tabla");
const buscador = document.getElementById("buscador");
const totalProductos = document.getElementById("totalProductos");
const valorInventario = document.getElementById("valorInventario");
const exportar = document.getElementById("exportar");

// Datos
let productos = JSON.parse(localStorage.getItem("productosPRO")) || [];
renderizar();

// Agregar
agregar.addEventListener("click", () => {
    if (!producto.value || !precio.value || !cantidad.value) return;

    productos.push({
        nombre: producto.value,
        precio: Number(precio.value),
        cantidad: Number(cantidad.value)
    });

    guardar();
    renderizar();
    limpiar();
});

// Buscar
buscador.addEventListener("input", renderizar);

// Renderizar
function renderizar() {
    tabla.innerHTML = "";
    let filtro = buscador.value.toLowerCase();
    let totalValor = 0;

    productos.forEach((item, index) => {
        if (!item.nombre.toLowerCase().includes(filtro)) return;

        const total = item.precio * item.cantidad;
        totalValor += total;

        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td contenteditable="true">${item.nombre}</td>
            <td contenteditable="true">${item.precio}</td>
            <td contenteditable="true">${item.cantidad}</td>
            <td>$${total}</td>
            <td><button class="eliminar">Eliminar</button></td>
        `;

        fila.querySelector(".eliminar").onclick = () => {
            productos.splice(index, 1);
            guardar();
            renderizar();
        };

        fila.querySelectorAll("[contenteditable]").forEach((celda, i) => {
            celda.oninput = () => {
                if (i === 0) item.nombre = celda.textContent;
                if (i === 1) item.precio = Number(celda.textContent);
                if (i === 2) item.cantidad = Number(celda.textContent);
                guardar();
                renderizar();
            };
        });

        tabla.appendChild(fila);
    });

    totalProductos.textContent = productos.length;
    valorInventario.textContent = totalValor.toFixed(2);
}

// Exportar a CSV (Excel)
exportar.addEventListener("click", () => {
    let csv = "Producto,Precio,Cantidad\n";
    productos.forEach(p => {
        csv += `${p.nombre},${p.precio},${p.cantidad}\n`;
    });

    const blob = new Blob([csv], { type: "text/csv" });
    const enlace = document.createElement("a");
    enlace.href = URL.createObjectURL(blob);
    enlace.download = "productos.csv";
    enlace.click();
});

// Guardar
function guardar() {
    localStorage.setItem("productosPRO", JSON.stringify(productos));
}

// Limpiar
function limpiar() {
    producto.value = "";
    precio.value = "";
    cantidad.value = "";
}