//advanced types 
//object types 
//1.class as type 2.interface as type 3.type keyword as type 

// class Product {
//     id: number
//     name: string
//     qty?: number
//     inStock?: boolean
// }

//interface as Type
// interface Product {
//     id: number
//     name: string
//     qty?: number
//     inStock?: boolean
// }
type Product = {
    id: number
    name: string
    qty?: number
    inStock?: boolean
}
//how to add type
let product: Product = {
    id: 1,
    name: 'Phone',
    //  qty: "100",,
    qty: 100,
    inStock: true
}
let myProduct: Product = {
    id: 1,
    name: 'Phone'
}