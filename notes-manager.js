import fs from "node:fs";

const fileName = "notes.txt";
const operation = process.argv[2];
const note = process.argv[3];

function createNoteFile() {
  if (fs.existsSync(fileName)) {
    console.log("Notes file already exists.");
    return;
  }

  fs.writeFileSync(fileName, "");
  console.log("Notes file created.");
}

function readNotes() {
  if (!fs.existsSync(fileName)) {
    console.log("Notes file does not exist. Run create first.");
    return;
  }

  const notes = fs.readFileSync(fileName, "utf-8");

  if (notes.trim() === "") {
    console.log("No notes found.");
    return;
  }

  console.log("\nYour Notes:");
  console.log(notes);
}

function addNote() {
  if (!fs.existsSync(fileName)) {
    console.log("Notes file does not exist. Run create first.");
    return;
  }

  if (!note) {
    console.log("Please provide a note.");
    return;
  }

  fs.appendFileSync(fileName, note + "\n");

  console.log("Note added.");
}

function deleteNotes() {
  if (!fs.existsSync(fileName)) {
    console.log("Notes file does not exist.");
    return;
  }

  fs.unlinkSync(fileName);

  console.log("All notes deleted.");
}

switch (operation) {
  case "create":
    createNoteFile();
    break;

  case "read":
    readNotes();
    break;

  case "add":
    addNote();
    break;

  case "delete":
    deleteNotes();
    break;

  default:
    console.log(`
Usage:

node notes-manager.js create
node notes-manager.js read
node notes-manager.js add "Your note"
node notes-manager.js delete
`);
}