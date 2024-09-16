document.addEventListener("DOMContentLoaded", () => {
    const contenedor_tarjetas = document.getElementById("productos-container");
const actualizarTotales =()=> {
const productos= JSON.parse(localStorage.getItem("productos"));
let unidades=0;
let precio=0;
if(productos && productos.length>0)  {
 
    productos.forEach(producto =>{
      unidades+=producto.unidades
      precio+=producto.precio*producto.unidades

    });
}


}



    const crearTarjetaProductos = () => {
        contenedor_tarjetas.innerHTML = "";
        const productos = JSON.parse(localStorage.getItem("productos"));
        console.log("productos");
        if (productos && productos.length > 0) {
            productos.forEach((producto) => {
                const nuevoProducto = document.createElement('div');
                nuevoProducto.classList.add("tarjeta-producto");
                nuevoProducto.innerHTML = `
          <img src="./img/productos/${producto.img}" alt="${producto.nombre}">
          <h2>${producto.nombre}</h2>
          <p>Precio: $${producto.precio}</p>
          <div>
          <button>-</button>
          <span class="cantidad">${producto.cantidad} </span>
           <button>+</button>
              </div>
        `;
                contenedor_tarjetas.appendChild(nuevoProducto);
                nuevoProducto.getElementsByTagName("button")[1]
                    .addEventListener("click", (e) => {
                const cuenta_element=e.target.parentElement.getElementsByTagName("span")[0];
              cuenta_element.innerText=agregarAlCarrito(producto);
              actualizarTotales();

                    });
                nuevoProducto.
                    getElementsByTagName("button")[0]
                    .addEventListener("click", (e) => {
                        const cuenta_element=e.target.parentElement.getElementsByTagName("span")[0];
                      quitarAlCarrito(producto);
                      crearTarjetaProductos(productos);
                      actualizarTotales
                         
                     
                    });
            });
        }
    };

    crearTarjetaProductos(productos);
    actualizarNumeroCarrito();
    actualizarTotales();
});