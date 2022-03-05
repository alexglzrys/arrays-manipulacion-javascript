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
        customerName: 'Leonardo Reza Medina',
        total: 133,
        delivered: true
    },
];

// ? Map nos puede servir para recuperar parte de la información de un listado objeto

const totals = orders.map(order => order.total);

console.log('Orders', orders);
console.log('Totals', totals);


// ! Los objetos y arreglos en JS se pasan por referencia, por tanto, aunque Map sea INMUTABLE
// Al pasar un objeto y modificarlo internamente, este si se estaría MUTANDO.
// * Para prevenir esto, se recomienda hacer uso del SPREAD OPERATOR

/*
const taxes = orders.map(order => {
    order.tax = order.total * 0.16;
    return order
});

console.log('Taxes', taxes);
console.log('Orders', orders);
*/

// ? Map nos puede servir para agregar más propiedades con valores calculados a un listado de objetos
const taxes = orders.map(order => {
    return {
        ...order,
        tax: order.total * 0.16
    }
});

console.log('Taxes', taxes);
console.log('Orders', orders);