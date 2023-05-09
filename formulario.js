var formulario = document.querySelector(".formulario"); // es una clase se cambia # por . y el nombre correcto y el ; al final 
var btnEnviar= document.getElementById("btnEnviar"); // se manda llamar al botón de enviar

formulario.onsubmit = function (event) {
  event.preventDefault(); // se modifcó  por event y se agregó el preventDefault

  btnEnviar.addEventListener("click", function (event){ //se agregó addEventListener
    event.preventDefault();
  
  var n = formulario.elements[0];
  var e = formulario.elements[1];
  var na = formulario.elements[2];

  var nombre = n.value;
  var edad = e.value;

  var i = na.selectedIndex;
  var nacionalidad = na.options[i].value;
  console.log(nombre, edad);
  console.log(nacionalidad);

  if (nombre.length === 0) {
    n.classList.add("error")
  }

  if (edad < 18 || edad > 120) {
    e.classList.add("error")
  }

  if (nombre.length > 0 && (edad > 18 && edad < 120)) {
    agregarInvitado(nombre, edad, nacionalidad);
    e.classList=""; // limpiar error de información incorrecta 
    n.classList=""; // limpiar error de información incorrecta 
    n.value=""; // limpiar input cuando se añade el amigo
    e.value=""; // limpiar input cuando se añade el amigo
  }
})}; // se agregaron todos los puntos y comas de la línea 7 a la 31

// var botonBorrar = document.createElement("button");
// botonBorrar.textContent = "Eliminar invitado";
// botonBorrar.id = "boton-borrar";
// var corteLinea = document.createElement("br");
// document.body.appendChild(corteLinea);
// document.body.appendChild(botonBorrar);
// Botón de eliminar duplicado
// se agregaron punto y coma de la línea 33 a la 38

function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina"
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana"
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana"
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana"
  } 

  var lista = document.getElementById("lista-de-invitados");

  var elementoLista = document.createElement("div");
  elementoLista.classList.add("elemento-lista");// cambio de added a add
  lista.appendChild(elementoLista);

  // var spanNombre = document.createElement("span");
  // var inputNombre = document.createElement("input");
  // var espacio = document.createElement("br");
  // spanNombre.textContent = "Nombre: ";
  // inputNombre.value = nombre;
  // elementoLista.appendChild(spanNombre);
  // elementoLista.appendChild(inputNombre);
  // elementoLista.appendChild(espacio);
  // Código duplicado

  function crearElemento(descripcion, valor) {
    var spanNombre = document.createElement("span");
    var inputNombre = document.createElement("input");
    var espacio = document.createElement("br");
    spanNombre.textContent = descripcion + ": ";
    inputNombre.value = valor;
    elementoLista.appendChild(spanNombre);
    elementoLista.appendChild(inputNombre);
    elementoLista.appendChild(espacio);
  }

  crearElemento("Nombre", nombre);
  crearElemento("Edad", edad);
  crearElemento("Nacionalidad", nacionalidad);


  var botonBorrar = document.createElement("button");
  botonBorrar.textContent = "Eliminar invitado";
  botonBorrar.id = "boton-borrar";
  var corteLinea = document.createElement("br");
  elementoLista.appendChild(corteLinea);
  elementoLista.appendChild(botonBorrar);


  botonBorrar.onclick = function () {
    // this.parentNode.style.display = 'none';
    botonBorrar.parentNode.remove()
  };
}// se sgrega ; de linea 55 a la 97