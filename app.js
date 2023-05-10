
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
	handler: function(argv) {
		notes.showNotes();
		
		
	}
	
})

// Creați comanda de citire a unei notițe:
// - Setați comanda de read pentru a lua un flag pentru titlu
// - În notes.js creați o metodă pentru citirea notițelor. Metoda va căuta o notiță după titlu, va afișa titlul și 
//  body-ul acesteia, iar dacă nu găsește nicio notiță va afișa un mesaj corespunzător.
// - Apelați metoda în handler-ul comenzii.

yargs.command({
	command: 'read',
	describe: 'citeste o notita',
	builder: {
		title: {
			describe: 'Titlul notitei',
			demandOption: true,
			type: 'string'
		}
	},
	handler: function(argv) {
	
		notes.giveNote(argv.title, argv.body);
	}
})

yargs.parse();



