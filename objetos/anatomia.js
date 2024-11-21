/*
Estructura de datos

key / value 

objeto  {
    propiedad: valor,
    propiedad: valor,
    propiedad: valor,
    metodos()
}
*/

const persona = {
    nombre:'Bastian',
    edad: 27,
    direccion: {
        calle:'julieta 4412',
        ciudad:'Santiago'
    },
    saludar(){
        console.log(`Hola mi nombre es ${persona.nombre}`);
    }
}

console.log(persona);

persona.saludar();


persona.telefono = '8888-8888'

console.log(persona.telefono);

persona.despedir = () =>{
    console.log('Adios');
}

persona.despedir()

delete persona.telefono;
delete persona.despedir;