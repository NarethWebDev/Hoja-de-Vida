import readlineSync from "readline-sync";

function numAleatorioEntero(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Ahora, tanto el valor mínimo como el máximo están incluidos en el resultado.

let numero = [];
let numeros1 = [];
let numeros2 = [];
let numeros3 = [];

let numeros = [numeros1, numeros2, numeros3];

let numDigitado;

let numAleatorio;

do{
    numDigitado = readlineSync.questionInt("Digite un número (1 a 20): ");
}while (numDigitado < 1 || numDigitado > 1000000);

for(numero of numeros){
    for(let i = 0; i < numDigitado; i++){
        numAleatorio = numAleatorioEntero(1, 100);
        numero.push(numAleatorio);
    }
    
    console.log("Números generados: ", numero);
}

console.clear();
console.log("Primer conjunto de números:", numeros1);
numDigitado = readlineSync.question("Presione ENTER para continuar...");
console.clear();
console.log("Segundo conjunto de números:", numeros2);
numDigitado = readlineSync.question("Presione ENTER para continuar...");
console.clear();
console.log("Tercer conjunto de números:", numeros3);
numDigitado = readlineSync.question("Presione ENTER para continuar...");




// console.log("Números generados: ", numeros);

// let numMax = 0;
// let numMin = 101;
// let sumaNumeros = 0;

// let indMax = 0;
// let indMin = 101;

// for(let i = 0; i < numeros.length; i++){
//     sumaNumeros += numeros[i];
//     if(numeros[i] > numMax){ numMax = numeros[i]; indMax = i;}
//     if(numeros[i] < numMin){ numMin = numeros[i]; indMin = i;}
// }

// let promedio = sumaNumeros / numeros.length;

// console.log("Suma de los números: ", sumaNumeros);
// console.log("Promedio de los números: ", promedio.toFixed(2));

// console.log("Número máximo: ", numMax, " en la posición ", indMax );
// console.log("Número mínimo: ", numMin, " en la posición ", indMin );
