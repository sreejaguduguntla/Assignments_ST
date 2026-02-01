// You are building a shopping cart summary for an e-commerce website.

// Test Data : 
// const cart = [
//   { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
//   { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
//   { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
//   { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
// ];

// Tasks:
    
// Use filter() to get only inStock products
// Use map() to create a new array with:  { name, totalPrice }
// Use reduce() to calculate grand total cart value
// Use find() to get details of "Mouse"
// Use findIndex() to find the position of "Keyboard"

const cart = [
    { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
    { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
    { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
    { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
  ];

//Use filter to check the condition 
let result1 = cart.filter((ele) => ele.inStock)
console.log(result1)

//map is used to modify and return 
let result2 = cart.map((ele)=>{
  return{
    name: ele.name,
    totalprice: ele.price*ele.quantity,
  }
})
console.log(result2)

//reduce is used to store the result of the previous operations
let result3 = Object.values(cart).reduce((acc, ele)=> acc+ele.price*ele.quantity,0)
console.log(result3)

//find helps you in checking weather the element is in it or not, if there then returns it else returns undefined
let result4 = cart.find(ele=>ele.name === "Mouse")
console.log(result4)

//findIndex helps you check weather the element is in it or not, if found will return the index of it
let result5 = cart.findIndex(ele=>ele.name==="Keyboard")
console.log(result5)