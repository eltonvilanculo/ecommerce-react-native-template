const PRODUCTS = [
    {
        id: 100,
        name: 'HeadPhones da JBL',
        price: 3500,
        image: require('../assets/products/headset-100.jpg'),
        description: 'Bom produto, com um alcance excelente e garantia inclusa'
    },
    {
        id: 101,
        name: 'BMW 325I Dub edition',
        price: 250000,
        image: require('../assets/products/car.jpg'),
        description: 'Bom produto, com um alcance excelente e garantia inclusa'
    },
    {
        id: 102,
        name: 'Bolo no pote',
        price: 450,
        image: require('../assets/products/cake-102.jpg'),
        description: 'Bom produto, com um alcance excelente e garantia inclusa'
    }
];

export function getProducts() {
    return PRODUCTS;
}

export function getProduct(id) {
    return PRODUCTS.find((product) => (product.id == id));
}

