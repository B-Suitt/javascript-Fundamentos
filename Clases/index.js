
//Clases

class Persona {
    constructor(nombre,edad,sexo){
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
    }
    saludar(){
        console.log(`Hola mi nombre es ${this.nombre} y tengo ${this.edad} años`);
    }
}

const persona1 = new Persona('Bastian',27,"Masculino")

persona1.saludar()