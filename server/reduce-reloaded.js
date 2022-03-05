const elements = [2,9,8,9,10,5,7,4,3,12,1,5,3,2,4,9,10,4,1,5];

// Reduce puede servirnos para generar histogramas
// Es decir un resumen de cuantas veces un elemento se repite dentro de un arreglo
// ? Para este caso el resultado será un objeto, el cuál se resume a un simple valor

const result = elements.reduce((obj, currentItem) => {
    // Si el elemento no se encuentra en el objeto, inicializamos a 1
    if (!obj[currentItem]) {
        obj[currentItem] = 1;
    } else {
        // En caso de encontrarse vamos sumando en 1 las veces que se repite
        obj[currentItem] += 1;
    }
    // Por cada iteración siempre debemos retornar nuestro acumulador (objeto)
    return obj
}, {});

console.log('Histograma 1:', result);


// ? Podemos usar map y reduce para saber cuantos usuarios tengo por cada nivel
const users = [
    {name: 'Alejandro', level: 'Hight'},
    {name: 'Lorena', level: 'Medium'},
    {name: 'Oscar', level: 'Hight'},
    {name: 'Tania', level: 'Low'},
    {name: 'Dulce María', level: 'Medium'}
];

const report = users.map(user => user.level)
                    .reduce((obj, level) => {
                        if (!obj[level])
                            obj[level] = 1;
                        else
                            obj[level] += 1;
                        return obj;
                    }, {});

console.log('Reporte', report);