document.addEventListener("DOMContentLoaded", () => {
  const contenedor_tarjetas = document.getElementById("productos-container");

  const crearTarjetaProductos = (productos) => {
    productos.forEach((producto) => {
      const nuevoProducto = document.createElement('div');
      nuevoProducto.classList.add("tarjeta-producto");
      nuevoProducto.innerHTML = `
        <img src="./img/productos/${producto.img}" alt="${producto.nombre}">
        <h2>${producto.nombre}</h2>
        <p>Precio: $${producto.precio}</p>
        <button>Agregar al carrito </button>
      `;
      contenedor_tarjetas.appendChild(nuevoProducto);
      nuevoProducto.getElementsByTagName("button")[0].addEventListener("click",()=>agregarAlCarrito(producto));
      
    });
    
  };

  crearTarjetaProductos(productos);
  
});