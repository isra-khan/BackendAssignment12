// A training institute wants a small command-line utility to display student information and calculate marks. Build this as a Node.js project with reusable code separated into files.
// Create a project folder named student-utility and initialize it as an npm project.
// Create student.js with a function that receives a student's name and course and returns a formatted introduction.
// In the same file, create a function that receives obtained marks and total marks and returns the percentage.
// Export both functions from student.js using CommonJS.
// Create app.js, import the functions from student.js, and call them with sample data.
// Display the student's name, course, percentage, and current Node.js version using process.version.
// Add a start script in package.json so the application runs using npm start.
// Expected test data: Ali; Web Development; obtained marks 425; total marks 500; expected percentage 85%.


function introductionStudent(name, course) {
    return `Hello, my name is ${name} and I am enrolled in the ${course} course.`;
}

function percentage(obtainedMarks, totalMarks) {
    console.log(`Obtained Marks: ${obtainedMarks}`);
    console.log(`Total Marks: ${totalMarks}`);
    return obtainedMarks / totalMarks * 100;
}

module.exports = { introductionStudent, percentage };