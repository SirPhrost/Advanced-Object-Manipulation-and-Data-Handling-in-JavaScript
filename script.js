// PART 1:
const student = {
  name: "Shacquile",
  age: 21,
  enrolled: true,
  courses: ["Math", "Science", "History"],
  displayInfo() {
    return `Name: ${this.name}, Age: ${this.age}, Enrolled: ${this.enrolled}`;
  },
};

console.log("Part 1:");
console.log("Name:", student.name);
console.log("Age:", student.age);
console.log("Student Info:", student.displayInfo());

//Part 2:

console.log("\nPart 2:");
const studentJSON = JSON.stringify(student);
console.log("JSON String:", studentJSON);

const newStudent = JSON.parse(studentJSON);
console.log("Parsed Object:", newStudent);


console.log("\nPart 3:");
const { name, courses } = student;
console.log("Destructured Name:", name);
console.log("Destructured Courses:", courses);

const scores = [85, 92, 78, 90];
const [firstScore, secondScore] = scores;
console.log("First Score:", firstScore);
console.log("Second Score:", secondScore);


console.log("\nPart 4:");
const clonedStudent = { ...student, graduationYear: 2026 };
console.log("Cloned Student:", clonedStudent);

const newCourses = ["Art", "PE"];
const mergedCourses = [...student.courses, ...newCourses];
console.log("Merged Courses:", mergedCourses);


student.addCourse = function(newCourse) {
  this.courses.push(newCourse);
};

student.totalCourses = function() {
  return this.courses.length;
};

student.addCourse("Computer Science");

console.log("\nPart 5:");
console.log("Courses after adding one:", student.courses);
console.log("Total number of courses:", student.totalCourses());


console.log("\nBonus Task:");
const averageScore = scores.reduce((sum, val) => sum + val, 0) / scores.length;
console.log("Average Score:", averageScore.toFixed(2));
