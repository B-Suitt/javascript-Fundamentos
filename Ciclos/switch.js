// switch(expresion) {
//     case valor1: 
//         //codigo a ejecutar
//         break;
//     case valor2:
//         //codigo a ejecutar
//         break;

//     default:
//         //codigo a ejecutar
// }

let producto = 'Sandia'

switch(producto){
    case 'Naranjas':
        console.log('Las naranjas cuestan $1000 el kilo')
        break;
    case 'Manzanas':
        console.log('Las manzanas cuestan $400 el kilo')
        break;
    case 'Mango':
        console.log('La sandia cuesta $2000 la unidad')
        break;
    case 'Platanos':
    case 'Peras':
        console.log('Las peras y los platanos cuestan $1500 el kilo')
        break;
    default:
        console.log(`Lo siento, no tenemos ${producto}`)
}

console.log('Hay algo mas que desee?');