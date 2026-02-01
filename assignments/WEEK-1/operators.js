// Initial data:
//         let totalAmount = 0;

// 🎯 Tasks
//   1. Add ₹500 to the total
//   2. Add ₹1200 to the total
//   3. Apply a ₹200 discount
//   4. Add 18% GST
//   5. Print the final bill amount

let totalAmount = 0
function add(amount){
  totalAmount += amount
}

function discount(amount){
  totalAmount -= amount
}

function gst(percent){
  totalAmount = totalAmount - ((percent/100) * totalAmount)
}

add(500)
add(1200)
discount(200)
gst(18)
console.log(totalAmount)
