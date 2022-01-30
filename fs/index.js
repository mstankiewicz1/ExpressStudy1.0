const fs = require("fs");
// fs.access('./names.txt', fs.constants.W_OK, (err) => {
//     console.log(err ? " plik nie istnieje" : "plik istnieje");
// });

// ACCESS
// fs.access('./zablokowany.txt', fs.constants.W_OK, (err) => {
//     console.log(err ? " plik nie można zapisywać" : "plik można zapisywać");
// });

// RENAME
// fs.rename('names.txt', 'imiona.txt', (err) => {
//     if(err) return console.log(err);
//     else console.log("nazwa zmieniona");
// });

// try {
//     fs.renameSync('imiona.txt', 'names.txt'); 
// } catch(err) {
//     console.log(err);
// }
// console.log("ok");

// READDIR
// console.log(fs.readdirSync('./'));

// fs.readdir('sfdsdfsdf', (err, files) => {
//     if(err) return console.log('Błąd: ', err);
//     console.log("Zawartość:", files);
// });

// READFILE
// fs.readFile('./imiona.txt', 'utf-8', (data, err) => {
//     console.log(data);
// });

// const names = fs.readFileSync('imiona.txt');
// console.log(names);

// WRITEFILE
// fs.readFile('names.txt', 'utf-8', (err, data) => {
//     if(err) return console.log("nie udało się");
//     fs.writeFile('users.txt', data, (err) => {
//         if(err) console.log(err);
//         else console.log("udało sie zapisac w pliku");
//     });
// });

// const names = "Jan, Jerzy";
fs.readFile('names.txt', 'utf-8', (err, data) => {
    console.log(data);
    fs.appendFile('users.txt', data, (err) => {
        if(err) console.log(err);
        else console.log("udało sie zapisac w pliku");
    });
});