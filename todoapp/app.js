// console.log(process.argv.slice(2,3));

const parseArgs = require('minimist');
const colors = require('colors');

const command = parseArgs(process.argv.slice(2,3));
delete command._
// console.log(command);

const handleCommand = ({add, remove, list}) => {
    // console.log(add, remove, list);
    if(add) {
        if(typeof add !== "string") {
            return console.log("wpisz nazwę dodawanego zadania (tekst!!!)".red)
        } else if(add.length < 7) {
            return console.log("nazwa zadania musi mieć 6 znaków".red)
        }
        // handleData();
    } else if(remove) {
        if(typeof remove !== "string" || remove.length < 7) {
            return console.log("wpisz nazwę usuwanego zadania. To musi być tekst i musi mieć więcej niz 6 znaków".red);
        }
        console.log('będę usuwać');
    } else if(list || list === "") {
        handleData()
    } else {
        console.log('"Nie rozumiem polecenia. Uzyj --add="nazwa zadania", --remove="nazwa zadania" lub --nazwa opcji --list');
    }
};

handleData = () => {};
handleCommand(command);