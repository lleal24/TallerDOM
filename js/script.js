var boton = document.getElementById("btn1");
var boton2 = document.getElementById("btn2");
var listaTarea = document.getElementById("lista");
var item;

var nombre;

/* function registrar() {
    nombre = document.getElementById("nombre").value; 
    var apellido = document.getElementById("apellido").value; 
    localStorage.setItem("lastname", nombre);
    alert("Registro exitoso: " + nombre);
    location.href="pages/perfil.html";    
}
function cargar() {
    document.getElementById("user").innerHTML = nombre;
} */

function agregarTarea() {
    let tarea = document.getElementById("tarea").value;
    let lista = document.createElement("li");
    lista.textContent = tarea;
    lista.addEventListener('click', remover);
    listaTarea.appendChild(lista);
   
    
}



/* boton.onclick = function () {
    registrar();
} */
boton2.onclick = function () {
    agregarTarea();
}
