// Part 1: Understanding and Creating Objects
const student = {
  name: "Alex Johnson",
  age: 21,
  enrolled: true,
  courses: ["Math", "Computer Science", "Literature"],
  displayInfo() {
    return `Name: ${this.name}, Age: ${this.age}, Enrolled: ${this.enrolled}`;
  },
  addCourse(course) {
    this.courses.push(course);
  },
  totalCourses() {
    return this.courses.length;
  }
};

console.log("Name:", student.name);
console.log("Age:", student.age);
console.log("Student Info:", student.displayInfo());

// Part 2: Working with JSON
const jsonString = JSON.stringify(student);
console.log("JSON String:", jsonString);

const newStudentObj = JSON.parse(jsonString);
console.log("Parsed Object:", newStudentObj);

// Part 3: Destructuring Assignment
const { name, courses } = student;
console.log("Destructured Name:", name);
console.log("Destructured Courses:", courses);

const scores = [85, 92, 78, 90];
const [score1, score2] = scores;
console.log("First Score:", score1);
console.log("Second Score:", score2);

// Part 4: Spread Operator
const clonedStudent = { ...student, graduationYear: 2025 };
console.log("Cloned Student with Graduation Year:", clonedStudent);

const newCourses = ["Biology", "Philosophy"];
const mergedCourses = [...student.courses, ...newCourses];
console.log("Merged Courses:", mergedCourses);

// Part 5: Object Methods
student.addCourse("Art History");
console.log("Updated Courses:", student.courses);
console.log("Total Courses:", student.totalCourses());

// Bonus: Calculate Average Score
const average = scores.reduce((sum, val) => sum + val, 0) / scores.length;
console.log("Average Score:", average.toFixed(2));
