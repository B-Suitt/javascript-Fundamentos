// 1. Copiar un array

const originalArray = [1,2,3,4,5]

const copiaArray = [...originalArray]

console.log(originalArray);
console.log(copiaArray);

console.log("/*******************************/");

// 2. Combinar arrays

const array1 = [1,2,3]
const array2 = [3,4,5]
const arrayCombinado = [...array1, ...array2]

console.log(array1);
console.log(array2);
console.log(arrayCombinado);

// 3. Añadir elementos al array

const base = [1,2,3,4]
const arrayConElementosAdicionales = [...base, 'hola','cuatro']

console.log(base);
console.log(arrayConElementosAdicionales);

// 4. Parametros de funciones

function sum(a,b,c) {
    return a+b+c
}

const num = [1,2,3]
const resultado = sum(...num)

console.log(resultado);