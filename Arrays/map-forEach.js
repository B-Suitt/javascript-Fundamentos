// Metodos para iterar en el array
// Metodos que no modifican el array original (inmutabilidad)

// map()

const numeros = [1,2,3,4,5]

const alCuadrado = numeros.map(num => num * num)

console.log(numeros);
console.log(alCuadrado);

// forEach()

const colores = ['rojo','azul','amarillo']

const iteracionColores = colores.forEach(color => console.log(color))

console.log(colores);
console.log(iteracionColores);

//fahrenheit a celcius

const tempEnFahrenheit = [32,68,95,104,212]

const fahrenheitACelcius = tempEnFahrenheit.map(fahrenheit => (5/9) * (fahrenheit- 32))

console.log(tempEnFahrenheit);
console.log(fahrenheitACelcius);

console.log("-------------------------------------");


// sumas elementos de un array

const numbers = [1,2,3,4,5]

let sum = 0

numbers.forEach(number => {
    sum = sum += number
})

console.log(numbers);
console.log(sum);

