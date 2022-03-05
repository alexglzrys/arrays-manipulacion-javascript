const elements = [3,8,5,6,9,7,10,15,74,9,85];

/**
 * FIND
 * Busca un elemento dentro del arreglo
 * Retorna ese mismo elemento como resultado de la búsqueda
 * Si hay mas de un elemento que coincida con la condición de busqueda, retorna el primero que cumpla la condición
 * 
 * Si no encuentra elemento alguno, retorna undefined
 */

// ? Buscar si hay un elemento con el valor 9 dentro del arreglo
const search = elements.find(element => element === 9);

console.log('Elemento encontrado:', search);

const products = [
    {name: 'Papas fritas', code: 'LX30', price: 25.50},
    {name: 'Refresco de uva', code: 'LZ40', price: 15},
    {name: 'Hamburguesa con doble queso', code: 'LX89', price: 38}
];

const searchProduct = products.find(product => product.code === 'LX89');
console.log('Producto encontrado', searchProduct);

// ! Una variante es el método findIndex
/**
 * findIndex
 * Se encarga de localizar un elemento dentro del arreglo
 * Como resultado devuelve la posicion de ese elemento dentro del arreglo
 * Si existe más de uno, siempre devuelve la posicion del primer elemento encontrado
 * 
 * En caso de no encontrar coincidencia, devuelve -1
 */

const positionProduct = products.findIndex(product => product.code === 'LX89');
console.log('Posición elemento encontrado:', positionProduct);

