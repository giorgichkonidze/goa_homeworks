const product = {
    id: 101,
    details: {
        name: 'laptop',
        price: 1200
    }
}
const { details: { name: productName, price: productPrice } } = product