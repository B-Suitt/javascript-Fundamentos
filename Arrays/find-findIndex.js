//Metodos que no modifican el array original

// find()

const multiplos5 = [5,10,15,20]
const primerNumeroMayorA10 = multiplos5.find(numero => numero > 10)
console.log(multiplos5);
console.log(primerNumeroMayorA10);

// findIndex()

const numerosRandom = [6,16,20,50,60]
const indexNumeros = numerosRandom.findIndex(numero=> numero > 50)

console.log(numerosRandom);
console.log(indexNumeros);