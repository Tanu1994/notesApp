
const notes = require("./notes.js");
const removeNote = require('./remove.js');
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

		},
        body: {
            describe: 'Continutul notitei',
            demandOption: true,
            type: 'string'
        }
	},
	handler: function (argv) {
    notes.addNote(argv.title, argv.body)
    
	}
})



yargs.command({
	command: 'remove',
	describe: 'Sterge o notita',
	builder: {
		title: {
			describe: 'Titlul notitei',
			demandOption: true,
			type: 'string'
		}
	},
	handler: function(argv) {
		removeNote.removeNote(argv.title);
	}
})

yargs.command({
	command: 'list',
	describe: 'prezinta lista de notite',
	handler: function() {
		const note = notes.showNotes();
		console.log(`Notitele tale: ${note}`);
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



