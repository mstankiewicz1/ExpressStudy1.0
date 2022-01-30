// const add = (x , y) => x + y;
// const division = (number1, number2) => number1 / number2;

// const math  = (a, b, callback) => {
//     console.log(callback(a,b));
// };

// math(3, 4, add);
// math(5, 4, division);

// setTimeout(() => {
//     console.log('Co tam u Ciebie?');
// },2000);
// console.log('Hej!');

const fs = require('fs');
fs.readFile('./text.txt', 'utf8', (err, file) => console.log(file));
console.log('po odczytaniu ?');  


