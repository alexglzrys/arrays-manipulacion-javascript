const users = [
    {username: 'Robert', name: 'Roberto', languages: ['HTML', 'CSS']},
    {username: 'Mari', name: 'María del Refugio', languages: ['JavaScript', ['Angular', 'VueJS']]},
    {username: 'Alex', name: 'Alejandro', languages: ['HTML', 'CSS', ['JavaScript', 'Angular', 'Ionic'], 'PHP', 'MySQL']}
];

/**
 * FLATMAP
 * Mapea los elementos de un arreglo, y a ese resultado
 * le aplana los datos a un nivel de produndidad 1.
 * 
 * Es como un map seguido de un flat de nivel 1
 * 
 * FLAT Y FLATMAP permiten aplanar o alinear arreglos que internamente tienen otros arreglos anidados,
 */

const flatmap = users.flatMap(user => user.languages );
console.log('flatMap: ', flatmap);

const map_flat = users.map(user => user.languages).flat(2);
console.log('Map y Flat: ', map_flat);


// ? Mapear elementos para obtener las fechas de inicio y Aplanar el resultado
const dates = {
    primaryCalendar: [
        {startDate: new Date(2022,3,5,10), endDate: new Date(2022,3,5,10,30), title: 'cita con el médico'},
        {startDate: new Date(2022,3,5,12), endDate: new Date(2022,3,5,12,45), title: 'refrigerio'},
        {startDate: new Date(2022,3,5,13), endDate: new Date(2022,3,5,14,30), title: 'clase de música'},
    ],
    secondaryCalendar: [
        {startDate: new Date(2022,3,6,10), endDate: new Date(2022,3,6,12,30), title: 'clase de programación'},
        {startDate: new Date(2022,3,6,17), endDate: new Date(2022,3,6,19), title: 'juego de futbol soccer'},
    ]
}

const datesStart = [];
for (const key in dates) {
    if (dates.hasOwnProperty.call(dates, key)) {
        const element = dates[key];
        datesStart.push(...element.flatMap(element => element.startDate))
    }
}
console.log('Fechas de inicio:', datesStart);

// ! Podemos convertir un objeto a un arreglo con la ayuda de Object.values, o con Object.keys.
// ! Todo depende si queremos que los elementos del arreglo sean los valores que estan en las propiedades del objeto, o el nombre de sus propiedades
const objetoToArreglo = Object.values(dates);
console.log('Objeto a Arreglo: ', objetoToArreglo);

const fechasInicio = Object.values(dates).flat().flatMap(data => data.startDate);
console.log('Fechas de inicio - métodos anidados', fechasInicio);