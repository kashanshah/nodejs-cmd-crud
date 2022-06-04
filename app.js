const {log, logSuccess} = require("./utils");
const {getNotes, addNote, listNotes, removeNote} = require("./notes");
const yargs = require('yargs/yargs')
const {hideBin} = require('yargs/helpers')

// Adding a note
yargs(hideBin(process.argv))
    .command('add', 'Adds a note', {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    }, (argv) => {
        addNote(argv.title, argv.body);
    })
    .command('remove', 'Removes a note', {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
    }, (argv) => {
        removeNote(argv.title);
    })
    .command('list', 'Lists all note', (argv) => {
        listNotes();
    })
    .command('read', 'Reads a note', {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    }, (argv) => {
        getNotes(argv.title);
    }).parse()

// const fs = require('fs');

