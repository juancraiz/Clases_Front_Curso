//hacemos un getter (traemos) del usuario del admin
let usuarioBD = localStorage.getItem('Admin'); //traigo el valor del usuario sin convertirlo en nada

//funcion para mostrar los datos del admin
let nombre = document.getElementById('usuario');//capturamos elemento de html

nombre.innerHTML = usuarioBD; //mostramos nombre de usuario del admin en html