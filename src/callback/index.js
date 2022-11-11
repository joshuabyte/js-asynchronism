//callbacks

function sum(num1, num2) {
  return num1 + num2;
}

function calc(num1, num2, callback) {
  return callback(num1, num2);
}

console.log(calc(2, 2, sum));

//set timeout

setTimeout(function () {
  console.log("Holi");
}, 2000);

function greeting (name) {
    console.log(`Hola ${name}`);
}

setTimeout(greeting, 2000, "Edgar");

//Example

function sum(num1, num2) {
    return num1 + num2;
}

function rest(num1, num2) {
    return num1 - num2;
}

function mult(num1, num2) {
    return num1 * num2;
}

function div(num1, num2) {
    return num1 / num2;
}

function calc(num1, num2, callback) {
    return callback(num1, num2);
};

console.log(calc(2, 2, sum));
console.log(calc(2, 2, rest));
console.log(calc(2, 2, mult));
console.log(calc(2, 2, div));