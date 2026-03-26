const number = 400;
console.log(number);

const number2 = new Number(94589.9658);
console.log(number2);
console.log(typeof number2);

// many methods:
const number3 = number2.toString();
console.log(number3.length);
console.log(typeof number3);

console.log(number3.charAt(0));

let v = 9240.698;
console.log(number2.toFixed(2));
console.log(v.toPrecision(6));
console.log(typeof v.toPrecision(6));

const number4 = 1000;
console.log(number4.toLocaleString("en-IN"));

//  ++++++++++++++++++++++  MATHS  ++++++++++++++++++++++
console.log("Maths Department:");

console.log(Math.abs(-94));
console.log(Math.round(4.52));
console.log(Math.floor(4.8));
console.log(Math.ceil(4.2));
console.log(Math.ceil(4.8));
console.log(Math.sqrt(64));
let store = Math.max(6, 5);

if (store == 6) {
  console.log("i done it");
}
console.log(Math.min(6, 5));

console.log(3 + false);
console.log(3 + true);
