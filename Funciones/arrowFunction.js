const saludos = function(nombre){
    return `Hola, ${nombre}`
}

// Arrow function - explicit return

const nuevoSaludos = (nombre) => {
    return `Hola, ${nombre}`
}

// Arrow function - implicit return

const nuevoSaludosImplicit = nombre => `Hola, ${nombre}`
const nuevoSaludosImplicitMasParametros = (nombre, apellido) => `Hola, ${nombre} ${apellido}`


// Enlace Lexico

const personajeFicticio = {
    nombre: 'Tio Ben',
    mensajeConFuncionTradicional: function (message) {
        console.log(`${this.nombre} dice: ${message}`);
        
    },
    mensajeConArrowFuntion: (message) => {
        console.log(`${this.nombre} dice: ${message}`);
        
    }
}

personajeFicticio.mensajeConFuncionTradicional('UNA GRAN PODER CONLLEVA UNA GRAN RESPONSABILIDAD')

personajeFicticio.mensajeConArrowFuntion('UNA GRAN PODER CONLLEVA UNA GRAN RESPONSABILIDAD 2')

