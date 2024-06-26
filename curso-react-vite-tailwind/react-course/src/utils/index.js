/**
 * this function calculates total price of a new order
 * @param {Array} products Array or objects
 * @returns {number} total price
 */
function totalPrice(products) {
    let sum = 0;
    products.forEach(product => sum += product.price);
    return sum;
}

export { totalPrice }