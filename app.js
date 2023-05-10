const notes = require("./notes.js");
const yargs = require('yargs');

yargs.version('1.1.0');

yargs.command({
  command: 'add',
  describe: 'Adaugare unei notite',
  builder: {
    title: {
      describe: 'Titlul notitei',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'Continutul notitei',
      demandOption: true,
      type: 'string',
    },
  },
  handler: function (argv) {
    notes.addNote(argv.title, argv.body);
  },
});

yargs.command({
  command: 'remove',
  describe: 'Sterge o notita',
  builder: {
    title: {
      describe: 'Titlul notitei',
      demandOption: true,
      type: 'string',
    },
  },
  handler: function (argv) {
    notes.removeNote(argv.title);
  },
});


yargs.command({
  command: 'list',
  describe: 'prezinta lista de notite',
  handler: function () {
    notes.listNotes();
  },
});

yargs.command({
  command: 'read',
  describe: 'citeste o notita',
  builder: {
    title: {
      describe: 'afiseaza notita',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function (argv) {
  notes.readNotes(argv.title);
  },
});

yargs.parse();