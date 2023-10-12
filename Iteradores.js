//Muestrame los elementos del iterador.

let iterar = ["casa", "carro", "silla"];

for (let elemento of iterar) {
    console.log(elemento);
}

//Iterar un array de números y devolverme el valor * 2.

let array4 = [1,2,3,4,5,6];
let resultado1 = 0;

for (let valor of array4){
    resultado1 += valor;
}
    resultado1 *=2
console.log(resultado1);

// Mostrarme los índices del array que vas a iterar.

let objetos = ["cama", "silla", "puerta", "ventana", "mesa"];

for (let i = 0; i < objetos.length; i++ ){
    console.log(i);
}