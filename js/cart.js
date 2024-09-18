document.addEventListener("DOMContentLoaded", () => {
    const contenedor_tarjetas = document.getElementById("productos-container");
    const unidadesElement = document.getElementById("unidades");
    const precioElement = document.getElementById("precio");
   const  carritoVacioElement=document.getElementById("carrito-vacio");
   const  totalesCarrito=document.getElementById("totales");
const btn_reiniciar=document.getElementById("btn_reiniciar");


const reiniciarCarrito = () =>{
    localStorage.removeItem("productos");
    revisarMensajesVacio();
    actualizarTotales();
    crearTarjetaProductos();
    
    };


btn_reiniciar.addEventListener("click", reiniciarCarrito);





const revisarMensajesVacio=()=>{
    const productos = JSON.parse(localStorage.getItem("productos"));
    carritoVacioElement.classList.toggle("escondido", productos && productos.length>0);
    totalesCarrito.classList.toggle("escondido", !(productos  && productos.length>0));
};



const actualizarTotales =()=> {
const productos= JSON.parse(localStorage.getItem("productos"));
let unidades=0;
let precio=0;
if(productos && productos.length>0)  {
 
    productos.forEach(producto =>{
      unidades+=producto.cantidad;
      precio+=producto.precio*producto.cantidad;

    });
    unidadesElement.innerText=unidades;
    precioElement.innerText=precio;
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
          <p>Precio: S/. ${producto.precio}</p>
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
                      actualizarTotales();
                         
                     
                    });
            });
        }
        revisarMensajesVacio();
        actualizarTotales();
        actualizarNumeroCarrito();

    };
    revisarMensajesVacio();
    crearTarjetaProductos(productos);
  
    actualizarNumeroCarrito();
   
    actualizarTotales();

});