// You are creating a utility for a computer lab. It should display computer information and manage a notes file for a student.
// Display the operating system platform, CPU architecture, total memory, free memory, and home directory.
// Create a folder named data if it does not already exist.
// Build the path for student-notes.txt using a path utility rather than manually joining folder names with slash characters.
// Display the file name and extension from the path.
// Create the notes file and write at least three lines about what you learned in Node.js.
// Read the file and display its contents in the terminal.
// Append one more line and display the updated contents.
// Rename the file to class-notes.txt.
// Create a temporary file and remove it only after completing the other file operations.
const os = require('node:os');
const fs = require('node:fs');
const path = require('node:path');

function formatBytes(bytes) {
  return `${(bytes / 1024 ** 3).toFixed(2)} GB`;
}

console.log(`Operating system: ${os.platform()}`);
console.log(`CPU architecture: ${os.arch()}`);
console.log(`Total memory: ${formatBytes(os.totalmem())}`);
console.log(`Free memory: ${formatBytes(os.freemem())}`);
console.log(`Home directory: ${os.homedir()}`);

const dataDirectory = path.join(__dirname, 'data');
fs.mkdirSync(dataDirectory, { recursive: true });

const notesPath = path.join(dataDirectory, 'student-notes.txt');
console.log(`File name: ${path.basename(notesPath)}`);
console.log(`File extension: ${path.extname(notesPath)}`);

const initialNotes = [
  'I learned that Node.js can run JavaScript outside the browser.',
  'I learned how to use built-in Node.js modules.',
  'I learned how to work with files using the fs module.'
].join('\n');

fs.writeFileSync(notesPath, `${initialNotes}\n`, 'utf8');
console.log('\nStudent notes:');
console.log(fs.readFileSync(notesPath, 'utf8'));

fs.appendFileSync(notesPath, 'I learned how to build file paths with the path module.\n', 'utf8');
console.log('Updated student notes:');
console.log(fs.readFileSync(notesPath, 'utf8'));

const classNotesPath = path.join(dataDirectory, 'class-notes.txt');
fs.renameSync(notesPath, classNotesPath);
console.log(`Renamed notes file to: ${path.basename(classNotesPath)}`);

const temporaryFilePath = path.join(dataDirectory, 'temporary.txt');
fs.writeFileSync(temporaryFilePath, 'Temporary file\n', 'utf8');
fs.unlinkSync(temporaryFilePath);
console.log('Temporary file created and removed.');