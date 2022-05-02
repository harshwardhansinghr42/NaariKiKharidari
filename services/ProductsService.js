const PRODUCTS = [
    {
        id: 100,
        name: 'Wedding Poshak',
        price: 11350,
        image: require('../assets/images/poshak1.jpeg'),
        description: 'A headset combines a headphone with microphone. Headsets are made with either a single-earpiece (mono) or a double-earpiece (mono to both ears or stereo).'
    },
    {
        id: 101,
        name: 'Casual Summer',
        price: 1600,
        image: require('../assets/images/poshak2.jpeg'),
        description: 'A model car, or toy car, is a miniature representation of an automobile. Other miniature motor vehicles, such as trucks, buses, or even ATVs, etc. are often included in this general category.'
    },
    {
        id: 102,
        name: 'Diwali Poshak',
        price: 1222,
        image: require('../assets/images/poshak3.jpeg'),
        description: 'A cupcake (also British English: fairy cake; Hiberno-English: bun; Australian English: fairy cake or patty cake[1]) is a small cake designed to serve one person.'
    }
];
export function getProducts() {
    return PRODUCTS;
}
export function getProduct(id) {
    return PRODUCTS.find((product) => (product.id == id));
}