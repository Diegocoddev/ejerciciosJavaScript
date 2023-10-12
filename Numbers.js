//Hallar el valor mayor de dos números.

function valorMayor (a,b) {
    if (a > b ) {
        return a;
    } else {
        return b;
    }
}


console.log(valorMayor(10,5));


//Sumar, restar, multiplicar y dividir los números

let a = 2;
let b = 5;
let suma = a + b;
let resta = a - b;
let multiplicar = a * b;
let dividir = a / b;

console.log(suma);
console.log(resta);
console.log(multiplicar);
console.log(dividir);

// Raíz cuadrada

let c = 64;
let d = 36;

let raiz = c ** (1/2);
let raiz2 = Math.sqrt(d);

console.log(raiz);
console.log(raiz2);
