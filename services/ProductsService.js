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
        name: 'Bolo pote',
        price: 450,
        image: require('../assets/products/Bolo-no-pote.jpg'),
        description: 'Bom produto, com um alcance excelente e garantia inclusa'
    },
    {
        id: 103,
        name: 'Iphone 13',
        price: 110000,
        image: require('../assets/products/iphone-13.jpg'),
        description: 'O Ultimo modelo do iphone disponivel'
    },
    {
        id: 104,
        name: 'Jantes 18"',
        price: 50000,
        image: require('../assets/products/Jantes.jpg'),
        description: 'O melhor tipo de jante disponivel ao melhor preco'
    },
    {
        id: 105,
        name: 'Carros',
        price: 350000,
        image: require('../assets/products/Toyota-Ractis.jpg'),
        description: 'Toyota Ractis disponivel ao melhor preco'
    },
    {
        id: 106,
        name: 'Pneus',
        price: 30000,
        image: require('../assets/products/Pneus.jpg'),
        description: 'Todo o tipo de pneus e quase toda as referencias disponiveis'
    },
    {
        id: 107,
        name: 'Bolos',
        price: 1500,
        image: require('../assets/products/Bolo.jpg'),
        description: 'A Lolita bolos fornece bolos de melhor qualidade '
    },
];

export function getProducts() {
    return PRODUCTS;
}

export function getProduct(id) {
    return PRODUCTS.find((product) => (product.id == id));
}

