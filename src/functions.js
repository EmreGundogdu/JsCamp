function addToCart(quantity, productName = "Elma") {
    console.log("Adet: " + quantity + " eklenen: " + productName)
}
addToCart(10)

let hello = () => {
    console.log("Merhaba")
}
hello()
let hello2 = () => {
    console.log("Merhaba hello2")
}

function addToCart2(productName, quantity, unitPrice) {

}
addToCart2("Bmw", 1, 50000)


let product1 = {
    productName: "Bmw",
    unitPrice: 50000,
    quantity: 1
}
function addToCart3(product) {
    console.log("Adı: " + product1.productName + " Fiyat: " + product1.unitPrice + " Adet: " + product1.quantity)
}
addToCart3(product1)


function addToCart4(x) {
    console.log(x)
}
let urunler = [
    { productName: "PC", price: 1500, quantity: 20 },
    { productName: "Telefon", price: 3500, quantity: 20 },
    { productName: "Software", price: 2500, quantity: 20 }
]
addToCart4(urunler)