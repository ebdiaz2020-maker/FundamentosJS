/* ==========================================================================
   03 — Bucles Básicos | 10 Katas
   Completá cada función RETORNANDO el valor pedido.
   ⚠️  NO uses console.log() — las funciones deben RETORNAR el resultado.
========================================================================== */

/* --------------------------------------------------------------------------
   KATA 21 — Números del 1 al N
   Dado un número n, retorná un array con todos los números del 1 al n.
   Ej: numerosHastaN(5) → [1, 2, 3, 4, 5]
-------------------------------------------------------------------------- */
function numerosHastaN(n) {
  // TU CÓDIGO AQUÍ 👇
  const numeros = [];

  for (let i = 1; i <= n; i++) {
    numeros.push(i);
  }
  return numeros;

}

/* --------------------------------------------------------------------------
   KATA 22 — Cuenta Regresiva
   Dado un número de inicio, retorná un array con la cuenta regresiva
   hasta 0, y al final el string "¡Despegue! 🚀".
   Ej: cuentaRegresiva(3) → [3, 2, 1, 0, "¡Despegue! 🚀"]
-------------------------------------------------------------------------- */
function cuentaRegresiva(inicio) {
  // TU CÓDIGO AQUÍ 👇
  const cuentaRegresiva = [];
  for (let i = inicio; i >= 0; i--) {
    cuentaRegresiva.push(i);
  }
  cuentaRegresiva.push("¡Despegue! 🚀");
  return cuentaRegresiva;
}

/* --------------------------------------------------------------------------
   KATA 23 — Tabla de Multiplicar
   Dado un número, retorná un array con los 10 primeros múltiplos en formato string.
   Ej: tablaMultiplicar(7) → ["7 x 1 = 7", "7 x 2 = 14", ..., "7 x 10 = 70"]
-------------------------------------------------------------------------- */
function tablaMultiplicar(numero) {
  // TU CÓDIGO AQUÍ 👇
  const tablaMultiplicar = [];
  let diezMultiplos = 0;
  let multiplicador = 1;
  while (diezMultiplos < 11) {
    if(numero % multiplicador === 0) {
      tablaMultiplicar.push(multiplicador.toString());
      diezMultiplos++;
    }
    multiplicador++;
  }
  return tablaMultiplicar;
}

/* --------------------------------------------------------------------------
   KATA 24 — Factorial
   Dado un número n, calculá y retorná su factorial.
   Ej: factorial(5) → 120   (porque 5 × 4 × 3 × 2 × 1 = 120)
   Definí factorial(0) = 1.
-------------------------------------------------------------------------- */
function factorial(n) {
  // TU CÓDIGO AQUÍ 👇
  let resultado = 1;
  for (let i = 1; i <= n; i++) {
    resultado = resultado * i;
  }
  return resultado;
}

/* --------------------------------------------------------------------------
   KATA 25 — Sin Múltiplos de 4
   Dado un límite, retorná un array con los números del 1 al límite
   excluyendo los que son múltiplos de 4.
   Ej: sinMultiplosDe4(8) → [1, 2, 3, 5, 6, 7]
-------------------------------------------------------------------------- */
function sinMultiplosDe4(limite) {
  // TU CÓDIGO AQUÍ 👇
  const arrSinMultiplosDe4 = [];
  for (let nro = 1; nro <= limite; nro++) {
    if (nro % 4 !== 0) { // evito agregar los múltiplos de 4 al array
      arrSinMultiplosDe4.push(nro);
    }
  }
  return arrSinMultiplosDe4;
}

/* --------------------------------------------------------------------------
   KATA 26 — Primer Múltiplo de 13 Mayor a 100
   Retorná el primer número que sea múltiplo de 13 y sea estrictamente mayor que 100.
   (No recibe parámetros, la respuesta siempre es la misma)
-------------------------------------------------------------------------- */
function primerMultiploDe13MayorA100() {
  // TU CÓDIGO AQUÍ 👇
  let primerMultiplo = 101; 
  let noExisteX13 = true;
  while (noExisteX13) { 
    if (primerMultiplo % 13 === 0) {
      noExisteX13 = false;
      return primerMultiplo;
    }
    primerMultiplo++; 
  }
}

/* --------------------------------------------------------------------------
   KATA 27 — Triángulo de Asteriscos
   Dado un número de filas, retorná un array donde cada elemento es una fila.
   Ej: triangulo(3) → ["*", "**", "***"]
-------------------------------------------------------------------------- */
function triangulo(filas) {
  // TU CÓDIGO AQUÍ 👇
  const arrConFilas = [];
  for (let i = 1; i <= filas; i++) {
    arrConFilas.push(`Fila nro ${i}`);
  }  
  return arrConFilas;
}

/* --------------------------------------------------------------------------
   KATA 28 — Suma del 1 al N
   Dado un número n, retorná la suma de todos los números del 1 al n.
   Ej: sumaHastaN(10) → 55
-------------------------------------------------------------------------- */
function sumaHastaN(n) {
  // TU CÓDIGO AQUÍ 👇
  let sumaTotal = 0;
  for (let numeros = 1; numeros <= n; numeros++) {
    sumaTotal = sumaTotal + numeros;
  }
  return sumaTotal;
}

/* --------------------------------------------------------------------------
   KATA 29 — Fibonacci
   Dado un número n, retorná un array con los primeros n números
   de la secuencia de Fibonacci.
   Ej: fibonacci(6) → [0, 1, 1, 2, 3, 5]
-------------------------------------------------------------------------- */
function fibonacci(n) {
  // TU CÓDIGO AQUÍ 👇
  const arrFibonacci = [];
  arrFibonacci.push(0, 1);
  let nuevoFibonacci = 0;

  for (let i = 2; i < n; i++) {
      nuevoFibonacci = arrFibonacci[i - 1] + arrFibonacci[i - 2];
      arrFibonacci.push(nuevoFibonacci);
    }
 return arrFibonacci;  
}


/* --------------------------------------------------------------------------
   KATA 30 — ¿Es Primo?
   Dado un número, retorná true si es primo o false si no lo es.
   Un número primo solo es divisible por 1 y por sí mismo.
   Tip: los números menores o iguales a 1 no son primos.
-------------------------------------------------------------------------- */
function esPrimo(numero) {
  // TU CÓDIGO AQUÍ 👇
  if (numero <= 1) {
    return false; //los números menores o iguales a 1 no son primos.
  }
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      return false; //si el número es divisible por algún número entre 2 y él mismo, no es primo
    }
  }
  return true; 
}

// 🚨 ¡NO TOCAR ESTA LÍNEA!
module.exports = {
  numerosHastaN,
  cuentaRegresiva,
  tablaMultiplicar,
  factorial,
  sinMultiplosDe4,
  primerMultiploDe13MayorA100,
  triangulo,
  sumaHastaN,
  fibonacci,
  esPrimo,
};
