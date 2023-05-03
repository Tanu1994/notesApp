const yargs = require('yargs');
console.log("Hello!");
yargs.version('1.1.0');

yargs.command({
	command: 'add',
	describe: 'Adaugare unei notite',
	builder: {
		title: {
			describe: 'Titlul notitei',
			demandOption: true,
			type: 'string'
		}
	},
	handler: function (argv) {
		console.log(`Adauga notite cu titlul: ${argv.title} `);
	}
})
yargs.command({
	command: 'remove',
	describe: 'Sterge o notita',
	handler: function() {
		console.log('sterge notita');
	}
})
yargs.command({
	command: 'list',
	describe: 'prezinta lista de notite',
	handler: function() {
		console.log('lista de notite');
	}
})
yargs.command({
	command: 'read',
	describe: 'citeste o notita',
	handler: function() {
		console.log('prezinta notita');
	}
})

yargs.parse();