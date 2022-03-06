// https://es.piliapp.com/emoji/list/

const products = [
    {id: '🍕', title: 'Pizza', price: 20},
    {id: '🌮', title: 'Taco', price: 18},
    {id: '🍩', title: 'Dona', price: 15}
];

const shoppingCart = [];

console.log('Products:', products);
console.log('Shopping Cart:', shoppingCart);
console.log('---------------------');

// ? Buscar un elemento, colocarlo en el carrito y eliminarlo del estante (MUTABLE)

// Localizar el indice del producto dentro del arreglo, eliminarlo de productos y colocarlo en el carrito de compra
const productIndex = products.findIndex(product => product.id = '🌮');
if (productIndex !== -1) {
    const selectedProduct = products.splice(productIndex, 1);
    shoppingCart.push(...selectedProduct);
}

console.log('Buscar')
console.log('Products:', products);
console.log('Shopping Cart:', shoppingCart);
console.log('---------------------');

// ? Actualizar información de un producto (MUTABLE)

// Buscar el indice del producto dentro del arreglo, desestructurar su información actual sumada a la nueva información.
const newData = {
    id: '🍩',
    changes: {
        description: 'Dona rellena de piña y cubierta de chocolate con acabado de chochitos de sabor a frutas',
        price: 25
    }
};

const getIndex = products.findIndex(product => product.id === newData.id);
if (getIndex !== -1) {
    products[getIndex] = {
        ...products[getIndex],
        ...newData.changes
    }
}

console.log('Actualizar')
console.log('Products:', products);
console.log('Shopping Cart:', shoppingCart);
console.log('---------------------');


// ! Procesos INMUTABLES

const productsInmutable = [
    {id: '🍕', title: 'Pizza', price: 20},
    {id: '🌮', title: 'Taco', price: 18},
    {id: '🍩', title: 'Dona', price: 15}
];
let newProducts = [];
const shoppingCartNew = [];

console.log('***** INMUTABLE *****')
console.log('Products Inmutable:', productsInmutable);
console.log('Shopping Cart New:', shoppingCartNew);
console.log('---------------------');
const productIndexInmutable = productsInmutable.findIndex(product => product.id === '🌮');

if (productIndexInmutable !== -1) {
    newProducts = [...newProducts, productsInmutable[productIndexInmutable]];
    shoppingCartNew.push(productsInmutable[productIndexInmutable]);
}

console.log('Buscar INMUTABLE')
console.log('Products Inmutable:', productsInmutable);
console.log('New Products:', newProducts);
console.log('Shopping Cart New:', shoppingCartNew);
console.log('---------------------');

const newDataDonut = {
    id: '🍩',
    changes: {
        description: 'Dona rellena de piña y cubierta de chocolate con acabado de chochitos de sabor a frutas',
        price: 25
    }
};
let productsImutableNew = [...productsInmutable]

const getIndexInmutable = productsInmutable.findIndex(product => product.id === newDataDonut.id);
if (getIndexInmutable !== -1) {
    // Obtengo una clon de los elementos actuales en el arreglo (evita mutar los objetos internos)
    productsImutableNew = [...productsImutableNew];
    // Este es un nuevo objeto independiente, por tanto lo podemos actualizar sin sobre-escribir el original
    productsImutableNew[getIndexInmutable] = {
        ...productsImutableNew[getIndexInmutable],
        ...newDataDonut.changes
    }
}


console.log('Actualizar Inmutable')
console.log('Products Inmutable:', productsInmutable);
console.log('Products Inmutable New:', productsImutableNew);
console.log('Shopping Cart New:', shoppingCartNew);
console.log('---------------------');

const newDataPizza = {
    id: '🍕',
    changes: {
        description: 'Pizza cruzelli special',
        price: 267
    }
};
const getIndexInmutable2 = productsInmutable.findIndex(product => product.id === newDataPizza.id);
if (getIndexInmutable2 !== -1) {
    productsImutableNew = [...productsImutableNew];
    productsImutableNew[getIndexInmutable2] = {
        ...productsImutableNew[getIndexInmutable2],
        ...newDataDonut.changes
    }
}

console.log('Actualizar Inmutable')
console.log('Products Inmutable:', productsInmutable);
console.log('Products Inmutable New:', productsImutableNew);
console.log('Shopping Cart New:', shoppingCartNew);
console.log('---------------------');
