import { Schema, model } from 'mongoose'

// create User Schema (username, password, age => fields)
const userSchema = new Schema({
  username:{
    type: String,  //schema types
    required: [true, "Username is required"], //validation rule or mandatory feild
    minLength: [4, "Minimum length must be 4"], // second argument sent's the message to the client
    maxLength: [6, "Max Length Exceeded"]
  },
  password:{
    type: String,
    required: [true, "Password is Required"]
  },
  age:{
    type: Number,
    required: [true, "Age is required"],
    min: [18,"Age should be above 18"], //min for number and minLength for string
    max: [25, "Age should be less than 25"]
  }
},{
  strict: "throw", 
  timestamps: true // attaches 2, updated and created date and time
})

// create User Model with that Schema
export const UserModel = model("user", userSchema) // takes 2 arguments => name, schema name
// name we supply here is very imp since mangoose takes the name and pluralises the name and creates the collection. We shouldn't give a plural name
