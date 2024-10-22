// Array para almacenar los productos del carrito
let carrito = [];

// Función para agregar un producto al carrito

function agregarAlCarrito(producto) {
    carrito.push(producto);
    mostrarCarrito();
}

// Función para mostrar los productos en el carrito

function mostrarCarrito() {
    const productosCarrito = document.getElementById("productosCarrito");
    const totalCarrito = document.getElementById("totalCarrito");
    productosCarrito.innerHTML = ""; // Limpiar contenido previo
    let total = 0;

    carrito.forEach((producto, index) => {

        // Crear un elemento para cada producto

        const productoDiv = document.createElement("div");
        productoDiv.textContent = `${producto.nombre} - $${producto.precio}`;
        
        // Botón para eliminar el producto del carrito

        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        botonEliminar.onclick = () => {
            eliminarDelCarrito(index);
        };

        productoDiv.appendChild(botonEliminar);
        productosCarrito.appendChild(productoDiv);

        total += producto.precio; // Sumar al total
    });

    totalCarrito.textContent = `$${total.toFixed(2)}`; // Mostrar total
}

// Función para eliminar un producto del carrito
function eliminarDelCarrito(index) {
    carrito.splice(index, 1); // Eliminar producto por índice
    mostrarCarrito(); // Actualizar carrito
}

// Función para vaciar el carrito
document.getElementById("vaciarCarrito").onclick = function() {
    carrito = []; // Reiniciar carrito
    mostrarCarrito(); // Actualizar carrito
};

// Ejemplo de cómo agregar productos al carrito (botones de "Comprar")
function comprarZapatilla(nombre, precio) {
    agregarAlCarrito({ nombre, precio });
}