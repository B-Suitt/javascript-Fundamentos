// Funciones puras

// Side Effects - dejan de ser puras
// 1. Modificar variables globales
// 2. Modificar parámetros
// 3. Solicitudes HTTP
// 4. Imprimir mensajes en pantalla o consola
// 5. Manipulacion del DOM
// 6. Obtener la hora actual

function sum (a,b) {
    return a + b
}
   
// Funciones impuras

function sum (a,b) {
    console.log('A: ', a);
    return a + b
}