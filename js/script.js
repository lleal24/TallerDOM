var boton = document.getElementById("btn1");

function registrar() {
    var nombre = document.getElementById("nombre").value; 
    var apellido = document.getElementById("apellido").value; 
    alert("Registro exitoso: " + nombre);
    location = "www.google.com";
    
}
boton.onclick = function () {
    registrar();
}