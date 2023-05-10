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


const readNotes = (title) => {
  const notes = loadNotes();
  const note = notes.find((note) => note.title === title);

    if (note) {
      console.log(note.title, note.body)
    } else {
      console.log(`Notita nu a fost gasita`);
    }
}



module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNotes: readNotes,
};


// // Creați comanda de citire a unei notițe:
// - Setați comanda de read pentru a lua un flag pentru titlu
// - În notes.js creați o metodă pentru citirea notițelor. Metoda va căuta o notiță după titlu, va afișa titlul și body-ul acesteia, 
// iar dacă nu găsește nicio notiță va afișa un mesaj corespunzător.
// // - Apelați metoda în handler-ul comenzii.