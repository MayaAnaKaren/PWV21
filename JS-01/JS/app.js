console.log("Hola a todos de nuevo");

// Comentario en línea

/* COMENTARIO
EN
BLOQUE */

/********** VARIABLES ***********/

var mes = "Abril";
console.log(mes);
console.log(typeof(mes));

var dia = 12;
console.log("dia", dia);

var esFestivo, var2, var3;
esFestivo = null;
console.log(esFestivo);

/*********** DOM **********/
console.dir(document);

document.title = "Nuevo nombre"

// Por ID
console.log(document.getElementById('titulo'));
var titulo = document.getElementById('titulo');
console.log(titulo);

titulo.textContent = "Nuevo titulo";
titulo.innerText = "Nuevo nuevo titulo";
titulo.innerHTML = '<p>JS</p>';

// Por tag
var items = document.getElementsByTagName('li');
console.log(items);
items[0].textContent ="Uno uno";

// Por Clase
var itemsC = document.getElementsByClassName('list');
console.log(itemsC);
itemsC[2].innerHTML ="<a href='#'>Tres</a>";

/********** FUNCIONES ***********/

function suma(a, b) {
    document.getElementById('resultado').innerText = a + b;
    // alert("Hiciste clic en suma");
}

/********** LOCAL STORAGE ***********/

var imprimir = function(dato) {
 document.getElementById('valor').innerText = dato;
}

var aumentar = function(){
    localStorage.contador++;
    imprimir(localStorage.contador);
}

var reiniciar = function() {
    localStorage.contador = 0;
    imprimir(localStorage.contador);
}

var eliminar = function(){
    localStorage.removeItem("contador");
    imprimir(localStorage.contador);
}

if(typeof(Storage) != 'undefined'){
    if(localStorage.contador){ // Existe
        // MOSTRARLO EN DIV CON ID VALOR
        imprimir(localStorage.contador);
    } else {
        localStorage.contador = 0 // Crearlo
    }
}

