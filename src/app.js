console.log("Merhaba");

let dolarDun = 9.2;
let dolarBugun = 9.3;
{
  let dolarDun = 9.1;
}
//JS Type Safe değildir(Tip Güvenliği)
console.log(dolarDun);

const euroDun = 11.1;

let konutKredileri = [12, "Emlak Konut Kredisi", ["a", "b", "c"]];
for (let i = 0; i < 3; i++) {
  console.log("<li>" + konutKredileri[i] + "</li>");
}
//camelCase
//PascalCase
console.log(konutKredileri);
