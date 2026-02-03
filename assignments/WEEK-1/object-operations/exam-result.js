// Assignment 2: Exam Result Summary
// ---------------------------------
// Scenario : Marks are stored subject-wise for a student.

// Test data:
// const marks = {
//   maths: 78,
//   physics: 65,
//   chemistry: 82,
//   english: 55
// };

// Tasks:
//     1. Calculate total marks
//     2. Calculate average marks
//     3. Find the highest scoring subject
//     4. Add a new subject computer: 90

const marks = {
  maths: 78,
  physics: 65,
  chemistry: 82,
  english: 55
};
let total = 0
max = Number.MIN_VALUE
for(let v of Object.values(marks)){
  total += v
  if(v>max){
    max = v
  }
}
console.log(total)
console.log(total/Object.values(marks).length)
marks.computer = 90
console.log(max)