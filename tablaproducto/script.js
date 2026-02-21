// Obtener elementos
const nombreProducto = document.getElementById("nombreProducto");
const precioProducto = document.getElementById("precioProducto");
const cantidadProducto = document.getElementById("cantidadProducto");
const botonAgregar = document.getElementById("botonAgregar");
const tablaProductos = document.getElementById("tablaProductos");

// Cargar productos guardados
let productos = JSON.parse(localStorage.getItem("productos")) || [];

// Mostrar productos al cargar
mostrarProductos();

// Evento agregar
botonAgregar.addEventListener("click", () => {
    if (nombreProducto.value === "" || precioProducto.value === "" || cantidadProducto.value === "") {
        alert("Completa todos los campos");
        return;
    }

    const producto = {
        nombre: nombreProducto.value,
        precio: precioProducto.value,
        cantidad: cantidadProducto.value
    };

    productos.push(producto);
    guardarProductos();
    mostrarProductos();
    limpiarFormulario();
});

// Mostrar productos en la tabla
function mostrarProductos() {
    tablaProductos.innerHTML = "";

    productos.forEach((producto, indice) => {
        const fila = document.createElement("tr");

        fila.innerHTML = `
            <td contenteditable="true">${producto.nombre}</td>
            <td contenteditable="true">${producto.precio}</td>
            <td contenteditable="true">${producto.cantidad}</td>
            <td>
                <button class="botonEliminar" onclick="eliminarProducto(${indice})">
                    Eliminar
                </button>
            </td>
        `;

        // Guardar cambios al editar
        fila.querySelectorAll("td[contenteditable]").forEach((celda, posicion) => {
            celda.addEventListener("input", () => {
                if (posicion === 0) producto.nombre = celda.textContent;
                if (posicion === 1) producto.precio = celda.textContent;
                if (posicion === 2) producto.cantidad = celda.textContent;
                guardarProductos();
            });
        });

        tablaProductos.appendChild(fila);
    });
}

// Eliminar producto
function eliminarProducto(indice) {
    productos.splice(indice, 1);
    guardarProductos();
    mostrarProductos();
}

// Guardar en localStorage
function guardarProductos() {
    localStorage.setItem("productos", JSON.stringify(productos));
}

// Limpiar inputs
function limpiarFormulario() {
    nombreProducto.value = "";
    precioProducto.value = "";
    cantidadProducto.value = "";
}