///// Operaciones básicas, Tipos de datos, Prompt y Alert//////

// Escribir un programa que muestre un prompt donde el usuario ingresa un número, luego muestra otro prompt pidiendo otro número, finalmente el programa muestra una alerta con el resultado de la suma.

const suma = () => {
  const a = prompt("Escribir un numero");
  const b = prompt("Escribir un numero");
  alert(Number(a) + Number(b));
};

//Crear un programa donde el usuario ingrese en un prompt la temperatura en Celcius y el programa muestre en una alerta la temperatura en Fahrenheit

const convertirTemperatura = () => {
  const a = prompt("Escribir la temperatura en Celsius");
  const resultado = (a * 9) / 5 + 32;
  alert(resultado);
};

//Pedir un número a un usuario a través de un prompt y luego dividirlo por 10, ejemplo: 5 / 10 igual 0.5

const numero = () => {
  const a = prompt("Escribir un numero");
  const resultado = Number(a) / 10;
  alert(resultado);
};

//Si a = [1,2,3] crear un script que determine de muestre un alert del tipo de dato de a.

const tipoDeDato = () => {
  const a = [1, 2, 3];
  const resultado = typeof a;
  alert(resultado);
};

///// If and else /////

//Crear un programa que determine si un número introducido en un Prompt es par o no, la respuesta será mostrada en una alerta.

const parInpar = () => {
  const a = prompt("Ingrese un numero");
  if (a % 2 === 0) {
    return alert("par");
  }
  alert("inpar");
};

// Crear un programa que determine si un número introducido en un Prompt es divisible por 5 o no, mostrar el resultado con console.log

const divisiblePorCinco = () => {
  const a = prompt("Ingrese un numero");
  if (a % 5 === 0) {
    console.log("es divisible");
  } else {
    console.log("No es divisible");
  }
};

// Crear un programa que determine si un número introducido en un popup es divisible por 11 y 5 o no, mostrar el resultado con console.log

const divisiblePorCincoYOnce = () => {
  const a = prompt("Ingrese un numero");
  if (a % 5 === 0 && a % 11 === 0) {
    console.log("es divisible");
  } else {
    console.log("No es divisible");
  }
};

// Crear un programa que le pida al usuario dos números en un Prompt y luego muestre en un alerta el número mayor.

const mayorDeDos = () => {
  const a = prompt("Ingrese dos numeros");
  if (a[0] === a[1]) {
    alert("iguales");
  } else if (a[0] < a[1]) {
    alert(a[1]);
  } else {
    alert(a[0]);
  }
};

// Crear un programa que le pida al usuario primero un números al usuario a través de un prompt y luego un segundo número para luego mostrar en un alerta el número mayor, esta vez realizar el ejercicio ocupando un if ternario.

const mayorDeDosTernario = () => {
  const a = prompt("Ingrese un numeros");
  const b = prompt("Ingrese un numeros");

  a === b ? alert("iguales") : a < b ? alert(b) : alert(a);
};

// Crear un programa que determine si un string introducido por un usuario empieza con un número o con una letra.

const tipoDePrimerLetra = () => {
  const a = prompt("Ingrese un string");
  Number(a[0]) ? alert("numero") : alert("string");
};

// Crear un programa donde se introduzcan los tres ángulos internos de un triángulo y se determine si el triángulo es válido o no.

const esTriangulo = () => {
  const a = prompt("Ingrese primer angulo");
  const b = prompt("Ingrese segundo angulo");
  const c = prompt("Ingrese tercer angulo");

  Number(a) + Number(b) + Number(c) === 180
    ? alert("es triangulo")
    : alert("no es triangulo");
};

// Determinar si una palabra empieza con mayúscula o no.

const empiezaMayuscula = () => {
  const a = prompt("Ingrese una palabra");

  a[0] === a[0].toLocaleUpperCase()
    ? alert("empieza con mayuscula")
    : alert(" no empieza con mayuscula");
};

// Determinar si un año dado es bisiesto.

const bisiesto = () => {
  const a = prompt("Ingrese un año");
  if ((a % 4 === 0 && a % 100 !== 0) || a % 400 === 0) {
    alert("bisiesto");
  } else {
    alert("No es bisiesto");
  }
};

// Escribir un programa JavaScript en el que el programa escoge al azar un entero entre 1 y 10, el usuario , luego a el usuario se le pedirá que introduzca un número en un popup para intentar adivinarlo. Si la entrada del usuario coincide con el número de conjetura, el programa mostrará un mensaje de "buen trabajo" de lo contrario mostrará un mensaje de "No corresponde"

const adivinaNumero = () => {
  const azar = (Math.random() * 10).toFixed();
  console.log(azar);
  const a = prompt("Ingrese un numero ente 1 y 10");

  azar === a ? alert("buen trabajo") : alert(" no corresponde");
};

// El siguiente código tiene un error que se produce en algunos casos especiales, descubrirlo y arreglarlo:

// // Obtener edad

// if(edad < 13) {
//     console.log("Es niño");
// }if(edad < 18 ){
//      console.log("Es adolecente");
// } else{
//      console.log("Es adolecente");
// }

const error = (edad) => {
  if (edad < 13) {
    console.log("Es niño");
  } else if (edad < 18) {
    console.log("Es adolecente");
  } else {
    console.log("Es adulto");
  }
};

// Negar las siguientes expresión de forma de mantener la tabla de verdad, crear el programa que muestre el valor de la expresión a medida que se cambia los valores de a y b.

//    !a && !b
//    !a || !b

const negado = (a, b) => {
  const c = !a && !b;

  const d = !a || !b;

  console.log(c, d);
};

//////Loops

// ### While

// Mostrar todos los números de 1 a n aumentando de 1 en 1 donde n lo ingresa el usuario en un prompt.

const incrementa = () => {
  const a = prompt("ingrese numero final");
  let contador = 0;
  while (contador < a) {
    contador++;
    console.log(contador);
  }
};

// Mostrar todos los números de 1 a N aumentando de 2 en 2 donde n lo ingresa el usuario en un prompt.

const dosEnDos = () => {
  const a = prompt("ingrese numero final");
  let contador = 0;
  while (contador < a) {
    contador += 2;
    console.log(contador);
  }
};

// Mostrar todos los números de N a 1 disminuyendo de 1 en 1 donde n lo ingresa el usuario en un prompt.

const disminuye = () => {
  const a = prompt("ingrese numero inicial");
  let contador = a;
  while (contador > 1) {
    contador--;
    console.log(contador);
  }
};

// Escribir utilizando console.log la tabla del 9 hasta 9x10.

const tablaNueve = () => {
  let contador = 0;
  while (contador < 10) {
    contador++;
    console.log(contador * 9);
  }
};
// Pedir al usuario que ingrese un número en un prompt, hacer la suma de todos los dígitos, validar que el número ingresado no contenga letras.

const sumaDigito = () => {
  const a = prompt("ingrese numero ");

  if (Number(a)) {
    let contador = 0;
    let acumulador = 0;
    while (contador < a.length) {
      acumulador = Number(a[contador]) + acumulador;
      contador++;
    }
    console.log(acumulador);
  } else {
    alert("invalido");
  }
};
// Realizar la suma de todos los números pares entre N y M donde N y M los ingresa un usuario.

const sumaParesEntre = () => {
  const n = prompt("ingrese minimo ");
  const m = prompt("ingrese maximo ");

  let contador = n % 2 === 0 ? Number(n) : Number(n) + 1;

  let acumulador = n % 2 === 0 ? Number(n) : Number(n) + 1;

  while (contador < m) {
    contador += 2;
    acumulador += contador;
  }
  console.log(acumulador);
};
// Realizar la sumatoria de los primeros N números, donde N es ingresado por el usuario.

const sumatoriaN = () => {
  const n = prompt("ingrese numero ");

  let contador = 0;
  let acumulador = 0;

  while (contador < n) {
    contador++;
    acumulador += contador;
  }
  console.log(acumulador);
};

// Realizar el factorial de los primeros N números.

const factorial = () => {
  const n = prompt("ingrese numero ");

  let contador = 1;
  let acumulador = 1;

  while (contador < n) {
    contador++;
    acumulador *= contador;
  }
  console.log(acumulador);
};

////// Ejercicios de divisores con while (o for) /////

// Encontrar todos los divisores de un número.

const divisores = () => {
  const n = prompt("ingrese numero ");

  let contador = n;
  let acumulador = 0;

  while (contador > 1) {
    (n % contador === 0 || n / contador === 1) && console.log(contador);
    contador--;
  }
  console.log(acumulador);
};

// Determinar si un número ingresado por el usuario en un loop es primo o no, validar que el número ingresado sea mayor o igual a dos.

const primo = () => {
  const n = prompt("ingrese numero ");
  const number = Number(n);

  if (number === 1) {
    alert("no Primo");
  } else if (number >= 2) {
    let array = [];
    for (let i = number; i > 0; i--) {
      number % i === 0 && array.push(i);
    }
    array.length === 2 ? alert("PRIMO") : alert("No PRIMO");
  }
};

// Crear un programa que determine si un número es perfecto o no, (se dice que un número es perfecto si el número es igual a sus divisores, ejemplos 6 = 1 + 2 + 3)

const perfecto = () => {
  const n = prompt("ingrese numero ");
  const numero = Number(n);

  let contador = numero;

  let arr = [];
  let acumulador = 0;

  while (contador > 0) {
    (numero % contador === 0 || numero / contador === 1) && arr.push(contador);
    contador--;
  }

  for (let i = arr.length - 1; i > 0; i--) {
    acumulador += arr[i];
  }

  acumulador === numero ? alert("perfecto") : alert("no es Perfecto");
};

//// ### Doble loop /////

// Generar los primeros N números primos, donde n es ingresado por el usuario.

const primoN = () => {
  const n = prompt("ingrese numero ");
  const numero = Number(n);
  const array = [];

  for (let i = 2; i <= numero; i++) {
    let primo = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        primo = !primo;
        break;
      }
    }
    if (primo) array.push(i);
  }

  console.log(array);
};

// Generar los primeros N números perfectos.

const perfectosN = () => {
  const num = prompt("ingrese numero ");
  const numero = Number(num);

  const perfecto = (n) => {
    let acumulador = 1;

    for (let i = 2; i * i < n; i++) {
      if (n % i == 0) {
        if (i * i != n) {
          acumulador = acumulador + i + n / i;
        } else {
          acumulador = acumulador + i;
        }
      }
    }

    if (acumulador == n && n != 1) {
      return true;
    } else {
      return false;
    }
  };

  for (let i = 1; i <= numero; i++) {
    if (perfecto(i)) {
      console.log(i);
    }
  }
};

////// Patrones con Loop anidados /////

// Dibujar los siguientes patrones ocupando document.write, para rellenar los espacios vacíos se debe imprimir un espacio vacío.

// Cuadrado lleno:

// *****
// *****
// *****
// *****
// *****

const CuadradoLleno = () => {
  for (i = 1; i <= 5; i++) {
    for (j = 0; j < 5; j++) {
      document.write("*");
    }
    document.write("<br/>");
  }
};

// Cuadrado hueco:

// *****
// *   *
// *   *
// *   *
// *****

const CuadradoHueco = () => {
  for (i = 1; i <= 5; i++) {
    for (j = 0; j < 5; j++) {
      if (i == 1 || i == 5) {
        document.write("*");
      } else {
        if (j == 0 || j == 4) {
          document.write("*");
        } else {
          document.write("_");
        }
      }
    }
    document.write("<br/>");
  }
};

// Tablero de Ajedrez:

// * * * * * * * *
//  * * * * * * *
// * * * * * * * *
//  * * * * * * *
// * * * * * * * *
//  * * * * * * *
// * * * * * * * *
//  * * * * * * *

const ajedrez = () => {
  for (i = 1; i <= 15; i++) {
    for (j = 0; j < 15; j++) {
      if (i % 2 == 0) {
        if (j % 2 == 0) {
          document.write("*");
        } else {
          document.write(" .");
        }
      } else {
        if (j % 2 == 0) {
          document.write(" .");
        } else {
          document.write("*");
        }
      }
    }
    document.write("<br/>");
  }
};

// Cuadrado hueco:

// *****
// *   *
// *   *
// *   *
// *****

// Piramide Izquierda:

// *
// **
// ***
// ****
// *****

const piramideIzq = () => {
  for (i = 1; i <= 5; i++) {
    for (j = 0; j < i; j++) {
      document.write("*");
    }
    document.write("<br/>");
  }
};

// Pirámide centrada

//     *
//    ***
//   *****
//  *******
// *********

const piramidecentr = () => {
  let positivo = 5;
  let negativo = 5;

  for (i = 1; i <= 5; i++) {
    for (j = 1; j <= 9; j++) {
      if (j >= negativo && j <= positivo) {
        document.write("*");
      } else {
        document.write("-");
      }
    }
    positivo += 1;
    negativo -= 1;
    document.write("<br/>");
  }
};

// Pirámide invertida

// *********
// *******
// *****
// ***
// *

const piramideInvertida = () => {
  let positivo = 9;
  let negativo = 1;

  for (i = 1; i <= 5; i++) {
    for (j = 1; j <= 9; j++) {
      if (j >= negativo && j <= positivo) {
        document.write("*");
      } else {
        document.write("-");
      }
    }
    positivo -= 1;
    negativo += 1;
    document.write("<br/>");
  }
};

// Diamante:

const diamante = () => {
  let positivo = 5;
  let negativo = 5;

  for (i = 1; i <= 4; i++) {
    for (j = 1; j <= 9; j++) {
      if (j >= negativo && j <= positivo) {
        document.write("*");
      } else {
        document.write("-");
      }
    }

    positivo += 1;
    negativo -= 1;
    document.write("<br/>");
  }

  positivo = 9;
  negativo = 1;

  for (i = 1; i <= 5; i++) {
    for (j = 1; j <= 9; j++) {
      if (j >= negativo && j <= positivo) {
        document.write("*");
      } else {
        document.write("-");
      }
    }
    positivo -= 1;
    negativo += 1;
    document.write("<br/>");
  }
};

//// Funciones /////

//     Crear una función que reciba un valor cualquiera y lo muestre ocupando console.log(), llamar a la función pasando el valor 5

const muestra5 = (n) => {
  console.log(n);
};

//muestra5(5)

//     La siguiente función devuelve undefined en lugar de la multiplicación, se pide arreglarla

function multiply(a, b) {
  return a * b;
}

//     Crear una función que reciba dos valores y devuelva la suma de ellos.

const sumaDos = (n, m) => {
  console.log(n + m);
};

//     Crear una función que reciba un número entero y muestre un error si el tipo de dato pasado es de otro tipo.

const errorTipo = (n) => {
  isNaN(n) && console.log("error");
};
//     Crear una función autoejecutable que muestre "muuu" en pantalla

(function () {
  console.log("muuuu");
})();

/////// Array ////////

//     Dado el array = [1,2,3,4,5,6]
const arrayEjercicio = [1, 2, 3, 4, 5, 6];
//         Iterar por todos los elementos dentro de un array utilizando while y mostrarlos en pantalla.
const iterarUno = () => {
  let contador = 0;
  while (contador < arrayEjercicio.length) {
    console.log(arrayEjercicio[contador]);
    contador++;
  }
};

//         Iterar por todos los elementos dentro de un array utilizando for y mostrarlos en pantalla.
const iterarDos = () => {
  for (let index = 0; index < arrayEjercicio.length; index++) {
    console.log(arrayEjercicio[index]);
  }
};

//         Iterar por todos los elementos dentro de un array utilizando .forEach y mostrarlos en pantalla.

const iterarTres = () => {
  arrayEjercicio.forEach((item) => console.log(item));
};
//         Mostrar todos los elementos dentro de un array sumándole uno a cada uno.

const iterarCuatro = () => {
  arrayEjercicio.forEach((item) => console.log(item + 1));
};

//         Generar una copia de un array pero con todos los elementos incrementado en 1.

const iterarCinco = () => {
  let newArr = arrayEjercicio.map((item) => item + 1);
  console.log(newArr);
};
//         Calcular el promedio

const iterarSeis = () => {
  let newArr = arrayEjercicio.reduce((acumulador, siguienteValor) => {
    return acumulador + siguienteValor;
  }, 0);
  console.log(newArr / arrayEjercicio.length);
};

//     Crear un array vacío, luego generar 20 números al azar y guardarlos en un array.
const iterarSiete = () => {
  let arr = [];

  for (let index = 0; index < 20; index++) {
    let number = (Math.random() * 100).toFixed();
    arr.push(number);
  }
  console.log(arr);
};

//     Crear un array vacío, luego generar N números al azar y guardarlos en un array, N es introducido por el usuario a través de un prompt.

const iterarOcho = () => {
  let n = prompt("ingrese cantidad de numeros");
  let arr = [];

  for (let index = 0; index < n; index++) {
    let number = (Math.random() * 100).toFixed();
    arr.push(number);
  }
  console.log(arr);
};
//     Dado un array que contiene ["azul", "amarillo", "rojo", "verde", "café", "rosa"] determinar si un color introducido por el usuario a través de un prompt se encuentra dentro del array o no.

const iterarNueve = () => {
  let n = prompt("ingrese un color");
  let arr = ["azul", "amarillo", "rojo", "verde", "café", "rosa"];

  arr.includes(n) ? console.log("tiene") : console.log("no tiene");
};

/////  String y arrays //////

//     El usuario ingrese un string con varias palabras separadas por coma en un popup y se deben convertir en un array, (el usuario ingresa: "1,2,3,4,5" y se convierte en [1,2,3,4,5])
const stringArray = () => {
  let n = prompt("ingrese palabras separadas por coma (,)");

  console.log(n.split(","));
};
//     Convertir un array ingresado dentro del código en un string (existe un método en javascript para hacerlo)

const stringArrayDos = () => {
  let arr = ["uno", "dos", "casa", "auto"];

  console.log(arr.join());
};

///// Unión, intersección y conteo //////

//     Existen dos arrays, cada uno con 5 palabras, generar un nuevo array con la intersección de ambos elementos. (Ejemplo: [1,2,3] unión [1,2,4] = [1,2]

const interseccion = () => {
  let a = ["uno", "dos", "casa", "auto", "pajaro"];
  let b = ["cuatro", "ocho", "dos", "casa", "avion"];

  let c = a.filter((item) => b.indexOf(item) != -1);

  console.log(c);
};
//     Existen dos arrays, cada uno con 5 palabras, generar un nuevo array con la unión de ambos elementos, (Ejemplo: [1,2,3] unión [1,2,4] = [1,1,2,2,3,4]

const unionArray = () => {
  let a = ["uno", "dos", "casa", "auto", "pajaro"];
  let b = ["cuatro", "ocho", "dos", "casa", "avion"];
  let c = [...a, ...b];

  console.log(c);
};

//     El usuario ingresa dos conjuntos de números separados por coma, el programa debe determinar si ambos conjuntos tienen la misma cantidad de números.

const sonIguales = () => {
  let a = prompt("ingrese numero separados por coma");
  let b = prompt("ingrese numero separados por coma");

  a.split(",").length == b.split(",").length
    ? console.log("tiene la misma cantidad de numeros")
    : console.log(" NO tiene la misma cantidad de numeros");
};

//     El usuario ingresa dos conjuntos de números separados por coma, si ambos conjuntos tienen la misma cantidad de elementos mostrar un arreglo que contenga la suma de cada elemento. (Ejemplo: [1,2,3] + [2,3,4] = [3,5,7])
const sumacadaelemento = () => {
  let a = prompt("ingrese numero separados por coma");
  let b = prompt("ingrese numero separados por coma");

  a.split(",").length == b.split(",").length
    ? console.log(
        a
          .split(",")
          .map((item, index) => Number(b.split(",")[index]) + Number(item))
      )
    : console.log(" NO tiene la misma cantidad de numeros");
};

// Filtrando datos en arreglo

//     Crear una función que reciba un arreglo con números y devuelva un nuevo arreglo con solo los números pares, hint: utilizar reduce()
const soloPares = (n) => {
  const resultado = n.reduce((previousValue, currentValue) => {
    if (currentValue % 2 == 0) {
      previousValue.push(currentValue);
    }
    return previousValue;
  }, []);

  console.log(resultado);
};

//     Crear una función que reciba un arreglo con palabras, crear un nuevo arreglo que contenga solo las palabras que empiezan con una vocal.

const soloVocal = (n) => {
  const vocales = ["a", "e", "i", "o", "u"];

  const resultado = n.reduce((previousValue, currentValue) => {
    if (vocales.includes(currentValue.toLowerCase()[0])) {
      previousValue.push(currentValue);
    }
    return previousValue;
  }, []);

  console.log(resultado);
};
///// Ordenamiento /////

//     Crear un método que permite intercambiar las posiciones de dos elementos de un arreglo en base a sus índices ej:

//      arr = [1,2,3]
//      swap(arr, 0, 1)
//      console.log(arr) // [2,1,3]

//     Realizar el mismo ejercicio anterior pero que en esta ocasión devuelva un arreglo nuevo con los datos cambiados.

//      arr = [1,2,3]
//      new_arr = swap(arr, 0, 1)
//      console.log(arr) // [1,2,3]
//      console.log(new_arr) // [2,1,3]

//     Crear una función que reciba un arreglo y que cree uno nuevo con todos los elementos ordenados de menor a mayor, (sin ocupar el método .sort)

//     Crear una función que reciba un arreglo y que cree uno nuevo con todos los elementos ordenados de mayor a menor.

// Arreglos de arreglos

//     Crear una función que permite aplanar un arreglo dado, Ejemplo:

//      var arr = [[1,2,3],[4,5,6],[7,8,9]];
//      console.log(aplanar(arr)); // [1,2,3,4,5,6,7,8,9]

//     Crear una función que divida un arreglo en dos partes con la misma cantidad de elementos (o una diferencia de máximo un elemento) y devuelva un arreglo que contenga al grupo1 y al grupo2

//      var arr = [1,2,3,4,5,6,7,8];
//      console.log(split(arr)); // [[1,2,3,4], [5,6,7,8]]

// Matrices

//     Recorrer un arreglo de arreglos para mostrarlo como una matriz, ejemplo [[1,1],[2,2]] se mostraría de la siguiente forma:

// 1 	1
// 2 	2

//     Sumar [[1,1],[2,2]] con [[3,1],[3,2]].

//     Contar la cantidad de elementos dentro de una matriz.

//     Multiplicar una matriz por un escalar, si la matriz inicial es [[1,2,3],[4,5,6]], al multiplicarla por dos deberíamos obtener [[2,4,6],[8,10,12]].

//     Encontrar el número mayor en una matriz.

//     Determinar si un determinado número se encuentra dentro de una matriz o no.

//     Devolver la suma de todos los elementos en la diagonal de la matriz.

//     Mostrar la transpuesta de una matriz, o sea dado:
//     1 	2 	3
//     4 	5 	6
//     7 	8 	9

//     Debería quedar como:
//     1 	4 	7
//     2 	5 	8
//     3 	6 	9

// Funciones y arreglos

//     Crear una función que reciba un arreglo como parámetro y devuelva una copia del arreglo.

//     Crear una función que devuelva el promedio de un arreglo, en caso de que el arreglo esté vacío debe devolver cero.

//     Crear una función que calcule el promedio dentro de un arreglo pero dentro de un rango, esta función recibe el arreglo, un punto de partida y uno de termino y devuelve el promedio de los valores dentro del rango especificado.

// ## Objetos

//     Personas

//         Crear un objeto literal persona con nombre y edad y una método que determine si es mayor de edad o no.

//         Crear una función constructora que permita crear objetos del tipo personas pasándole solo un nombre y edad, agregar el método.

//         Crear un array que contenga varios objetos persona

//         Crear una función que reciba el array y devuelva la edad promedio del grupo de personas.

//     Teléfono
//         Crear una función constructora que devuelva objetos del tipo teléfono, como argumento debe recibir un número de teléfono, el objeto creado tiene el número de llamadas que debe ser inicializado en cero y un método llamar que debe aumentar el número de llamados en uno.

//     Puntos y líneas
//         Crear la función constructura punto que recibe un par de coordenadas (x,y) y devuelve un objeto punto en esa posición.
//         Crear la función constructora recta que recibe como argumento 2 puntos.

// ## DOM

//     Utilizando getElementById y innerHTML transformar el emoticon en un smiley

//      <p id="demo"> :( </p>

//     Utilizando la instrucción setInterval mostrar la hora exacta y actualizarla cada segundo.
