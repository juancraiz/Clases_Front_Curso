//Variables (declaracion)
var nombre='Juan';
let apellido='Cruz';
const dni=41334435;
let F=false;

console.log('Mi nombre es '+ nombre +' y mi dni es '+ dni);
console.log(`Mi nombre es ${nombre} y mi dni es ${dni}`);//usar aqui comillas de acento
                                                        //alt+96

//Operadores matematicos
// + - * / %(mod-resto) **(potencia)

//Operadores relaciones
// == != < > <= >= ===(equival)

//Operadores logicos
// ||(or) &&(and) !(not)

let a=500; //declaro las variables
let b=600;
let resul = a + b;

console.log(resul);

resul = a - b; 
console.log(resul);

resul = a * b;
console.log(resul);

//Contadores
a++; //es un INC(a) xq suma de a 1 --> a + 1
console.log(a);

a--; //es un Dec(a) xq resta de a 1 
console.log(a);

a+2; //contador q suma de a 2
console.log(a);

//Acumulador (ideal para carrito de compras)
let acumulador=0;

acumulador +=500; //le sumo 500 a acum
console.log(acumulador);

//trabajando con operadores relacionales
resul = a == b;//esto verifica si el n° a es igual al n° b y me da un valor booleano 
console.log(resul);

resul = a > b;
console.log(resul);

//Condicionales
let edad=18;
if (edad>=18){
    console.log('El cliente puede comprar bebidas alcoholicas');
}else{
    console.log('El cliente no puede comprar bebidas alcoholicas por ser menor');
}

let saldo=10000;
let compra=500;
let clienteDni=41232124;
let dniPersona=41232124;

 if (saldo>=compra && clienteDni==dniPersona){
    console.log('La compra ha sido realizada con exito');
}else{
    console.log('La compra no se puede realizar por falta de saldo o dni invalido');
} 

let userBD='juan98';
let passwordBD=123;
let userIN='juan9';
let passwordIN=123;

if (userIN==userBD && passwordIN==passwordBD){
    console.log('Bienvenido a la app');
}else{
    console.log('Usuario/Contraseña invalida');
} 

//Ejemplo de variables q toman valores que ingresam los usuarios
/* Usando prompt: es una ventana o mensaje q me permite ingresar un valor con boton acep/cancel.
Es una funcion input igual al readln() 
estas funciones prompt y la alerta no se podran ejecutar con nodemon index.js por consola(da error),
ya q necesitamos del entorno del navegador para q se pueda ejecutar  */
nombre=prompt('Porfavor,intorduzca su nombre: ');//el prompt me sirve para poder ingresar un valor

alert(`Hola ${nombre}, Bienvenido a mi pagina`);

//Formulario apra login
