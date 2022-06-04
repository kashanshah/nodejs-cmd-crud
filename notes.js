const fs = require("fs");
const {logSuccess, logError, log} = require("./utils");
const getNotes = (title) => {
    const notes = loadNotes();
    const filteredNote = notes.find(note => note.title === title);

    if(!!filteredNote) {
        console.log(logSuccess(`${filteredNote.title}: ${filteredNote.body}`));
        return;
    }
    console.log(logError('No such note found!'))
};

const addNote = (title, body) => {
    const notes = loadNotes();
    const isDuplicate = notes.find(note=>note.title === title);

    if(isDuplicate) {
        console.log(logError('Duplicate note!'));
        return;
    }
    notes.push({title, body})
    saveNotes(notes);
    console.log(logSuccess('Note added!'));
}

const saveNotes = (notes) => {
    fs.writeFileSync('./notes.json', JSON.stringify(notes));
}

const listNotes = () => {
    const notes = loadNotes();
    if(!notes?.length) {
        console.log(logError('No notes found'));
        return;
    }
    console.log(log('Your Notes: '))
    notes.forEach(note => {
        console.log(logSuccess(`${note.title}: ${note.body}`));
    })
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('./notes.json');
        const data = dataBuffer.toString();
        return JSON.parse(data);
    }
    catch (e) {
        return [];
    }
}

const removeNote = (title) => {
    const notes = loadNotes();
    const noteToDelete = notes.filter(note=>note.title === title).length > 0;

    if(!noteToDelete) {
        console.log(logError('No note found!'));
        return;
    }

    saveNotes(notes.filter(note=>note.title !== title));
    console.log(logSuccess('Note deleted!'));
}

module.exports = {getNotes, listNotes, addNote, removeNote}
