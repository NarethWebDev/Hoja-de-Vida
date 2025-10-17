
import colors from 'colors';
import readlineSync from 'readline-sync';

    //Función que muestra la plantilla del menú
    function mostrarPlantilla (titulo, opciones, tamano=50, espacio=16) {
        const emptyLine = ' '.repeat(tamano); //Este espacio en blanco se repetirá 50 veces
        console.log(emptyLine.bgMagenta); //Línea superior del recuadro

        console.log(
            "  ".bgMagenta +
            " ".repeat(Math.floor((tamano - 4 - titulo.length) / 2)) + //del total del tamaño se quita 4, luego la longitud del titulo y la otra mitad y luego se divide en 2
            /*Math.floor sirve para tomar la parte entera del valor resultante*/
            titulo +
            " ".repeat(tamano - 4 - titulo.length - Math.floor((tamano - 4 - titulo.length) / 2)) + //Se resta el valor que ya se imprimió a la izquierda
            "  ".bgMagenta
        );

        console.log(emptyLine.bgMagenta); //Línea superior del recuadro

            opciones.forEach((opcion, index) => {
                const optionSTring = `${index + 1}.  ${opcion}`;
                console.log(
                    "  ".bgMagenta +
                    " ".repeat(espacio) +
                    optionSTring +
                    " ".repeat(tamano - espacio - 4 - optionSTring.length) +
                    "  ".bgMagenta
                );
            });
            // Agregar la opción de cerrar app como la última opción (0)
            const cerrarString = (`0.  Cerrar APP`);
            console.log(
                "  ".bgMagenta +
                " ".repeat(espacio) +
                cerrarString +
                " ".repeat(tamano - espacio - 4 - cerrarString.length) +
                "  ".bgMagenta
            );
    }


    console.clear();

do {
    console.clear();
    //Lista de opciones que se desplegan en el menú
    let opcion;
    do {
        mostrarPlantilla(" Tiendas Centro de Biotecnología", [
            "Hola Mundo",
            "Presentación",
            "Operaciones",
            "Tablas de multiplicar",
            "Arreglos"
        ]);
            const emptyLine = ' '.repeat(50);
            console.log(emptyLine.bgMagenta); //Línea inferior del recuadro
        opcion = parseInt(readlineSync.question('Seleccione una opcion: '.yellow));
        console.clear();
    } while (opcion < 0 || opcion > 5 || isNaN(opcion));
    
        switch (opcion) {

            case 0:
                console.log ("                                                    ".bgWhite);
                console.log ("                                                    ".bgWhite);
                console.log("                  ".bgWhite+"              ".bgBlack+"                    ".bgWhite);
                console.log("              ".bgWhite+"    ".bgBlack+"              ".bgYellow+"    ".bgBlack+"                ".bgWhite);
                console.log("")




                readlineSync.question("Presione enter para volver al menu")
                break;

            case 5:
            
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
            let cantidadTotal= 0; 
            let sumaTotal= 0;
            
            do{
                numDigitado = readlineSync.questionInt("Digite un número (1 a 20): ");
            }while (numDigitado < 1 || numDigitado > 20);
            
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
            numDigitado = readlineSync.question("Presione ENTER para dar el promedio...");
            
                for (let numeros of [numeros1, numeros2, numeros3]) {
                    for (let num of numeros) {
                        sumaTotal += num;
                        cantidadTotal++;
                    }
                }
                let promedio = sumaTotal / cantidadTotal;
                console.log("Suma de los números de las 3 listas: ", sumaTotal);
                console.log("Promedio de las 3 listas: ", promedio.toFixed(2));
                readlineSync.question("Presione ENTER para volver al menú...");
            break;
            

            case 4:
                // Lógica para mostrar tablas de multiplicar
                let continuar = 0;
                let dato3 = 0;
                let limite = 0;
                let inicial = 0;
                console.log("                                                                                   ".bgMagenta);
                console.log("                                                                                   ".bgMagenta);
                console.log("   ".bgMagenta +"                                                                            ".rainbow,"   ".bgMagenta);
                // INICIO DEL PROGRAMA
                console.log("   ".bgMagenta +"                        ".rainbow +colors.bgGreen("========================="), "                           " +"   ".bgMagenta);
                console.log("   ".bgMagenta +"                        ".rainbow +colors.bgGreen("   INICIO DEL PROGRAMA   "), "                           " +"   ".bgMagenta);
                console.log("   ".bgMagenta +"                        ".rainbow +colors.bgGreen("========================="), "                           " +"   ".bgMagenta);
                console.log("   ".bgMagenta +"                                                                            ".rainbow, "" +"   ".bgMagenta);
                console.log("                                                                                   ".bgMagenta);
                console.log("                                                                                   ".bgMagenta);
                console.log("                                                                            ".rainbow);
                console.log("                             ".rainbow +colors.bgYellow("==========================="));
                console.log("                             ".rainbow +colors.bgYellow("   TABLAS DE MULTIPLICAR   "));
                console.log("                             ".rainbow +colors.bgYellow("==========================="));
                console.log("                                                                            ".rainbow);
                // Se piden las tablas inciales y finales
                dato3 = Number(readlineSync.question(" Digite el numero de la tabla de multiplicar inicial: "));
                limite = Number(readlineSync.question(" Digite el numero de la tabla de multiplicar final: "));
                inicial = dato3; 
                console.log("                                                                            ".rainbow);
                do {
                    if (dato3 > limite) {
                        console.log("El numero de la tabla inicial no puede ser mayor que el numero de la tabla final. Por favor, inténtalo de nuevo.".red);
                    }
                } while (dato3 > limite);
                do {
                    let dato2 = 1;
                    if (limite + 1 >= dato3) {
                        console.log("                                                                                   ".bgMagenta);
                        console.log("   ".bgMagenta +"                                                                            ".rainbow, "" +"   ".bgMagenta);
                        console.log("   ".bgMagenta +"                                 ".rainbow +`Tabla del ${dato3}`+"                                 ".rainbow +"   ".bgMagenta)
                        console.log("   ".bgMagenta +"                                                                            ".rainbow, "" +"   ".bgMagenta);
                        const colores = [
                            'red', 
                            'green', 
                            'yellow', 
                            'blue', 
                            'magenta', 
                            'cyan', 
                            'white', 
                            'gray', 
                            'rainbow', 
                            'america'
                        ];
                        while (dato2 <= 10) {
                            const color = colores[(dato3 - 1) % colores.length];
                            console.log(
                                "   ".bgMagenta +
                                "                                  ".rainbow +
                                colors[color](`${dato3} x ${dato2} = ${dato3 * dato2}`) +
                                "                                  ".rainbow +
                                "   ".bgMagenta
                            );
                            dato2++;
                        }
                        console.log("   ".bgMagenta +"                                                                            ".rainbow, "" +"   ".bgMagenta);
                        console.log("                                                                                   ".bgMagenta);
                        console.log("                                                                                   ".bgMagenta);
                    }
                    dato3++;
                    if (dato3 <= limite) {
                        console.log("                                                                            ".rainbow);
                        continuar = parseInt(readlineSync.question("Digite Enter para ver la siguiente tabla o 0 para terminar: "));
                        console.clear();
                            console.log("                                                                            ".rainbow);
                            console.log("                             ".rainbow +colors.bgYellow("==========================="));
                            console.log("                             ".rainbow +colors.bgYellow("   TABLAS DE MULTIPLICAR   "));
                            console.log("                             ".rainbow +colors.bgYellow("==========================="));
                            console.log("                                                                            ".rainbow);
                            console.log("                          ".rainbow +colors.green("=================================="));
                            console.log("                          ".rainbow +colors.red(" Tablas de multiplicar del "+inicial+" al "+limite));
                            console.log("                          ".rainbow +colors.green("=================================="));
                            console.log("                                                                            ".rainbow);
                    } else {
                        continuar = 0;
                    }
                } while (continuar !== 0 && dato3 <= limite)
                console.log("                                                                             ".rainbow);
                console.log("                                                                                   ".bgMagenta);
                console.log("                                                                                   ".bgMagenta);
                console.log("   ".bgMagenta +"                                                                            ".rainbow,"   ".bgMagenta);
                // PROGRAMA FINALIZADO
                console.log("   ".bgMagenta +"                        ".rainbow +colors.bgGreen("========================="), "                           " +"   ".bgMagenta);
                console.log("   ".bgMagenta +"                        ".rainbow +colors.bgGreen("   PROGRAMA FINALIZADO   "), "                           " +"   ".bgMagenta);
                console.log("   ".bgMagenta +"                        ".rainbow +colors.bgGreen("========================="), "                           " +"   ".bgMagenta);
                console.log("   ".bgMagenta +"                                                                            ".rainbow, "" +"   ".bgMagenta);
                console.log("                                                                                   ".bgMagenta);

                readlineSync.question('\nPresione Enter para volver al menú...');
                break;
            
            case 1:
                console.clear();
                console.log("                                                                                                  ".bgBlue);
                console.log("                                  ".bgBlue + "      ".bgGreen +"                              ".bgBlue + "  ".bgGreen+ "                          ".bgBlue);
                console.log("                      ".bgBlue + "      ".bgGreen + "  ".bgBlue + "            ".bgGreen + "                              ".bgBlue + "    ".bgGreen + "                      ".bgBlue);
                console.log("                      ".bgBlue + "  ".bgGreen + "    ".bgBlue+ "            ".bgGreen + "                          ".bgBlue + "              ".bgGreen + "                  ".bgBlue);
                console.log("              ".bgBlue+ "      ".bgGreen + "    ".bgBlue+ "    ".bgGreen+"    ".bgBlue+"      ".bgGreen+"              ".bgBlue + "    ".bgGreen+"        ".bgBlue+"                          ".bgGreen+"        ".bgBlue);
                console.log("    ".bgBlue+"                    ".bgGreen+ "  ".bgBlue+"    ".bgGreen+"    ".bgBlue+"    ".bgGreen+"            ".bgBlue+ "        ".bgGreen+"    ".bgBlue+"                                ".bgGreen+"    ".bgBlue);
                console.log("    ".bgBlue+"                    ".bgGreen+"          ".bgBlue+"  ".bgGreen+"              ".bgBlue+"    ".bgGreen+"  ".bgBlue+"                                        ".bgGreen+"  ".bgBlue);
                console.log("  ".bgBlue+"  ".bgGreen+"      ".bgBlue+"            ".bgGreen+"    ".bgBlue+"    ".bgGreen+"                ".bgBlue+"  ".bgGreen+"      ".bgBlue+"                                  ".bgGreen+"  ".bgBlue+"  ".bgGreen+"      ".bgBlue);
                console.log("          ".bgBlue+"              ".bgGreen+"  ".bgBlue+"      ".bgGreen+"                ".bgBlue+"                                      ".bgGreen+"    ".bgBlue+"  ".bgGreen+"      ".bgBlue);
                console.log("            ".bgBlue+ "                  ".bgGreen+"              ".bgBlue+"                                        ".bgGreen+"    ".bgBlue+"  ".bgGreen+"        ".bgBlue);
                console.log("            ".bgBlue+"                ".bgGreen+"                ".bgBlue+"    ".bgGreen+"  ".bgBlue+"  ".bgGreen+"  ".bgBlue+"  ".bgGreen+"    ".bgBlue+"                      ".bgGreen+"                ".bgBlue);
                console.log("              ".bgBlue+"            ".bgGreen+"                          ".bgBlue+"  ".bgGreen+"  ".bgBlue+"                        ".bgGreen+"    ".bgBlue+"  ".bgGreen+"            ".bgBlue);
                console.log("                ".bgBlue+"    ".bgGreen+"    ".bgBlue+"  ".bgGreen+"                  ".bgBlue+"      ".bgGreen+"      ".bgBlue+"    ".bgGreen+"  ".bgBlue+"                  ".bgGreen+"  ".bgBlue+"  ".bgGreen+"              ".bgBlue);
                console.log("                  ".bgBlue+"    ".bgGreen+"                    ".bgBlue+"              ".bgGreen+"  ".bgBlue+"    ".bgGreen+"    ".bgBlue+"            ".bgGreen+"                    ".bgBlue);
                console.log("                    ".bgBlue+"    ".bgGreen+"                  ".bgBlue+"              ".bgGreen+"          ".bgBlue+"    ".bgGreen+"    ".bgBlue+"    ".bgGreen+"  ".bgBlue+"  ".bgGreen+"                ".bgBlue);
                console.log("                        ".bgBlue+"      ".bgGreen+"            ".bgBlue+"                  ".bgGreen+"        ".bgBlue+"  ".bgGreen+"    ".bgBlue+"  ".bgGreen+"                      ".bgBlue);
                console.log("                      ".bgBlue+"          ".bgGreen+"            ".bgBlue+"              ".bgGreen+"                  ".bgBlue+"    ".bgGreen+"                  ".bgBlue);
                console.log("                      ".bgBlue+"              ".bgGreen+"            ".bgBlue+"          ".bgGreen+"                                        ".bgBlue);
                console.log("                        ".bgBlue+"          ".bgGreen+"                ".bgBlue+"        ".bgGreen+"                      ".bgBlue+"  ".bgGreen+"  ".bgBlue+"  ".bgGreen+"            ".bgBlue);
                console.log("                          ".bgBlue+"        ".bgGreen+"                ".bgBlue+"      ".bgGreen+"                      ".bgBlue+"        ".bgGreen+"            ".bgBlue);
                console.log("                          ".bgBlue+"      ".bgGreen+"                  ".bgBlue+"      ".bgGreen+"                    ".bgBlue+"            ".bgGreen+"          ".bgBlue);
                console.log("                          ".bgBlue+"    ".bgGreen+"                      ".bgBlue+"  ".bgGreen+"                      ".bgBlue+"            ".bgGreen+"          ".bgBlue);
                console.log("                        ".bgBlue+"    ".bgGreen+"                                                    ".bgBlue+"    ".bgGreen+"              ".bgBlue);
                console.log("                        ".bgBlue+"  ".bgGreen+"                                                                        ".bgBlue);
                console.log("                                                                                                  ".bgBlue);
                console.log("               ".bgBlue+" ".bgWhite+"  ".bgBlue+" ".bgWhite+"  ".bgBlue+"    ".bgWhite+"  ".bgBlue+"  ".bgWhite+"    ".bgBlue+"    ".bgWhite+"        ".bgBlue+"  ".bgWhite+"   ".bgBlue+"  ".bgWhite+"  ".bgBlue+" ".bgWhite+"   ".bgBlue+" ".bgWhite+"  ".bgBlue+"  ".bgWhite+"   ".bgBlue+" ".bgWhite+"  ".bgBlue+"    ".bgWhite+"   ".bgBlue+"    ".bgWhite+"                  ".bgBlue);
                console.log("               ".bgBlue+" ".bgWhite+"  ".bgBlue+" ".bgWhite+"  ".bgBlue+" ".bgWhite+"  ".bgBlue+" ".bgWhite+"  ".bgBlue+"  ".bgWhite+"    ".bgBlue+" ".bgWhite+"  ".bgBlue+" ".bgWhite+"        ".bgBlue+" ".bgWhite+" ".bgBlue+" ".bgWhite+" ".bgBlue+" ".bgWhite+" ".bgBlue+" ".bgWhite+"  ".bgBlue+" ".bgWhite+"   ".bgBlue+" ".bgWhite+"  ".bgBlue+" ".bgWhite+" ".bgBlue+" ".bgWhite+"  ".bgBlue+" ".bgWhite+"  ".bgBlue+" ".bgWhite+"   ".bgBlue+" ".bgWhite+"  ".bgBlue+" ".bgWhite+"  ".bgBlue+" ".bgWhite+"                  ".bgBlue);
                console.log("               ".bgBlue+" ".bgWhite+"   ".bgWhite+"  ".bgBlue+" ".bgWhite+"  ".bgBlue+" ".bgWhite+"  ".bgBlue+"  ".bgWhite+"    ".bgBlue+"    ".bgWhite+"        ".bgBlue+" ".bgWhite+"  ".bgBlue+" ".bgWhite+"  ".bgBlue+" ".bgWhite+"  ".bgBlue+" ".bgWhite+"   ".bgBlue+" ".bgWhite+"  ".bgBlue+" ".bgWhite+"  ".bgBlue+" ".bgWhite+" ".bgBlue+" ".bgWhite+"  ".bgBlue+" ".bgWhite+"   ".bgBlue+" ".bgWhite+"  ".bgBlue+" ".bgWhite+"  ".bgBlue+" ".bgWhite+"                  ".bgBlue);
                console.log("               ".bgBlue+" ".bgWhite+"  ".bgBlue+" ".bgWhite+"  ".bgBlue+"".bgWhite+"    ".bgWhite+"  ".bgBlue+"    ".bgWhite+"  ".bgBlue+" ".bgWhite+"  ".bgBlue+" ".bgWhite+"        ".bgBlue+" ".bgWhite+"     ".bgBlue+" ".bgWhite+"  ".bgBlue+"     ".bgWhite+"  ".bgBlue+" ".bgWhite+"   ".bgBlue+"  ".bgWhite+"  ".bgBlue+"    ".bgWhite+"   ".bgBlue+"    ".bgWhite+"                  ".bgBlue);
                console.log("                                                                                                  ".bgBlue);
                readlineSync.question('\nPresione Enter para volver al menu...');
                break;
            case 2:
                console.clear();
                let ficha= 0;
                let documento= 0;
                let nombre= "";
                let apellido= "";
                let genero= "";
                let direccion= "";
                let telefono= 0;
                let edad= 0;
            
                do {
                    ficha = parseInt(readlineSync.question(" Digite su numero de ficha: ".yellow));
                    documento = parseInt(readlineSync.question(" Digite su documento de identidad: ".yellow));
                    nombre = readlineSync.question(" Digite sus nombres completos: ".yellow);
                    apellido = readlineSync.question(" Digite sus apellidos completos: ".yellow);
                    genero = readlineSync.question(" Digite cuál es su género con el que usted nació, F(Femenino) o M(Masculino) : ".yellow);
                    direccion = readlineSync.question(" Digite su dirección de residencia: ".yellow);
                    telefono = parseInt(readlineSync.question(" Digite su número telefónico: ".yellow));
                    edad = parseInt(readlineSync.question(" Digite su edad: ".yellow));
                    console.log("                                                                            ".rainbow);
                } while (isNaN(ficha) || isNaN(documento) || nombre.trim() === "" || apellido.trim() === "" || genero.trim() === "" || direccion.trim() === "" || isNaN(telefono) || isNaN(edad));

                    console.log("                                                           ".bgMagenta);
                    console.log("                                                           ".bgMagenta);
                    console.log("   ".bgMagenta +"                                                    ".rainbow,"   ".bgMagenta);
                    console.log("   ".bgMagenta +"                    Ficha:".red+`      ${ficha}`.blue+ "                   " + "   ".bgMagenta );
                    console.log("   ".bgMagenta +"   ".rainbow +"    Documento Aprendiz:".yellow+`      ${documento}`.blue+ "           ".rainbow +"   ".bgMagenta );
                    console.log("   ".bgMagenta +"   ".rainbow +"    Nombre del Aprendiz:".yellow+`      ${nombre}`.blue+ "       ".rainbow+"   ".bgMagenta );
                    console.log("   ".bgMagenta +"   ".rainbow +"    Apellido del Aprendiz:".yellow +`      ${apellido}`.blue+ "      ".rainbow+"   ".bgMagenta );
                    console.log("   ".bgMagenta +"   ".rainbow +"    Genero:".yellow +`                ${genero}`.blue+ "             ".rainbow+"   ".bgMagenta );
                    console.log("   ".bgMagenta +"   ".rainbow +"    Direccion: ".yellow +`      ${direccion}`.blue+ "   ".rainbow+"   ".bgMagenta );
                    console.log("   ".bgMagenta +"   ".rainbow +"    Telefono: ".yellow +`              ${telefono}`.blue+ "           ".rainbow+"   ".bgMagenta );
                    console.log("   ".bgMagenta +"   ".rainbow +"    Edad:".yellow +`                        ${edad}`.blue+ "                   ".rainbow+"   ".bgMagenta );
                    console.log("   ".bgMagenta +"                                                    ".rainbow,"   ".bgMagenta);
                    console.log("                                                           ".bgMagenta);
                    console.log("                                                           ".bgMagenta);
                    console.log("                                                                            ".rainbow);
                    console.log("                                                                                   ".bgMagenta);
                    console.log("                                                                                   ".bgMagenta);
                    console.log("   ".bgMagenta +"                                                                             "+"   ".bgMagenta);
                    console.log("   ".bgMagenta +"                      ".rainbow + colors.bgGreen ("=============================="), "                        " +"   ".bgMagenta);
                    console.log("   ".bgMagenta +"                      ".rainbow + colors.bgGreen ("      PROGRAMA FINALIZADO     "), "                        " +"   ".bgMagenta);
                    console.log("   ".bgMagenta +"                      ".rainbow + colors.bgGreen ("=============================="), "                        " +"   ".bgMagenta);
                    console.log("   ".bgMagenta +"                                                                            ".rainbow, "" +"   ".bgMagenta);
                    console.log("                                                                                   ".bgMagenta);
                    console.log("                                                                                   ".bgMagenta);
                readlineSync.question('\nPresione Enter para volver al menú...');
                break;
                case 3:
                console.clear();

        //Función que muestra las operaciones
                    function mostrarOperaciones (titulo, opcion, tamano=50, espacio=16) {
                    const emptyLine = ' '.repeat(tamano); //Este espacio en blanco se repetirá 50 veces
                    console.log(emptyLine.bgMagenta); 

            console.log(
                "  ".bgMagenta +
                " ".repeat(Math.floor((tamano - 4 - titulo.length) / 2)) + //del total del tamaño se quita 4, luego la longitud del titulo y la otra mitad y luego se divide en 2
                /*Math.floor sirve para tomar la parte entera del valor resultante*/
                titulo +
                " ".repeat(tamano - 4 - titulo.length - Math.floor((tamano - 4 - titulo.length) / 2)) + //Se resta el valor que ya se imprimió a la izquierda
                "  ".bgMagenta
            );

            console.log(emptyLine.bgMagenta); 

            opcion.forEach((opcion, index) => {
                const optionSTring = `${index + 1}.  ${opcion}`;            
                    console.log(
                        "  ".bgMagenta +
                        " ".repeat(espacio) +
                        optionSTring +
                        " ".repeat(tamano - espacio - 4 - optionSTring.length) +
                        "  ".bgMagenta
                    );
            });

            console.log(emptyLine.bgMagenta); 
        }

                    let dato1;
                    let dato2;
                    let datos = [{dato1},{dato2}];
                    let sumaDatos = 0;
                    let restaDatos = 0;
                    let multDatos = 1;  
                    let divisionDatos = 1;
                    let volver = 1;
                    let respuesta;


        while (volver !== 0) {
            console.clear();
            mostrarOperaciones(" Operaciones", [
                "Suma",
                "Resta",
                "Multiplicación",
                "División",
                "Promedio"
            ]);
            opcion= parseInt(readlineSync.question('¿Cual operacion quieres hacer?: '.yellow));

                console.log("                                                                            ".rainbow);

                switch (opcion) { 
                    case 1:
                        for (let i = 0; i < datos.length; i++) {
                            datos[i] = parseFloat(readlineSync.question(`Digite el dato numero ${i + 1}: `.yellow));
                            sumaDatos += datos[i];
                        }
                        console.log ("Suma de datos con FOR: ",sumaDatos);
                        break;
                
                    case 2:
                        for (let i = 0; i < datos.length; i++) {
                            datos[i] = parseFloat(readlineSync.question(`Digite el dato numero ${i + 1}: `.yellow));
                            if (i === 0) {
                                restaDatos = datos[i]; 
                                } else {
                                restaDatos -= datos[i]; 
                            }
                        }
                        console.log ("Resta de datos con FOR: ",restaDatos);
                        break;
                    case 3:
                        for (let i = 0; i < datos.length; i++) {
                            datos[i] = parseFloat(readlineSync.question(`Digite el dato numero ${i + 1}: `.yellow));
                            multDatos *= datos[i];
                        }
                        console.log ("Multiplicación de datos con FOR: ",multDatos);
                        break;
                    case 4:
                        for (let i = 0; i < datos.length; i++) {
                            datos[i] = parseFloat(readlineSync.question(`Digite el dato numero ${i + 1}: `.yellow));
                            if (i === 0) {
                                divisionDatos = datos[i]; 
                                }
                            else {
                                if (datos[i] === 0) {
                                    console.log("Error: División por cero no está definida.".red);
                                    divisionDatos = NaN; 
                                    break; 
                                } else {
                                    divisionDatos /= datos[i];
                                }
                            }
                        }
                        console.log ("División de datos con FOR: ",divisionDatos);
                        break;
                    case 5:
                        let numAleatorio;
                        function numAleatorioEntero(min, max) {
                        min = Math.ceil(min);
                        max = Math.floor(max);
                        return Math.floor(Math.random() * (max - min + 1) + min);
                        }
                        let numeros = [];
                        let numDigitado;
                        
                        do{
                            numDigitado = readlineSync.questionInt("Digite un número (1 a 20): ");
                        }while (numDigitado < 1 || numDigitado > 20);
 
                        for(let i = 0; i < numDigitado; i++){
                            numAleatorio = numAleatorioEntero(1, 20);
                            numeros.push(numAleatorio);
                        }
                        console.log("Números generados: ", numeros);
                        
                        let sumaNumeros = 0;
                        for(let i = 0; i < numeros.length; i++){
                        sumaNumeros += numeros[i];
                        }

                        let promedio = sumaNumeros / numeros.length;
                        console.log("Suma de los números: ", sumaNumeros);
                        console.log("Promedio de los números: ", promedio.toFixed(2));
                        break;
                    }
                    respuesta = readlineSync.question("Presiona 1 para volver al menu o Enter para volver al menu principal: ".yellow);
                    if (respuesta === '1') {
                        volver = 1; 
                    } else {
                        volver = 0;
                    }
        }
    }
} while (true);
