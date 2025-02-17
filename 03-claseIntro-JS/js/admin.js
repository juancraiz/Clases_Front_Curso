//hacemos un getter (traemos) del usuario del admin
let usuarioBD = localStorage.getItem('Admin'); //traigo el valor del usuario sin convertirlo en nada

//funcion para mostrar los datos del admin
let nombre = document.getElementById('usuario');//capturamos elemento de html

nombre.innerHTML = usuarioBD; //mostramos nombre de usuario del admin en html

//borrar nombre de usuario de admin del localStorage y recargar la pagina 
const borrarItemLocalStorage = () => {
    localStorage.removeItem('Admin');
    location.reload();
}
const borrarTodoLocalStorage = () => {
    localStorage.clear();
    location.reload();
}


/*------------Clase de Fetch----------------------------------*/

const URL = 'https://fakestoreapi.com/products';

//para leer por consola los datos de la Api
//me mostrara un array de productos q obtenemos de la API
fetch(URL)
    .then(res => res.json())
    .then(json => console.log(json))

/*---------------------------------------------------------*/
let contenedorTarjetas = document.getElementById('contenedorTarjetas');
contenedorTarjetas.style.display = 'flex';
contenedorTarjetas.style.flexWrap = 'wrap';
contenedorTarjetas.style.flexDirection = 'row';
contenedorTarjetas.style.justifyContent = 'center'; 


let carrito=[];

//mostramos los productos en unas tarjetas para q vea el cliente
fetch(URL)
    .then(response => response.json())
    .then(data => {  

        //guardo los datos de la api dentro de una variable array
        const misProductos =data;

        //reccorremos con un bucle los datos
        misProductos.forEach(producto => {
            
            //creamos una tarjeta para cada producto
            let card = document.createElement('div');
            card.classList.add("card"); 
            card.style.width="18rem"; //estilos aplicarlos en css y sacar esto de aqui
            card.style.height = "100%"; 
            card.style.display = "flex";
            card.style.flexDirection = "column";
            card.style.justifyContent = "space-between";
            card.style.alignItems = "center";

            //creamos la imagen de la card
            let imagen= document.createElement('img');
            imagen.classList.add('card-img-top');
            imagen.src = producto.image;
            imagen.alt = 'Productos para la compra';  
            imagen.style.width = '150px'; //estos estilos conviene hacerlo en css
            imagen.style.height = '150px';
            imagen.style.objectFit = 'contain'; 
            imagen.style.backgroundColor = 'white'; 
            
            //creamos ahora la categoria,el titulo ,el precio y despcripcion de la card
            let titulo = document.createElement('h5');
            titulo.classList.add("card-title");
            titulo.innerText = producto.title;      
            titulo.style.minHeight = "50px";
            
            let categoria = document.createElement('p');
            categoria.classList.add("card-text");
            categoria.innerText = "Categoría: " + producto.category;   
                
            let precio = document.createElement('p');
            precio.classList.add("card-text");
            precio.innerText = "Precio: $" + producto.price;   
            
            //agregamos todos los elementos a la tarjeta(card es contenedor padre de 
            //imagen titulo categoria, etc)
            card.appendChild(categoria);
            card.appendChild(titulo);
            card.appendChild(precio);
            card.appendChild(imagen);
            
            //creo elemento boton comprar ya no existe en mi HTML
            let botonComprar = document.createElement('button');
            botonComprar.classList.add('btn', 'btn-success');
            botonComprar.innerText = 'Comprar';
            botonComprar.addEventListener('click',producto => {
            
                carrito.push(producto);
                localStorage.setItem('Carrito',JSON.stringify(carrito));//a Carrito le paso lo de carrito pero convertido en JSON-string
            });
            card.appendChild(botonComprar);

            //agregar la card al div(contenedor de tarjetas)
            contenedorTarjetas.appendChild(card);
        });
    });
 