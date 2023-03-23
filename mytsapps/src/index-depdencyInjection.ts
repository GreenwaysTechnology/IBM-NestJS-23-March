//has a with layers
//service,controller

//object type
class Product {
    id: number;
    name: string;
    qty: number;
    price: number;
    inStock?: boolean; //optional property
}

class ProductService {
    constructor() {

    }
    //product apis
    findAll(): Array<Product> {
        return [{ id: 1, name: 'phone', qty: 10, price: 10000, inStock: true }]
    }
}

class ProductController {
    //type of variable is ProductService
    //depedency injection
    //
    // a:number
    productService: ProductService
    constructor(productService?: ProductService) {
        this.productService = productService
    }
    //api for controllers
    init(): void {
        //call product service method
        this.productService.findAll().forEach(product => {
            console.log(product.id, product.name, product.price, product.inStock)
        })
    }
}
//create instance 
let productService = new ProductService();
//dependency injection
let productCtrl = new ProductController(productService)
productCtrl.init()
