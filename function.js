// function addition(x, y) {
//     console.log(x + y);
// }

const { getSum } = require('./calculation.js');
const { getSqr } = require('./calculation.js');
const { getCube } = require('./calculation.js');

// function subtraction(x, y) {
//     console.log(x - y);
// }

// function multiplication(x, y) {
//     console.log(x * y);
// }

// function division(x, y) {
//     console.log(x / y);
// }


// x = parseInt(process.argv[2]);
// y = parseInt(process.argv[3]);
// addition(x, y);
// subtraction(x, y);
// multiplication(x, y);
// division(x, y);


//addition shou be outside the fnction

data = require('./calculation.js'); //variable it is used to call a function


function addition(x, y) {
    return (x + y);
}

x = parseInt(process.argv[2]);
y = parseInt(process.argv[3]);

z = getSum(x, y);
a = getSqr(x, y);
b = getCube(x, y);
console.log(z);
console.log(a);
console.log(b);