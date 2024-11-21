// como crear un array?
// 1. new Array() o Array()

const frutas = Array('Manzana', 'Platano', 'Naranja')
console.log(frutas);

const soloUnNumero = Array(12)
console.log(soloUnNumero);

const numeros = Array(1,2,3,4,5)
console.log(numeros);

// 2. Syntax literal 

const unNumero = [4]
console.log(unNumero);


const arrayVacio = []
console.log(arrayVacio);


const deportes = ['Futbol', 'Tenis','Basketball']
console.log(deportes);

const receta = [
    'Harina',
    true,
    2,
    {
        ingredientes: 'Leche',
        cantidad:'1 taza'
    },
    false
]
console.log(receta);

// acceso a elementos de un array

const primeraFruta = frutas[0]
console.log(primeraFruta);

const cantidadFrutas = frutas.length
console.log(cantidadFrutas);

// Mutabilidad

frutas.push('Sandia')
console.log(frutas);

// Inmutabilidad

const nuevasFrutas = frutas.concat(['Uva','Kiwi'])
console.log(frutas);
console.log(nuevasFrutas);


// Checkear un array con  Array.isArray()

const esArray = Array.isArray(frutas)
console.log(esArray);

// Suma de todos los elementos de un array

const numerosArray = [1,2,3,4,5]
let sum = 0

for (let i = 0; i < numerosArray.length; i++){
    sum += numerosArray[i]
}
console.log(sum);
