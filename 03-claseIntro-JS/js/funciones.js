//Funcion: es un algoritmo q tiene una responsabilidad especifica dentro del software
// y ejecuta metodos.

function guardarDatos(){
    let dni =41232123;
    let nombre="Juan";

console.log(`Tus datos : ${dni} , ${nombre} ya han sido guardados en la Base de datos`);
}

//llamo a la funcion
guardarDatos();

function calcular(a,b){
    let resultado =a + b;

    console.log(`Resultado: ${resultado}`);
}

calcular(5,6);

//ES5 (funcion nativa)  function ALGO(){}
function login(email,password){
let respuesta,userBD,passwordBD='';

    if (email==userBD && password==passwordBD){
        respuesta='Bienvenido a la app';
        return respuesta;
    }else{
        respuesta='Usuario/Contraseña invalida';
        return respuesta;
    } 
}
login('pepe@gmail.com','a1234');

//callback es un parametro de una funcion el cual es una funcion (en este caso la fcion q le 
// pasaremos es el login)
//token:un token sirve para validar que el usuario q intenta ingresar es quien dice ser que es.
function validacion(token,callback){

    console.log(`Él token es: ${token} y es valido para el acceso a la red`);

    email='pepe@gmail.com';
    password='a1234';

    callback(email,password);
    guardarDatos(); //la idea es q me guarde mail y password en la BD
};

let token= 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'

validacion(token,login);

//con export podemos exportar una funcion de un archivo en otro archivo para poder usar la misma
//export(login);

//ES6 => se llama arrow function (funcion flecha).
// Es una funcion guardada en una variable, en este caso a la variable calculoSaldo le asigno una
//funcion mediante () => {} q es la arrow function
const calculoSaldO =() => {}; //function name() {} -->funcion nativa es != a funcion flecha

const calculoSaldO_ =(saldo,compra) => {
    return saldo -compra //para retornar el valor por pantalla
}; 

//calcularSaldO(1000000,300);

//funcion anonima se llama asi xq no tiene nombre, y aparte si le asignamos a calcularSaldo, esa funcion se pasara a llamar calcularSaldo , osea toma el nombre de la variable q la contiene
const calculoSald0 =function(){}; 
let calculoSald0_ =function(){}; 
//otro ej de fcion anonima
let calcularSaldO =function(saldo,compra){
    return saldo - compra; 
}; 
//calcularSaldO(1000000,300);

/*===========================================================
Usando una funcion q sera llamada por el onclick del DOM en html*/
function saludar(nombre){
    alert(`Hola ${nombre}`);
}

/* Usando el DOM para traer algo del html a este archivo JS */
let botonSaludo =document.getElementById('saludo'); //capturo saludo

botonSaludo.style.background='red';//cambio el color a boton saludo;

let titulo =document.getElementById('titulo');//capturo titulo del html

function saludar2(nombre){
    alert(`Hola ${nombre}`);
    titulo.innerHTML=`Hola ${nombre}`;//Esto me sirve para modificar el titulo
    titulo.style.color= `green`;
}



