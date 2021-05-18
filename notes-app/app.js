// const add = require('./utils');
// console.log(add(4, 2));

// const validator = require('validator');
const chalk = require('chalk');

const notes = require('./notes');
const yargs = require('yargs');
const { string } = require('yargs');

// console.log(chalk.bgRed.bold.blue('Success!'));


// console.log(notes.getNotes());
// // console.log(validator.isEmail('a@bob.com'));

// const commands = process.argv[2];
// if (commands === 'add') {
//     console.log('adding note');
// }
yargs.version('1.1.0');

yargs.command({
    command: 'add',
    describe: 'adding a new note',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'body',
            demandOption: true,
            type: 'string'
        },
    },
    handler(argv) {
        notes.addnote(argv.title, argv.body);
    }
});
yargs.command({
    command: 'remove',
    describe: 'remove a new note',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNotes(argv.title);
    }
});

yargs.command({
    command: 'list',
    describe: 'list a new note',
    builder: {
        title: {
            describe: ' note list'
        }
    },
    handler() {
        notes.listNotes();
    }
});
yargs.command({
    command: 'read',
    describe: 'read a new note',
    handler: function () {
        console.log('read note');
    }
});

yargs.parse();;

// console.log(process.argv);

