const fs = require('fs');
const chalk = require('chalk');

// const getNotes = () => 'your notes';


const addnote = (title, body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find((note) => note.title === title);

    debugger;
    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);
        console.log(chalk.red.inverse('New note added'));

    } else {
        console.log(chalk.red.inverse('duplicate title detected'));
    }

};


const saveNotes = (notes) => {
    const dataJson = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJson);
};

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJson = dataBuffer.toString();
        return JSON.parse(dataJson);
    }
    catch (e) {
        return [];
    }

};
const removeNotes = (title) => {
    const notes = loadNotes();
    const findNotes = notes.filter((item) => item.title !== title);
    if (notes.length > findNotes.length) {
        console.log(chalk.green('Item removed'));
        saveNotes(findNotes);
    } else {
        console.log(chalk.white.inverse('Item Not Found'));
    }

};
const listNotes = () => {
    console.log(chalk.inverse.red('Your Notes:'));
    const notes = loadNotes();
    notes.forEach(item => console.log(item.title));
};

module.exports = {
    addnote,
    removeNotes,
    listNotes
};