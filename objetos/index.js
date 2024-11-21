/*

estructura de datos

key / value

objeto {
    propiedad: valor,
    propiedad: otro valor,
    Metodos
}

*/


const persona = {
    nombre: 'Bastian',
    edad: 27,
    direccion: {
        calle: 'julieta 4412',
        ciudad: 'Santiago de Chile'
    },
    saludar(){
        console.log(`Hola mi nombre es ${persona.nombre}`);
    }
}

