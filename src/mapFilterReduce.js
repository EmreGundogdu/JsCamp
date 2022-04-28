let cart = [
    { id: 1, productName: "Telefon", quantity: 5, unitPrice: 6000 },
    { id: 2, productName: "Bardak", quantity: 5, unitPrice: 7 },
    { id: 3, productName: "Kalem", quantity: 5, unitPrice: 5 },
    { id: 4, productName: "Kitap", quantity: 5, unitPrice: 10 },
    { id: 5, productName: "Defter", quantity: 5, unitPrice: 5 },
]

cart.map(p => { //foreach
    console.log(p.productName + " : " + p.unitPrice + " : " + p.quantity)
})

let quantityOver2 = cart.filter(p => p.quantity > 2) //where
console.log(quantityOver2)

//acc -> acculator
let total = cart.reduce((acc, product) => acc + product.unitPrice, 0) //her bir product için unitpriceleri toplayıp getirir



function addToCart(sepet) {
    sepet.push({ id: 7, productName: "Silgi", quantity: 5, unitPrice: 2 })
}

let sayi = 10;
function sayiyiTopla(number) {
    number += 1
}
sayiyiTopla(sayi)
console.log(sayi)