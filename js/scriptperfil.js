var boton2 = document.getElementById("btn2");
var listaTarea = document.getElementById("lista");
let p = document.getElementById("user");
let tareas = [];

var  usuarioTemp= localStorage.getItem('name');
p.innerHTML = usuarioTemp;




function agregarTarea() { 
    let tarea = document.getElementById("tarea").value;
    localStorage.setItem("task", tarea); //guardar tarea en localstorage
    tareas.push(tarea); //agregar tarea a un array
    let lista = document.createElement("li");
    lista.textContent = tarea;
    lista.addEventListener('click', elimiarTarea);
    listaTarea.appendChild(lista);
    
}
function elimiarTarea() {
    listaTarea.removeChild(listaTarea.lastChild);
    
}