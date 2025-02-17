//tomamos el boton para agregarle eventos
let boton = document.getElementById('mostrarDatos');

// traemos los datos de productos del localStorage
let misProductos= localStorage.getItem('Productos'); //usar variable Productos q defini en altaProducto para getear datos
//en la pagina altaProductos seteamos los datos del localStorage, pero en este geteamos los datos del localStorage

/*convierto los datos de tipo string-JSON en datos de tipo objeto-JSON para poder
recorrer el array (ya q si no hago esta conversion me toma el contenido como
una cadena de muchas posiciones) */
misProductos = JSON.parse(misProductos);


    
boton.addEventListener('click', (e) => {
    e.preventDefault();

if (!misProductos) {
    alert('No hay productos en el localStorage');}
else{

    let tabla = document.getElementById('miTabla');

    //creamos filas de productos
    for (let i = 0; i < misProductos.length; i++) {
    
        //creamos la fila (tr tabla row)
        let fila = document.createElement('tr');
        
        //creamos 4 celdas con los atributos de la fila 
        let celdaNombre = document.createElement('td'); 
        let celdaPrecio = document.createElement('td');
        let celdaStock = document.createElement('td');
        let celdaDescripcion = document.createElement('td');
        
        //asignamos los valores en las celdas 
        celdaNombre.textContent = misProductos[i].nombre;
        celdaPrecio.textContent = misProductos[i].precio;
        celdaStock.textContent = misProductos[i].stock;
        celdaDescripcion.textContent = misProductos[i].descripcion;
        
        console.log(`este ${celdaStock.textContent}`);
        //agregamos las celdas a la fila(contenedor padre)
        fila.appendChild(celdaNombre);
        fila.appendChild(celdaPrecio);
        fila.appendChild(celdaStock);
        fila.appendChild(celdaDescripcion);
        
        //agregamos la fila a la tabla(contenedor padre)
        tabla.appendChild(fila); 
    }
    //para eliminar toda la data del localStorage
    //localStorage.clear();
    //para eliminar un objeto de localStorage
    //localStorage.removeItem(tabla);

}
});
