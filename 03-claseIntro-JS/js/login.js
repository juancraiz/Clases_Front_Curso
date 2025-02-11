const login = () => {

    let user = document.getElementById('user').value;//ponemos .value para capturar el valor 
    let password = document.getElementById('password').value;//de ese usuario
    let formlogin= document.getElementById('formlogin'); 
    //alert('Bienvenido Admin');
    
    console.log(user);
    console.log(password);

    let usuarioBD="juanmartincruzrap@gmail.com";//en teoria este dato vendria de la BD del backend
    let passwBD="123";

    if(user=='' || password==''){ //q salte alerta si no llenaste form
        alert("Introduzca los datos solicitados");
        location.href="formulario.html"} 
    else if(user==usuarioBD && password==passwBD){
            localStorage.setItem('Admin',JSON.stringify(usuarioBD));//hacemos un setter en el localStorage del usuario
            location.href="admin.html"} //si la contraseña esta bien redirecciona a la pagina del adm
    else{
            location.href="error.html";
    }

    formlogin.reset();//llamamos para formlogin la funcion reset() para resear datos q cargue
    //(los borra) del formulario a esos datos cargados
}

/* 
formlogin.addEventListener('click',(evenT)=>{
    evenT.preventDefault(); //previene q s ejecute el evento antes del click

    console.log(evenT);
    console.log(evenT.target.user.value);
    console.log(evenT.target.password.value);
}) */

