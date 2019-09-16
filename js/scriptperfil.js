var boton2 = document.getElementById("btn2");
var listaTarea = document.getElementById("lista");
let p = document.getElementById("user");
let tareas = [];

var  usuarioTemp= localStorage.getItem('name');
p.innerHTML = usuarioTemp;




function agregarTarea() { 
    let tarea = document.getElementById("tarea").value; /* obtiene el valor del input */
    let lista = document.createElement("li"); /* crea elemento tipo li */
    lista.textContent = tarea;/*  el elelemto tipo li toma el valor de la tarea */
    lista.addEventListener('click', lista.remove); /* se agrega un evento, eliminar el elemento al click */
    listaTarea.appendChild(lista);   /* se agrega el hijo al padre */
}
