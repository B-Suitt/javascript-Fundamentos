const numeroSecreto = Math.floor(Math.random() * 10 + 1)

const numeroJugador = parseInt (prompt('adivina el numero secreto entre 1 al 10'))


console.log(`Este es el numero con el que juegas ${numeroJugador}`)

if(numeroJugador === numeroSecreto){
    console.log('Felicidades adivinaste el numero secreto')
}else if (numeroJugador < numeroSecreto){  
    console.log('Te equivocaste el numero secreto es demasiado bajo, intenta denuevo')
}else{
    console.log('El numero es muy alto, intenta denuevo')
}