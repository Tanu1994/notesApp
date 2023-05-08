const notesFunction = require('./notes.js');
let newNotes = []
const removeNote = (title) => {
	const notes = notesFunction.loadNotes();
	for(let i = 0; i < notes.length; i++) {
		if (notes[i].title !== title) {
			newNotes.push(notes[i])
		} else {
			console.log(`Notita cu titlul: ${title} a fost stersa`) 
		}
		
	}
	notesFunction.writeNotes(newNotes);
	// console.log(`Notita cu titlul ${title} nu exista sau ati indicat un titlu ne existent`);
}

module.exports = {
	removeNote: removeNote
}