const animals = ['Vaca', 'Gallina', 'Pescado', 'Cerdo'];

/**
 * El método Map permite transformar los elementos de un array.
 * Es un método inmutable, es decir no altera el arreglo original, sino que genera otro con los resultados del mapeo
 */
const foods = animals.map(animal => 'Cocinando ' + animal);

console.log('Animals', animals)
console.log('Platillos', foods);