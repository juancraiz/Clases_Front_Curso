console.log('altaProductos.js');

//1.Obtenemos el tag al que daremos el evento (capturamos el evento)
let enviarDatos= document.getElementById('enviarDatos');

let misProductos=[];//array de productos

//2.Le asigno una escucha del evento q quiero q realice.
//Lo q haga el evento va a depender de la funcion q haya
enviarDatos.addEventListener('click',(e) => {
    
    e.preventDefault();   /*sirve para evitar cargar datos en blanco a la B.D,  y aparte tambien cuando recargamos la pagina internamente se ejecutan las fciones
    de js con lo cual si se envian datos en blanco me los evita mandarlo a la B.D*/

    //obtenemos los datos de html
    let nombreProducto= document.getElementById('nombreProducto').value;
    let precioProducto= document.getElementById('precioProducto').value;
    let stockProducto= document.getElementById('stockProducto').value;
    let descripcionProducto= document.getElementById('descripcionProducto').value;

    if(nombreProducto=='' || stockProducto=='' || precioProducto=='' || descripcionProducto==''){
        alert('Todos los campos son obligatorios');
        return;  //salteo la ejecucion de la funcion para evitar que se guarde datos en blanco
    }else{
        cargarDatos(nombreProducto,precioProducto,stockProducto,descripcionProducto);
    }

    //limpio el formulario
    borrarDatosForm();
});

const cargarDatos = (nombre,precio,stock,descripcion) => { 
    
    console.log(`El producto guardado en la Base de Datos es: ${nombreProducto} ${precioProducto} 
    ${stockProducto} ${descripcionProducto}`);

    //creando objeto producto
    let producto = {
        nombre: nombre,
        precio: precio,
        stock: stock,
        descripcion: descripcion
    }
    //muestro el objeto producto
    console.log(producto);
     //agrego el producto a mi array de productos
    misProductos.push(producto);

    //setear los datos del localStorage (memoria cache del navegador) para mantener la info del producto 
    localStorage.setItem('Productos', JSON.stringify(misProductos)); //a la variable Productos se le setea el array

    //muestro el array de productos
    console.log(misProductos);

    console.log(`La suma de todos los productos es: ${misProductos.length}`);
    
}
const borrarDatosForm = () => {
    let miFormulario = document.getElementById('miFormulario');//tomo formulario para luego limpiarlo
    miFormulario.reset();                  //poner a los formularios el id miFormulario
}

/*si yo quisiera usar esta funcion en otro archivo JS basta con hacer
export default borrarDatosFormulario; */