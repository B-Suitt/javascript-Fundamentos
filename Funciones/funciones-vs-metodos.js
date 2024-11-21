// //Capacidades que tienen las funciones al igual que otros objetos

// //1.pasar funciones como argumentos -> callback

// function a(){}
// function b(a){}
// b(a)

// // retornar funciones -> declaracion de funcion

// function a () {
//     function b () {}
//     return b
// }

// // asiganar funciones a variables -> expresion de funcion

// const a = function() {}

// // tener props y metodos

// function a () {}
// const obj = {}
// a.call(obj)

// // anidar funciones ->nested functions

// function a () {
//     function b () {
//         function c () {
        
//         } 
//         c()
//     }
//     b()
// }
// a()

// almacenar funciones en objetos -> metodos

const rocket = {
    nombre: 'Delorean x',
    mensajeLanzamiento: function mensajeLanzamiento(){
        console.log('FUEGO');
    }
}

rocket.mensajeLanzamiento()