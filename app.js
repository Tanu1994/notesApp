const yargs = require('yargs');
console.log("Hello!");
yargs.version('1.1.0');

yargs.command({
    command: "add",
    describe: "Adaugarea unei notite",
    handler: function() {
        console.log('Adaugare notita');
    }
})

console.log(yargs.argv);