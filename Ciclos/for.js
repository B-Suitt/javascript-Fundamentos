/*  FOR */
// for(variable; condicion; incremento) {
//     codigo a ejecutar
// }

// let list = ['comer','dormir','programar','repetir'];

// for(let i = 0; i < list.length; i++){
//     console.log(` ${i+1} ${list[i]}`);
    
// }

/*  FOR OF */

/* for or arrays, string [algo]

for (variable) {
    codigo
}

*/

// let carrito = ['Leche','Arroz','Huevos','Pan'];

// for (producto of carrito){
//     console.log(producto)
// }

/* FOR IN */

/*

for in ---> objetos

for(variable in objeto){
    codigo
}

*/

const listaDeCompras = {
    Leche: 6,
    Arroz: 3,
    Huevos: 12,
    Pan: 1
}

for(producto in listaDeCompras){
    console.log(producto)
}

for(producto in listaDeCompras){
    console.log(`${producto} : ${listaDeCompras[producto]}`); 
}

//Error For In solo para objetos iterables (Arrays y strings)
for(producto of listaDeCompras){
    console.log(producto)
}