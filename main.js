const ProductManager = require("./Class/ProductManager")
const product1 = {
    title: "producto prueba",
    description:"Este es un producto prueba",
    price: 200,
    thumbnail: "Sin imagen",
    code: "abc123",
    stock: 25

}
const product2 = {
    title: "producto prueba",
    description:"Este es un producto prueba",
    price: 200,
    thumbnail: "Sin imagen",
    code: "2",
    stock: 25

}
const productManager = new ProductManager()
console.log(productManager.getProducts())
productManager.addProduct(product1)
console.log(productManager.getProducts())
// productManager.addProduct(product1)
productManager.addProduct(product2)
// console.log(productManager.getProductsById(2))