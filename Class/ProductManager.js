module.exports = class ProductManager {
    constructor(){
        this.products = []
    }
    addProduct(product){
        try {
            if (this.products.find(productCodeExist => product.code === productCodeExist.code) ){
                throw new Error(`El codigo ingresado ${product.code} ya esta asignado a otro producto`)
            } 
            if(Object.keys(product).length === 6 ){
                if(this.products.length === 0){
                    const id = 1
                    product.id = id
                    this.products.push(product)
                }
                else{
                    const lastIndex = (this.products.length - 1)
                    const lastId = this.products[lastIndex].id
                    product.id = (lastId + 1 )
                    this.products.push(product)   
                }
                return console.log(`Producto agregado exitosamente con ID: ${product.id}`)
            }
            else{
                throw new Error("Todos los campos son obligatorios")
            }
        } catch (error) {
            console.error(error)
        }
    }
    getProducts(){
        try {
            return this.products
        } catch (error) {
            console.error(error)
        }
    }
    getProductsById(id){
        try {
            const productById = this.products.find(product => product.id === Number(id))
            if(!productById){
                throw new Error(`Objecto con id ${id} no existe`)
            }
            return productById 
            
        } catch (error) {
            console.error(error)    
        }
    }
}
