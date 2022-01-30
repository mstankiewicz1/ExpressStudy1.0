// // http://numbersapi.com/random/year?json

// // const fetch = require('node-fetch');
// // import fetch from "node-fetch";

// // // JAK USTALIĆ CO WPISALIŚMY?
// // // console.log(process.argv);


// // const year = process.argv[2] || Math.floor(Math.random() * 2020);
// // // console.log(year);

// // fetch(`http://numbersapi.com/${year}/year?json`)
// // .then(response=> response.json())
// // .then(data => console.log(data.text))
// // .catch(error => console.log(error))

// // ZADANIE 2
// // http://numbersapi.com/${random}/${type}?json
// // console.log(process.argv);

// import fetch from "node-fetch";
// const arg = process.argv[2];
// let type = "";

// if(arg.indexOf("--year") === 0){
//     console.log("szukamy informacji o roku...");
//     type = "year";
// } else if(arg.indexOf("--math") === 0){
//     console.log("szukamy roku o liczbie...");
//     type = "math";
// } else if(arg.indexOf("--trivia") === 0){
//     console.log("szukamy liczby-ciekawostki...");
//     type = "trivia";
// };

// const equalSign = arg.search('=');
// // console.log(equalSign);
// if(equalSign === -1) console.log('nie wpisałeś liczby!!!');

// const number = arg.slice(equalSign + 1) || 1;
// // console.log(number);

// // if(number === "" || isNaN(Number(number))) {
// //     console.log("to nie jest liczba");
// //     process.exit();
// // };

// fetch(`http://numbersapi.com/${number}/${type}?json`)
// .then(response => {
//     if(response.ok) {
//         return response.json()
//     } else {
//         throw new Error("ooo coś nie tak: " + response.status)
//     }
//     // console.log("Coś jest nie tak: ", response.status);
// }) 
// .then(response => console.log(response.txt))
// .catch(err => console.log("Błąd: " + err))

// ZADANIE 3 - NPB API
// `http://api.nbp.pl/api/exchangerates/rates/a/${code}/`
const request = require("request");

const validCodes = ['usd', 'eur', 'gbp', 'chf'];

const code = process.argv[2];

console.log(code);

