const animals = ['Dog','Cat','Fish','Elephant','Cow'];

/**
 * INCLUDES
 * Se encuentra presente tanto en arreglos como en strings
 * Su función es comprobar que un determinado elemento se encuentre dentro del arreglo
 * Los valores que puede comprobar solo se limitan a números y string
 * Es case-sensitive
 * 
 * Si se desea verificar que un objeto se encuentre incluido dentro de un arreglo
 * lo mejor es usar find, o filter (conjunto de objetos similares)
 */

// ? Se encuentra presente un PESCADO dentro del arreglo
const result = animals.includes('Fish');

console.log('Existe un pescado en el arreglo:', result);