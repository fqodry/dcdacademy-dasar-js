// const executorFunction = (resolve, reject) => {
//   const isCoffeeMakerReady = false;
//   if (isCoffeeMakerReady) {
//     resolve("Kopi berhasil dibuat");
//   } else {
//     reject({
//       "error-code": "01",
//       "error-name": "Mesin tidak bisa digunakan"
//     });
//   }
// };

// const makeCoffee = () => {
//   return new Promise(executorFunction);
// };

// const coffeePromise = makeCoffee();
// console.log(coffeePromise);

// coffeePromise.then(() => {
//   console.log("Promise is resolve");
// }).catch(() => {
//   console.error("Promise are rejected...");
// });


// CONSUMING PROMISES
// const stock = {
//   coffeeBeans: 250,
//   water: 1000
// };

// const checkStock = new Promise((resolve, reject) => {
//   if (stock.coffeeBeans >= 16 && stock.water >= 250) {
//     resolve("Stok cukup. Bisa membuat kopi");
//   } else {
//     reject("Stok tidak cukup");
//   }
// });

// const successHandler = resolvedValue => {
//   console.log("SUCCESS:" + resolvedValue);
// };

// const failureHandler = rejectionReason => {
//   console.log("FAILURE:" + rejectionReason);
// };

// success & failure handler in then
// checkStock.then(successHandler, failureHandler);

// seperate the success handler and failure handler w/ then and catch (onRejected with Catch Method)
// checkStock.then(successHandler).catch(failureHandler);



// CHAINING PROMISE
const state = {
  stock: {
    coffeeBeans: 250,
    water: 1000
  },
  isCoffeeMachineBusy: false,
  isCoffeeGrindMachineBusy: false
};

const checkAvailability = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (! state.isCoffeeMachineBusy) {
        resolve("Mesin kopi siap digunakan.");
      } else {
        reject("Maaf, mesin sedang sibuk.")
      }
    }, 1000);
  });
};

const checkStock = () => {
  return new Promise((resolve, reject) => {
    state.isCoffeeMachineBusy = true;
    setTimeout(() => {
      if (state.stock.coffeeBeans >= 16 && state.stock.water >= 250) {
        resolve("Stok cukup. Bisa membuat kopi.");
      } else {
        reject("Stok tidak cukup!");
      }
    }, 1500);
  });
};

const boilWater = () => {
  return new Promise((resolve, reject) => {
    console.log("Memanaskan air...");
    setTimeout(() => {
      resolve("Air panas sudah siap!");
    }, 2000);
  });
};

const grindCoffeeBeans = () => {
  return new Promise((resolve, reject) => {
    state.isCoffeeGrindMachineBusy = true;
    console.log("Menggiling biji kopi...");
    setTimeout(() => {
      resolve("Biji kopi sudah digiling!");
    }, 1000);
  });
};

const brewCoffee = () => {
  console.log("Membuatkan kopi Anda...");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Kopi sudah siap!");
    }, 2000);
  });
};

const makeEspresso = () => {
  checkAvailability()
    .then((value) => {
      console.log(value);
      return checkStock();
    })
    .then((value) => {
      console.log(value);
      const promises = [boilWater(), grindCoffeeBeans()];
      return Promise.all(promises);
    })
    .then((value) => {
      console.log(value);
      state.isCoffeeGrindMachineBusy = false;
      return brewCoffee();
    })
    .then(value => {
      console.log(value);
      state.isCoffeeMachineBusy = false;
    })
    .catch(rejectionReason => {
      console.error(rejectionReason);
      state.isCoffeeMachineBusy = false;
    });
};

makeEspresso();