//Variables
//E2
let a, b, c;
a = 5;
b = 10;
c = a + b;
console.log("El resultado de la suma de a y b es: " + c);
//E3
let nombreUsuario = prompt("Por favor, introduce tu nombre:");
console.log("¡Hola, " + nombreUsuario + "! Bienvenido/a.");

//Operadores lógicos y condicionales

//E1
let d, e, f;
d = 7;
e = 13;
if (d > e) {
  f = d;
} else {
  f = e;
}
console.log("El número mayor entre a y b es: " + f);
//E2
let numeroIngresado = prompt("Por favor, introduce un número:");
numeroIngresado = parseInt(numeroIngresado);
if (numeroIngresado % 2 === 0) {
  console.log("El número " + numeroIngresado + " es par.");
} else {
  console.log("El número " + numeroIngresado + " es impar.");
}
//Operadores de asignación y bucles
//E1
let contador = 10;
// Usar un bucle while para restarle 1 en cada iteración hasta que la variable sea igual a 0
while (contador >= 0) {
  console.log(contador);
  // Restarle 1 a la variable
  contador--;
}

//E2
let numeroIngresado2;
// Usar un bucle do...while para pedirle al usuario que ingrese un número mayor a 100
do {
  numeroIngresado2 = prompt("Por favor, ingresa un número mayor a 100:");
  // Convertir el número ingresado a un número entero
  numeroIngresado2 = parseInt(numeroIngresado2);
} while (numeroIngresado2 <= 100);
console.log("Ingresaste un numero mayor a 100 " + numeroIngresado2);

//Funciones de JavaScript
//E1
function esPar(numero) {
  // Comprobar si el número es par o impar
  if (numero % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
// Probamos la función con diferentes números
console.log("El numero 8 es par:"+ esPar(8)); // true
console.log("El numero 7 es par:"+ esPar(7)); // false

 

//E2
// Definir la función convertirCelsiusAFahrenheit que recibe un valor en grados Celsius como parámetro
function convertirCelsiusAFahrenheit(celsius) {
  // Convertir el valor de Celsius a Fahrenheit utilizando la fórmula F = C × 1.8 + 32
  let fahrenheit = celsius * 1.8 + 32;
  return fahrenheit;
}
// Probar la función con diferentes valores en grados Celsius
console.log("30°C son equivalentes a "+convertirCelsiusAFahrenheit(30)+"°F"); // 32

//Objetos en JavaScript
//E1
let persona = {
  nombre: "Ana",
  edad: 30,
  ciudad: "Madrid"
};
// Agregar un método al objeto persona que permita cambiar la ciudad
persona.cambiarCiudad = function(nuevaCiudad) {
  this.ciudad = nuevaCiudad;
};

// Usar el método para actualizar la ciudad de la persona
persona.cambiarCiudad("Barcelona");

// Mostrar las propiedades actualizadas en la consola
console.log(persona);

//E2
let libro = {
  titulo: "El Quijote",
  autor: "Gabriel García Márquez",
  año: 1967
};
// Agregar un método al objeto libro que determine si el libro es antiguo o reciente
libro.esAntiguo = function() {
  let añoActual = new Date().getFullYear();
  if (añoActual - this.año > 10) {
    return true;
  } else {
    return false;
  }
};
// Determinar si el libro es antiguo o reciente y mostrar un mensaje en la consola
if (libro.esAntiguo()) {
  console.log("El libro '" + libro.titulo + "' es antiguo.");
} else {
  console.log("El libro '" + libro.titulo + "' es reciente.");
}
