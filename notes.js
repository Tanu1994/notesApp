const fs = require('fs');

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataString = dataBuffer.toString();
    return JSON.parse(dataString);
  } catch (e) {
    return [];
  }
};

const writeNotes = (notes) => {
  fs.writeFileSync('notes.json', JSON.stringify(notes));
};

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find((note) => note.title === title);

  if (!duplicateNote) {
    notes.push({ title: title, body: body });
    writeNotes(notes);
    console.log(`Adaugă notițe cu titlul: ${title} și conținutul: ${body}`);
  } else {
    console.log(`Notița cu titlul ${title} există deja.`);
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  const filteredNotes = notes.filter((note) => note.title !== title);

  if (notes.length > filteredNotes.length) {
    writeNotes(filteredNotes);
    console.log(`Notița cu titlul ${title} a fost ștearsă.`);
  } else {
    console.log(`Nu există nicio notiță cu titlul ${title}.`);
  }
};

const listNotes = () => {
  const notes = loadNotes();

  if (notes.length > 0) {
    console.log("Notitele tale:");
    notes.forEach((note) => {
      console.log(note.title);
    });
  } else {
    console.log("Nu exista nicio notita.");
  }
};


module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
};