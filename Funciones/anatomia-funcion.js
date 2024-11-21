function calcularPrecioDescuento (precio, descuentoPorcentaje){
    const descuento = (precio * descuentoPorcentaje) / 100
    const precioConDescuento = precio - descuento

    return precioConDescuento

}

const precioReal = 100000
const descuentoPorcentaje = 42
const precioFinal = calcularPrecioDescuento(precioReal, descuentoPorcentaje)

console.log('Precio : $'+precioReal)
console.log('Descuento : '+descuentoPorcentaje+'%')
console.log('Precio con descuento: $'+precioFinal)