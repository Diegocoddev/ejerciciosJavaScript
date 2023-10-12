// Identificar la longitud de la cadena de texto agregada

const texto = "¡Hola Mundo!";
const longitud = texto.length;

console.log(longitud);

// Invertir la cadena de texto Hello - olleH

function invertirCadenaTexto (cadena) {
    return cadena.split("").reverse().join("");
}

const texto1 = "Hello";
const textoInvertido = invertirCadenaTexto(texto1);

console.log(textoInvertido);

//Repetir el texto

const texto2 = "Hola ";
const repetirTexto = texto2.repeat(5);

console.log(repetirTexto);