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

// function topla(sayi1, sayi2) {
//      let sonuc = sayi1 + sayi2
//      console.log(sonuc)
//     console.log(sayi1 + sayi2)
// }
// topla(3, 5)

function add(something, ...numbers) { //rest operatörü
    let toplam = 0
    for (let index = 0; index < numbers.length; index++) {
        toplam += numbers[index]
    }
    console.log(something)
    console.log(toplam)
}
add(123, 30, 40)


let bolgeler = ["İç Anadolu", "Marmara", "Ege", "Akdeniz"]
console.log(bolgeler[0])

let [icAnadolu, marmara, ege, [icAnadoluSehirleri]] = [{ name: "İc Anadolu", population: "20M" }, { name: "Marmara", population: "40M" }, { name: "Ege", population: "10M" },
[
    ["Ankara", "Konya"],
    ["istanbul", "Bursa"],
    ["Aydın", "İzmir"],

]]
console.log(icAnadolu.name)
console.log(marmara.name)
console.log(ege.name)

console.log(icAnadoluSehirleri)



let newName, newModel
({ name: newName, model: newModel } = { name: "Mercedes", model: "E Series" })

console.log(newName)