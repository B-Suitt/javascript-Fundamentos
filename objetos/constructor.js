// const persona = {
//     nombre:'Bastian',
//     apellido: 'suitt'
// }

function Persona(nombre,apellido,edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
}

//instancia

const persona1 = new Persona('Juan','Soto',30);

console.log(persona1);

const persona2 = new Persona('Bastian','Suitt',27);

console.log(persona2);

Persona.prototype.telefono = '5555-5555';

persona1.nacionalidad = 'Chileno';

Persona.prototype.saludar = function(){
    console.log(`Hola me llamo ${this.nombre}`);
}

persona1.saludar();
persona2.saludar();