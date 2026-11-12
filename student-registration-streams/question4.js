const { EventEmitter } = require('node:events');
const fs = require('node:fs');
const path = require('node:path');

const registrationSystem = new EventEmitter();

registrationSystem.on('studentRegistered', ({ studentId, name }) => {
  console.log(`Registration confirmed for ${name} (ID: ${studentId}).`);
  setTimeout(() => {
    console.log(`Reminder: welcome ${name} (ID: ${studentId})!`);
  }, 3000);
});

function registerStudent(studentId, name) {
  registrationSystem.emit('studentRegistered', { studentId, name });
}

registerStudent('S1001', 'Aisha Khan');
registerStudent('S1002', 'Marco Lee');

const logPath = path.join(__dirname, 'large.txt');
const copyPath = path.join(__dirname, 'copy.txt');

console.log('\nReading activity log:');
const displayStream = fs.createReadStream(logPath, { encoding: 'utf8' });
displayStream.on('data', (chunk) => {
  process.stdout.write(chunk);
});
displayStream.on('end', () => {
  console.log('\nFinished reading activity log.');
});
displayStream.on('error', (error) => {
  console.error(`Could not read activity log: ${error.message}`);
});

const readStream = fs.createReadStream(logPath);
const writeStream = fs.createWriteStream(copyPath);

readStream.on('error', (error) => {
  console.error(`Could not read activity log for copying: ${error.message}`);
  writeStream.destroy();
});
writeStream.on('error', (error) => {
  console.error(`Could not write copied activity log: ${error.message}`);
});
writeStream.on('finish', () => {
  console.log('Activity log copied successfully to copy.txt.');
});

readStream.pipe(writeStream);
