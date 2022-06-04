# Notes (nodeJS CRUD application)
> A simple CRUD nodeJS application

## Getting started
> Follow the steps listed below

```bash
# Clone the repository
git clone git@github.com:kashanshah/nodejs-cmd-crud.git
# Install the dependencies
yarn install
```

## Development
For development, nodemon is installed. You can start nodemon server by running `nodemon app.js` in your terminal.

## Commands
To view all available commands
```
node app.js --help
```
#
To add a note
```
node app.js add --title='Title of note' --body='Body of the note'
```

#
To remove a note
```
node app.js remove --title='Title of note'
```

#
To view all notes
```
node app.js list
```

#
To read a note
```
node app.js read --title='Title of note'
```
