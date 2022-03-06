/**
 * SORT
 * Ordena los elementos dentro de un array con base en la tabla ASCII
 * https://theasciicode.com.ar/
 * 
 * Por ello es común que cuando se orden números aparezcan primero los de la serie 0, seguidos los de la serie 1, etc
 * Para estos casos, se pasa un callback que sirve como funcion de comparación
 * Sort es un método mutable
 */

const names = ['Daniel', 'Alberto', 'Laura', 'Marlen', 'Alejandro']
names.sort();
console.log('Ordenar Textos:', names);

const numbers = [5,1,9,10,98,25,2,36,398,51,904,90.68,2.90];
numbers.sort();
console.log('Números ordenados con base en la tabla ASCII:', numbers)
numbers.sort((a,b) => a - b);   // Orden Ascendente
console.log('Números ascendente:', numbers)
numbers.sort((a,b) => b - a);   // Orden Descendente
console.log('Números descendente:', numbers);

const namesSpecial = ['González', 'Fátima', 'Toño', 'Hernández'];
namesSpecial.sort();
console.log('Orden caracteres especiales:', namesSpecial);
// En versiones pasadas de JS es necesario comparar estos elementos con base a la regíon o idioma especificao
namesSpecial.sort((a,b) => a.localeCompare(b));
console.log('Orden caracteres especiales con base a la región:', namesSpecial)

const orders = [
    {
        customerName: 'Alejandro González Reyes',
        total: 599,
        date: new Date(2022,3,5,10),
        delivered: true
    },
    {
        customerName: 'Natalia Romero Valle',
        total: 2099,
        date: new Date(2022,2,14,17,30),
        delivered: false
    },
    {
        customerName: 'Daniela Villavicencio Fernández',
        total: 6982,
        date: new Date(2022,3,5,8,45),
        delivered: true
    },
    {
        customerName: 'Leonardo Valle Medina',
        total: 133,
        date: new Date(2022,3,3,12),
        delivered: true
    },
]
orders.sort((a,b) => b.total - a.total);
console.log('Ordenes de compra ordenadas por total de forma descendente', orders);

orders.sort((a,b) => b.date - a.date)
console.log('Ordenes de compra ordenadas por la más reciente:', orders);