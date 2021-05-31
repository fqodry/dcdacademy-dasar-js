// const p1 = () => {
//   console.log("p1 berhasil dijalankan...");
// };

// const p2 = (callback) => {
//   setTimeout(() => {
//     console.log("p2 mulai dijalankan...");
//     console.log("p2 berhasil dijalankan.");
//     callback();
//   }, 200);
// };

// const p3 = () => {
//   console.log("p3 berhasil dijalankan...");
// };

// p1();
// p2(p3);

// const requestAjax = (callback) => {
//   var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
//   var xhr = new XMLHttpRequest();

//   xhr.open('GET', 'https://jsonplaceholder.typicode.com/users/1');

//   xhr.onload = () => {
//     if (xhr.status == 200)
//       callback(xhr.responseText)
//     else
//       callback('Failed')
//   }
//   xhr.send();
// };

// const showResult = (data) => {
//   if (data != 'Failed') {
//     data = JSON.parse(data);
//     console.log(data);
//   }
// };

// requestAjax(showResult);

const orderCoffee = (callback) => {
  let coffee = null;

  console.log("Sedang membuat kopi, silakan tunggu...");

  setTimeout(() => {
    coffee = "Kopi sudah jadi!";
    callback(coffee);
  }, 3000);
};

// const coffee = orderCoffee();
// console.log(coffee);

orderCoffee(coffee => {
  console.log(coffee);
});