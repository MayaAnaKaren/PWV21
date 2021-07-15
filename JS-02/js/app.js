/********ECMAScript 6(ES6)***********/

/********** VARIABLES ************/

// var: variables - son mutables, ya no se recomienta utilizar.
// let: variables mutables -bloque
// const: constantes, valor no se puede modificar -bloque

console.log(uno);
var uno = "valor";
console.log(uno);


//bloque
if(true) {
    var x = "x";
}
console.log(x);

if(true) {
    let y = "y";
}
// console.log(y);

var var1 = "1"
var var1 = "3";

let let1 = "1";
// let let1 = "3";

let let2 = 1;
if(true) {
    let let2 = 2;
    console.log(let2);
}
console.log(let2);

var var2 = 3;
if(true) {
    var var2 = 4;
    console.log(var2);
}
console.log(var2);

const const1 = "1";
console.log(const1);
// const1 = "2";

/********** VALORES VERDADEROS Y FALSOS ************/

// valores falsos: undefined, null, 0, ''
// valores verdaderos: Los que no son falsos

let mes;

if(mes){
    document.getElementById('texto').innerText = "Vedadero";
} else {
    document.getElementById('texto').innerText = "Falso";
}

/********** OPERADORES DE IGUALDAD ************/

// == (doble igual) - Devuelve verdadero si ambos operadores son iguales

// === (triple) - Devuelve verdadero si ambos operadores son iguales
    // y tienen el mismo tipo de dato

mes = 7;

mes === "7" ? console.log("Verdadero") : console.log("Falso");

/********** TEMPLATE STRINGS ************/
let nombre = "Juan";
let apellido = "Perez";
const fnacimiento = "1980";

function calcularEdad(nac){
    return 2021-nac;
}

// Con concatenación
 console.log(nombre + " " + apellido + ", su edad es: " + calcularEdad(fnacimiento));

 // Template string
 console.log(`${nombre} ${apellido}, su edad es: ${calcularEdad(fnacimiento)}`);


/********** FUNCIONES FLECHA ************/

const years = [2000, 2005, 2010, 2015, 2020];

// Map: crea un arreglo con los resultados de la operación
// que se realiza a cada uno de los elementos.
let edad = years.map(function(el){
    return 2021 - el;
})
console.log(edad);

let edad2 = years.map(el => 2021 - el);
console.log(edad2);

let edad3 = years.map((x, index) => `Edad ${index + 1}: ${2021-x}`);
console.log(edad3);

let edad4 = years.map((x, index) => {
    const edad = 2021 - x;
    let con = `Edad ${index + 1}: ${edad}`;
    return con;
});
console.log(edad4);

let cuadrado = function(num) {
    return num * num;
}
console.log(cuadrado(2));

let cuadrado1 = (num) => {
    return num * num;
} 

console.log(cuadrado1(2));

let cuadrado2 = num => num * num;

console.log(cuadrado2(2));

let frutas = [
    {
        nombre: "Fresa",
        cantidad: 10
    },
    {
        nombre: "Naranja",
        cantidad: 3
    },
    {
        nombre: "Uva",
        cantidad: 6
    },
    {
        nombre: "Frambuesa",
        cantidad: 4
    }
];

console.log(frutas);
let menor5 = frutas.filter(fruta => fruta.cantidad < 5 && fruta.nombre.startsWith("F"));
console.log(menor5);

let sum = 0;
for(let fruta of frutas){
    sum = sum + fruta.cantidad;
}
console.log(sum);

let inv = frutas.reduce((suma, fruta) => suma + fruta.cantidad, 0);
console.log(inv);

/********** OPERADOR DE PROPAGACIÓN ************/

let arrNum = [1, 2, 3, 4];
console.log(...arrNum)