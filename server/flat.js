const elements = [1,2,3,4,[5,7,7],8,[9,[10,11],12,[13,[14,15,[16,17,18]]]],19,20];

/**
 * FLAT
 * Permite aplanar un arreglo de arreglos, es decir, generar un arreglo lineal de elementos primitivos.
 * Para ello es importante especificar los niveles que debe sumerjise para aplanarlo
 */

const aplanado = elements.flat(4);
console.log(aplanado);

// ? Reto sin Flat
// Basicamente se trata de un proceso RECURSIVO, el cual se debe invocar cuando el elemento actual es un array
const result = [];
const aplanarArray = (array) => {
    array.forEach(element => {
        if (Array.isArray(element)) {
            aplanarArray(element)
        } else {
            result.push(element)
        }
    });
}
aplanarArray(elements);
console.log('Resultado:', result);
