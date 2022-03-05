const elements = [1,2,3,4];

/**
 * SOME
 * Permite saber si por lo menos alguno de los elementos que se encuentra en el arreglo
 * cumple con una determinada condición.
 * Solo retorna un valor booleano dependiendo si se cumple o no la condición
 */

// ? Verificar si por lo menos tengo un número par dentro del arreglo
const result = elements.some(number => number % 2 === 0);

console.log('Existe por lo menos un número par:', result);

// ? Verificar si por lo menos alguna de las ordenes de compra fue entregada
const orders = [
    {
        customerName: 'Alejandro González Reyes',
        total: 599,
        delivered: false
    },
    {
        customerName: 'Natalia Romero Valle',
        total: 2099,
        delivered: true
    },
    {
        customerName: 'Daniela Villavicencio Fernández',
        total: 6982,
        delivered: true
    },
    {
        customerName: 'Leonardo Reza Medina',
        total: 133,
        delivered: false
    },
];

const report = orders.some(order => order.delivered);

console.log('Se entregó al menos una orden de compra:', report);


// ! Al fusionar librerías con funciones de fechas, podemos saber si alguna fecha y hora propuesta colapsa o se empalma con otra
// * https://date-fns.org/  |   https://github.com/date-fns/date-fns
/**
 * Librería con funciones de utilidad para el trabajo con fechas
 */

// Función que verifica si un rango de fecha y hora se colapsa con otro rango dado
 var areIntervalsOverlapping = require('date-fns/areIntervalsOverlapping')

 const agenda = [
     {
         startDate: new Date(2022, 3, 5, 10, 30),
         endDate: new Date(2022, 3, 5, 11),
         title: 'Cita de trabajo'
     },
     {
        startDate: new Date(2022, 3, 5, 11, 30),
        endDate: new Date(2022, 3, 5, 13, 30),
        title: 'Clase de programación'
    },
    {
        startDate: new Date(2022, 3, 5, 14),
        endDate: new Date(2022, 3, 5, 15, 30),
        title: 'Comida con la familia'
    },
    {
        startDate: new Date(2022, 3, 5, 16),
        endDate: new Date(2022, 3, 5, 20),
        title: 'Doctorado'
    },
    {
        startDate: new Date(2022, 3, 5, 20, 30),
        endDate: new Date(2022, 3, 5, 21, 30),
        title: 'Gimnasio'
    }
 ];

 const nuevaCita = {
     startDate: new Date(2022, 3, 5, 9, 40),
     endDate: new Date(2022, 3, 5, 10, 15)
 };

 const citaColapsada = agenda.some(cita => {
     return areIntervalsOverlapping(
         {start: nuevaCita.startDate, end: nuevaCita.endDate},
         {start: cita.startDate, end: cita.endDate}
     );
 })

 console.log('Se agendó la nueva cita:', !citaColapsada);