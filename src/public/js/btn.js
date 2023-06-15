const btnMenos = document.getElementById("menos");
const btnMas = document.getElementById("mas");
const cantidadInput = document.getElementById("cantidad");
const precioElement = document.getElementById("precio");
const totalElement = document.getElementById("total");
const tituloCarrito = document.getElementById("titulo-carrito");
const precioUnitario = 10500;
const costoEnvio = 800;


let cantidad = 1;

btnMenos.addEventListener("click", function () {
  if (cantidad > 1) {
    cantidad--;
  }
  cantidadInput.value = cantidad;
  actualizarPrecios(cantidad);
  actualizarTituloCarrito(cantidad);
});

btnMas.addEventListener("click", function () {
  cantidad++;
  cantidadInput.value = cantidad;
  actualizarPrecios(cantidad);
  actualizarTituloCarrito(cantidad);
});

cantidadInput.addEventListener("input", function () {
  let nuevaCantidad = parseInt(cantidadInput.value);
  if (nuevaCantidad < 1) {
    nuevaCantidad = 1;
    cantidadInput.value = nuevaCantidad;
  }
  cantidad = nuevaCantidad;
  actualizarPrecios(cantidad);
  actualizarTituloCarrito(cantidad);
});

function actualizarPrecios(cantidad) {
  const precioTotal = precioUnitario * cantidad;
  precioElement.textContent = `$${precioTotal.toLocaleString()}`;
  const total = precioTotal + costoEnvio;
  totalElement.textContent = `$${total.toLocaleString()}`;
}

function actualizarTituloCarrito(cantidad) {
  tituloCarrito.textContent = `CARRITO(${cantidad})`;
}
