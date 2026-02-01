// ASSIGNMENT 2:
// -------------
// Student Performance Dashboard

// You are working on a college result analysis system.

// Test Data:
// const students = [
//   { id: 1, name: "Ravi", marks: 78 },
//   { id: 2, name: "Anjali", marks: 92 },
//   { id: 3, name: "Kiran", marks: 35 },
//   { id: 4, name: "Sneha", marks: 88 },
//   { id: 5, name: "Arjun", marks: 40 }
// ];

// Tasks:
    
// filter() students who passed (marks ≥ 40)
// map() to add a grade field
//         ≥90 → A
//         ≥75 → B
//         ≥60 → C
//         else → D

   
// reduce() to calculate average marks
// find() the student who scored 92
// findIndex() of student "Kiran"

const students = [
    { id: 1, name: "Ravi", marks: 78 },
    { id: 2, name: "Anjali", marks: 92 },
    { id: 3, name: "Kiran", marks: 35 },
    { id: 4, name: "Sneha", marks: 88 },
    { id: 5, name: "Arjun", marks: 40 }
  ];

  let result1 = students.filter(ele => ele>=40)
  console.log(result1)

  let result2 = students.map(ele=>{
    if(ele.marks>=90){
      return{
        id: ele.id, 
        name: ele.name, 
        marks: ele.marks,
        Grade: "A"
      }
    }else if(ele.marks>=75){
      return{
        Grade: "B"
      }
    }else if(ele.marks>=60){
      return{
        Grade: "C"
      }
    }
    return{
      Grade: "D"
    }
  })
  console.log(result2)

  let result3 = Object.values(students).reduce((acc, ele)=> acc+ele.marks,0)/Object.values(students).length;
  console.log(result3)

  let result4 = students.find(ele=>ele.marks===92)
  console.log(result4)

  let result5 = students.findIndex(ele=> ele.name==="Kiran")
  console.log(result5)