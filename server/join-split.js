const elements = ['Fire', 'Air', 'Water', 'Earth'];

/**
 * JOIN
 * Une los elementos que se encuentran dentro del arreglo por un separador especificado
 * Como resultado se obtiene un string
 */

const cadena = elements.join('--');
console.log(cadena);

/**
 * SPLIT
 * Toma una cadena de texto, y la corta con base a un separador especificado.
 * dando como resultado un arreglo de elementos
 */
const texto = 'Bienvenidos al mundo de JavaScript! en el año 2022'
const slug = encodeURI(texto.split(' ').join('-').toLocaleLowerCase());
console.log(slug);