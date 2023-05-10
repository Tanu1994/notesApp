const square = (x) => x*x;

console.log(square(3));

const eveniment = {
    nume: 'Nunta',
    invitati: ['Mihai', 'Dragos', 'Victoria'],
    printeazaInvitati() {
        console.log(`Lista de invitati pentru ${this.nume}`)
        this.invitati.forEach((invitat) => {
            console.log(`${invitat} vine la ${this.nume}`);
        })
    }
}
eveniment.printeazaInvitati();

// Creați un obiect numit tasks care va conține o proprietate taskList 
// (array de obiecte) cu proprietățile text (string) și completed (boolean).
// Includeți trei task-uri în taskList array (unul complet și două incomplete 
// (completed false). Creați o metodă în obiect (getToDoTasks) în care veți 
// folosi filter pentru a afișa task-urile incomplete.
const tasks = {
    taskList: [
        {
            text: 'spalat rufe',
            completed: true
        },
        {
            text: 'spalat bani',
            completed: false
        },
        {
            text: 'gatit money',
            completed: false
        }
    ],
    getTaskToDo() {
      return this.taskList.filter((task) => task.completed == false)
    }
}

console.log(tasks.getTaskToDo());


// Creați comanda de listare a notițelor:
// - În notes.js creați o metodă pentru listarea notițelor
// - Metoda va afișa un titlu: "Notițele tale" urmat de fiecare titlu al notițelor pe fiecare rând
// - Dacă nu există nicio notiță, afișați un mesaj corespunzător.
// - Apelați metoda în handler-ul comenzii.
