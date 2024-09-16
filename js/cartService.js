const getNuevoProducto = (producto) => {
    const nuevoProducto = producto;
    nuevoProducto.cantidad = 1;
    return nuevoProducto;

}

const cuenta_carrito = document.getElementById("cuenta-carrito");
const actualizarNumeroCarrito = () => {
    const memoria = JSON.parse(localStorage.getItem("productos")) || [];
    const contador = memoria.reduce((suma, producto) => suma + producto.cantidad, 0);
   // console.log(cuenta_carrito);
    cuenta_carrito.innerText=contador;


console.log("probando");
};

const agregarAlCarrito = (producto) => {
    const memoria = JSON.parse(localStorage.getItem("productos")) || [];
    console.log(memoria);
    console.log("-");
    let  cuenta=0;
    if (!memoria) {
        const nuevoProducto = getNuevoProducto(producto);
        localStorage.setItem("productos", JSON.stringify([nuevoProducto]));
        cuenta=1;
    } else {
        const indiceProducto = memoria.findIndex(valor => valor.id === producto.id);
      //  console.log(indiceProducto);
        const nuevaMemoria = memoria;
        if (indiceProducto === -1) {
            nuevaMemoria.push(getNuevoProducto(producto));
           cuenta=1;
        } else {
            nuevaMemoria[indiceProducto].cantidad++;
            cuenta=nuevaMemoria[indiceProducto].cantidad;
           
        }
        localStorage.setItem("productos", JSON.stringify(nuevaMemoria));
        actualizarNumeroCarrito();
        return cuenta;

    }

};

const quitarAlCarrito = (producto) => {
console.log("funcion quitar carrito probando");
    const memoria = JSON.parse(localStorage.getItem("productos")) || [];
    let cantidad_final=0;
    console.log(memoria);
    const indiceProducto = memoria.findIndex(valor => valor.id === producto.id);
    let nuevaMemoria = memoria;

        if (memoria[indiceProducto].cantidad ===1) {
          memoria.splice(indiceProducto, 1);
          
        } else {
            memoria[indiceProducto].cantidad--;
            cantidad_final = nuevaMemoria[indiceProducto].cantidad;

        }
        localStorage.setItem("productos", JSON.stringify(memoria));
     actualizarNumeroCarrito();
         return cantidad_final;
        
         
    }
  
function reiniciarCarrito(){
    localStorage.removeItem("productos");
    console.log("eliminado");
    //actualizarNumeroCarrito();
  };

  actualizarNumeroCarrito();
