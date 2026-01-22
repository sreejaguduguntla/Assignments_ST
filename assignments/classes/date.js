// Assignment 1: Date Creation & Extraction (Beginner)
// ---------------------------------------------------
// Tasks:

//        1. Create a Date object for current date & time.
let date = new Date();


//        2. Extract and display:
//                     * Year
//                     * Month (human readable)
//                     * Date
//                     * Day of week
//                     * Hours, minutes, seconds
console.log("Year: ", date.getFullYear())
let monthName = date.toLocaleString('default', { month: 'long' });
console.log("Month:", monthName)
console.log("Date: ", date.getDate())
let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
console.log("Day of week:", days[date.getDay()]);

console.log("Hours: ", date.getHours(), "Minutes: ", date.getMinutes(), "Seconds: ", date.getSeconds())


//       3. Display the date in this format:
//                     DD-MM-YYYY HH:mm:ss
console.log(date.getDate() + "-" +(date.getMonth() + 1) + "-" +date.getFullYear() + " " +date.getHours() + ":" +date.getMinutes() + ":" +date.getSeconds()
);





// Assignment 2: Date Comparison & Validation (Beginner → Intermediate)
// --------------------------------------------------------------------
//  Given:
let enrollmentDeadline = new Date("2026-01-20");

// Tasks:
//   1.Check if:
//       * Today is before deadline → "Enrollment Open"
//       * Today is after deadline → "Enrollment Closed"
if(date<enrollmentDeadline){
  console.log("Enrollment Open");
}
else{
  console.log("Enrollment closed");
}


//   2. Validate user input date:
//       * Input: "2026-02-30"
//       * Detect whether the date is valid or invalid
function isValidDate(dateString) {
  const [year, month, day] = dateString.split('-').map(Number);

  const d = new Date(year, month - 1, day);
  return d.getFullYear() === year && 
         (d.getMonth() + 1) === month && 
         d.getDate() === day;
}

let input = "2026-02-30";

if (isValidDate(input)) {
  console.log("Correct");
} else {
  console.log("Incorrect");
}










// Assignment 3: Age Calculator (Intermediate)
// -------------------------------------------
// Input:
let dob = "2000-05-15";

// Tasks:
//         1. Calculate exact age in years

const birth = new Date(dob);
let years = date.getFullYear() - birth.getFullYear();
const hasHadBirthdayThisYear = (date.getMonth() > birth.getMonth()) ||
  (date.getMonth() === birth.getMonth() && date.getDate() >= birth.getDate());
if (!hasHadBirthdayThisYear) {
  years--;
}

console.log("DOB:", dob, "Age (years):", years);