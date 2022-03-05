const elements = [12,65,48,147,23,65,20,16,4,30];

/**
 * EVERY
 * Evalua si todos los elementos que se encuentran en el arreglo cumplen la condición dada
 * Solo retorna un valor booleano.
 */

// ? Verificar que todos los elementos del arreglo sean manores a 200
const result = elements.every(element => element < 200);

console.log('Todos son menores a 200:', result);

// ? Verificar que todos los integrantes del equipo sean menores o iguales a 15 años
const team = [
    {name: 'Jorge', age: 14},
    {name: 'Paul', age: 13},
    {name: 'Andrea', age: 16},
    {name: 'Vianey', age: 14}
];
const report = team.every(person => person.age <= 15);
console.log('El equipo cumple con la regla de edad:', report);