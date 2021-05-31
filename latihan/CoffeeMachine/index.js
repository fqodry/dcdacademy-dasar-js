// const {coffeeStock, isCoffeeMachineReady} = require('./state'); // format CommonJS
import { coffeeStock as stock, isCoffeeMachineReady } from "./state.js"; // format ES6

// const makeCoffee = (type, miligrams) => {
//   if (coffeeStock[type] >= miligrams) {
//     console.log("Kopi berhasil dibuat!");
//   } else {
//     console.log("Biji kopi habis!");
//   }
// }

// const displayStock = stock => {
//   for(const type in stock)
//     console.log(type);
// }

// displayStock(coffeeStock);

// makeCoffee("robusta", 80);

console.log(stock);
console.log(isCoffeeMachineReady);
