class NotesStore {
  //add your code here
  constructor() {
    this.notes = [];
  }

  addNote(state, name) {
    this.notes.forEach((s) => {
      if (s.name === '') {
        throw new Error('Name cannot be empty');
      }
    });
    this.notes.push({ state: state, name: name });
    console.log(this.notes);
  }

  getNotes(st) {
    if (this.notes.length === 0) {
      return this.notes;
    }
    this.notes.map((s) => {
        const { state, name } = s;
        console.log(state)
      if (state === st) {
        return name;
      } else {
        throw new Error(`Invalid state ${st}`);
      }
    });
  }
}

store = new NotesStore();

store.addNote('active', 'DrinkTea');
store.addNote('active', 'DrinkCoffee');
store.addNote('completed', 'Study');
store.getNotes('active');
store.getNotes('completed');
store.getNotes('foo');
