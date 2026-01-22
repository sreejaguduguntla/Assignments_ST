// Hands-On 1: Shallow Copy (Controlled Mutation Use Case)
// -------------------------------------------------------
// 🧪 Given Data:
const user = {
  id: 101,
  name: "Ravi",
  preferences: {
    theme: "dark",
    language: "en"
  }
};

// 🎯 Task
//     1. Create a shallow copy of user
let userCopy = {...user}
console.log(userCopy)

//     2. Change:
//           i. name in the copied object
//           ii. preferences.theme in the copied object
//           iii .Log both original and copied objects
//           iv. Observe what changes and what doesn’t
userCopy.name = "Sree"
console.log("Copied: ", userCopy)
userCopy.preferences.theme = "light"
console.log("Original: ",user)
console.log("Copied: ", userCopy)




// Hands-On 2: Deep Copy (Isolation & Safety Use Case)
// ---------------------------------------------------

// 🧪 Given Data:
const order = {
  orderId: "ORD1001",
  customer: {
    name: "Anita",
    address: {
      city: "Hyderabad",
      pincode: 500085
    }
  },
  items: [
    { product: "Laptop", price: 70000 }
  ]
};

// 🎯 Task:
//       1. Create a deep copy of order
let orderCopy = structuredClone(order)

//       2. Modify in copied object:
//             i. customer.address.city
//             ii. items[0].price
//             iii. Verify original object remains unchanged
orderCopy.customer.address.city = "Secunderabad"
orderCopy.items[0].price = 80000
console.log("Copied: ", orderCopy)
console.log("Original: ", order)