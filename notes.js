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
    console.log(`Adauga notite cu titlul: ${title} `, `cu continutul ${body} `);

    // citim datele din fisier
    const notes = loadNotes();
    console.log(notes);
    // verificam existenta notitei in fisier
    // adaugam notita la obiectul javascript, si modificam fisierul
    notes.push({title: title, body: body});
    writeNotes(notes);
    
}

module.exports = {
    addNote: addNote
}