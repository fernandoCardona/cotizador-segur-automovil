//5.0-Creamos un archivo helper.js 
//5.1-creamos una funcion obtenerdiferenciaYear para obtener la diferencia de años 
export function obtenerDiferenciaYear(year) {
    return new Date().getFullYear() - year;
}
//5.2-creamos una funcion calcularMarca para calcular segun la marca
export function calcularMarca(marca) {
    let incremento;

    switch(marca) {
        case 'europeo':
            incremento = 1.30;
            break;
        case 'americano':
            incremento = 1.15;
            break;
        case 'asiatico':
            incremento = 1.05;
            break
        default:
            break;
    }
    // console.log(typeof incremento);
    // console.log(incremento);
    return incremento;
}

//5.3-creamos una funcion obtenerPlan para calcular segun el tipo de seguro
export function obtenerPlan( plan ) {
    return (plan === 'basico') ? 1.20 : 1.50;
}