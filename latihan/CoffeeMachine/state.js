const coffeeStock = {
  arabica: 100,
  robusta: 150,
  liberica: 200
}

const isCoffeeMachineReady = true;

// module.exports = {coffeeStock, isCoffeeMachineReady}; // format CommonJS
export {coffeeStock, isCoffeeMachineReady}; // format ES6