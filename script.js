//variables 
let contador = 0
let sumaEdades = 0
let edad = 0
let salida = true

//funciones
function calcularEdadPromedio(cont, suma) {
    if (cont === 0) {
        return 0;
    }
    return suma / cont
}

function actualizarInfo(contador, sumaEdades) {
    const contadorTexto = 'Cantidad de personas: ' + contador
    const sumaEdadesTexto = 'Suma de edades: ' + sumaEdades
    const edadPromedio = calcularEdadPromedio(contador, sumaEdades)
    const edadPromedioTexto = 'Edad promedio: ' + edadPromedio
    const textoAlert = contadorTexto + "\n" + sumaEdadesTexto +"\n" + edadPromedioTexto
    return textoAlert
}

function registrarEdad(edadInputValue) {
    if (!isNaN(edadInputValue) && edadInputValue > 0) {
        contador++
        sumaEdades += edadInputValue
        return true 
    } else {
        return false 
    }
}


//ciclos
do {
    let instruccion = prompt("1: añadir edad de persona\n 2: obtener promedio de edades\n 0: salir del programa")
    if (instruccion == 1) {
        edad = prompt("Ingrese la edad a sumar")
        edad = parseInt(edad)
        if (registrarEdad(edad)) {
            alert("Edad registrada correctamente.")
        } else {
            alert("Edad no válida. Debe ser un número mayor que 0.")
        }
    } else if (instruccion == 2) {
        alert(actualizarInfo(contador, sumaEdades))
    } else if (instruccion == 0) {
        salida = false
    } else {
        alert("Ingresaste una instrucción no válida")
    }
} while (salida)
