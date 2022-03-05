const sales = [100,150,490,755,185,4153,234,-55.50];

/**
 * REDUCE
 * Permite reducir un arraglo a un solo elemento.
 * Generalmente se le usa para sumatorias, cuyos valores asociados se encuentran dentro del arreglo
 * 
 * Recibe un callback, cuyos parámetros son el acumulador, elementoActual.
 * Internamente en la función se hace la operacion por cada elemento en el array
 * El segundo parámetro es el valor inicial del acumulador
 */

// ? Sumar todos los elementos que se encuentran en el arreglo
const total = sales.reduce((acumulador, ventaActual) => acumulador + ventaActual, 0);

console.log('Total $', total);