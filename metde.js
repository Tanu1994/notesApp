// Creați un obiect numit tasks care va conține o proprietate taskList (array de obiecte) cu proprietățile text (string) și completed (boolean).
// Includeți trei task-uri în taskList array (unul complet și două incomplete (completed false).
// Creați o metodă în obiect (getToDoTasks) în care veți folosi filter pentru a afișa task-urile incomplete.

const tasks = {
	tasklist: [
	{
		text: 'Primul task',
		coompleted: true
	},
	{
		text: 'Al doilea task',
		coompleted: false
	},
	{
		text: 'Al treilea task',
		coompleted: false
	}
],
	getToDoTasks(){
		let incompletTask = this.tasklist.filter((task) => task.coompleted === false) 
		console.log(incompletTask);
	}
}
tasks.getToDoTasks();