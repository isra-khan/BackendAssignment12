const { introductionStudent, percentage } = require('./student.js');

const intro = introductionStudent('Ali', 'Web Development');
console.log(intro);

const totalMarks = percentage(425, 500);
console.log(`Percentage: ${totalMarks}%`);
console.log(`Node.js version: ${process.version}`);