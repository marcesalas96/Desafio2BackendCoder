const ProductManager = require('./Class/ProductManager')

const productManager = new ProductManager("./db/products.json")
const product1 = {
    title: "producto prueba",
    description: "Este es un producto prueba",
    price: 200,
    thumbnail: "Sin imagen",
    code: "abc1233",
    stock: 25

}
const product2 = {
    title: "producto prueba 2",
    description: "Este es un producto prueba numero 2",
    price: 200,
    thumbnail: "Sin imagen",
    code: "2",
    stock: 25
}

const main = async () => {
    console.log(await productManager.loadData())
    await productManager.addProduct(product1)
    await productManager.addProduct(product2)
    console.log(await productManager.getProducts())
    console.log(await productManager.getProductsById(2))
    console.log( await productManager.updateProductById(1,{tittle: "Producto actualizado SOLO TITULO"}))
    await productManager.deleteProduct(1)
    console.log(await productManager.getProducts())
}

main()