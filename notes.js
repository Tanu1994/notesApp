const fs = require('fs');

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataString = dataBuffer.toString();
        return JSON.parse(dataString);
    } catch(e){
        return [];
    }  
}

const writeNotes = (notes) => {
    fs.writeFileSync('notes.json',JSON.stringify(notes));
}

const addNote = function(title, body) {
    // citim datele din fisier
    const notes = loadNotes();
    console.log(notes);
    // verificam existenta notitei in fisier
    const duplicateNotes = notes.filter(function (note) {
        return note.title === title;
    })
    if (duplicateNotes.length === 0) {
        // adaugam notita la obiectul javascript, si modificam fisierul
        notes.push({title: title, body: body});
        writeNotes(notes);
        console.log(`Adauga notite cu titlul: ${title} `, `cu continutul ${body} `);
    } else {
        console.log(`Notita cu titlul ${title} deja exista.`);
    }
    
    
}

module.exports = {
    addNote: addNote
}