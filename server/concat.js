const animals = ['Dog','Cat','Dolphin','Parrot','Bird'];
const persons = ['Pedro','Lorena','Dulce'];
const languages = ['PHP','MYSQL','JAVASCRIPT','HTML'];

/**
 * CONCAT
 * Permite unir dos o mas arreglos en uno solo
 * Es completamente INMUTABLE
 * Es decir como resultado de la fusión entrega un nuevo arreglo
 */

const fusion = animals.concat(persons, languages);
console.log('Fusion:', fusion);


// ? Formas alternativas de hacer exactamente lo mismo pero con SPREAD OPERATOR

const newArray = [...animals, ...persons, ...languages];
console.log('Spread Operator:', newArray);


// ! No es malo MUTAR el arreglo original, siempre y cuando seamos conscientes de lo que estamos haciendo
// * Se hace uso del Spread Operator para no empujar el arreglo completo, solo me interesa los elementos

animals.push(...persons, ...languages);
console.log('Push:', animals);
