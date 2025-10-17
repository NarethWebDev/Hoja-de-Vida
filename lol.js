import colors from 'colors';
import readlineSync from 'readline-sync';

// Array de colores disponibles en la librería colors
const colorList = ['red', 'green', 'yellow', 'blue', 'magenta', 'cyan', 'white', 'gray', 'brightRed', 'brightGreen'];

// Generamos las tablas de multiplicar del 1 al 10
for (let i = 1; i <= 10; i++) {
  console.log(`\nTabla del ${i}`[colorList[(i - 1) % colorList.length]]); // Título con color
  for (let j = 1; j <= 10; j++) {
    const resultado = i * j;
    console.log(`${i} x ${j} = ${resultado}`[colorList[(i - 1) % colorList.length]]);
  }
}
