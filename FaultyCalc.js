let a = Number(prompt("Enter the first number: "));
let b = Number(prompt("Enter the second number: "));
let op = prompt("Enter the operation (+, -, *, /): ");
let random = Math.random();
console.log(random);
if (random < 0.4) {
  if (op == "+") {
    console.log(a - b);
  }
  if (op == "-") {
    console.log(a + b);
  }
  if (op == "*") {
    console.log(a / b);
  }
  if (op == "/") {
    console.log(a * b);
  }
} else {
  if (op == "+") {
    console.log(a + b);
  }
  if (op == "-") {
    console.log(a - b);
  }
  if (op == "*") {
    console.log(a * b);
  }
  if (op == "/") {
    console.log(a / b);
  }
  if (op == "%") {
    console.log(a % b);
  }
}
