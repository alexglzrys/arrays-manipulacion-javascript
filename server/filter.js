const names = ['Alejandro', 'Mónica', 'Rafael', 'Daniela', 'Luis', 'Marco Antonio'];

/**
 * Filter es un método INMUTABLE
 * Hace uso de una función (callback) que actua como condicional
 * Si la condición se cumple, el elemento se considera como parte del nuevo arreglo filtrado
 */

// Filtrar los nombres que contengan 8 o más caracteres
const result = names.filter(name => name.length >= 8);

console.log('Original', names);
console.log('Contienen 8 o más caracteres', result);

const orders = [
    {
        customerName: 'Alejandro González Reyes',
        total: 599,
        delivered: true
    },
    {
        customerName: 'Natalia Romero Valle',
        total: 2099,
        delivered: false
    },
    {
        customerName: 'Daniela Villavicencio Fernández',
        total: 6982,
        delivered: true
    },
    {
        customerName: 'Leonardo Valle Medina',
        total: 133,
        delivered: true
    },
];

// Filtrar aquellas ordenes que se hayan entregado y que su total sea mayor o igual a $2000
const filtrados = orders.filter(order => order.delivered && order.total >= 2000);

console.log('Ordenes originales', orders);
console.log('Ordenes filtradas', filtrados);

// Función que filtra ordenes de compra por coincidencia de nombre
const search = (query) => {
    return orders.filter(order => order.customerName.trim().toLocaleLowerCase().includes(query.toLocaleLowerCase()));
}

console.log('Buscar por AN', search('AN'))
console.log('Buscar por VALLE', search('VALLE'))