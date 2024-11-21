// Metodos que iteran en el array
// Metodos que no modifican el array original (inmutabilidad)

// filter()

const numeros = [1,2,3,4,5,6,7,8,9,10]
const filtroNumeros = numeros.filter(numero => numero % 2 === 0)

console.log(numeros);
console.log(filtroNumeros);

// reduce(accumulator, currentValue) -- sirve para sumar numeros
console.log("****************************************");

const reduceNumeros = [1,2,3,4,5]
const sum = reduceNumeros.reduce((accumulator, currentValue)=> accumulator + currentValue, 0)

console.log(reduceNumeros);
console.log(sum);

// reduce() -
console.log("****************************************");

const palabras = ['Hola','Chao','Manzana','Denuevo','Chao','Hola','Chao']
const palabrasRepetidas = palabras.reduce((accumulator,currentValue) => {
    if(accumulator[currentValue]){
        accumulator[currentValue]++
    } else {
        accumulator[currentValue] = 1
    }
    return accumulator
}, {})

console.log(palabrasRepetidas);