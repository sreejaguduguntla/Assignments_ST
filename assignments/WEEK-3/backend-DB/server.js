import exp from "express"
import { userApp } from "./APIs/userAPI.js"
import { productApp } from "./APIs/productAPI.js"
import { connect } from 'mongoose'
import cookieParser from 'cookie-parser'

//connect to db server
async function connectDB(){
  try{
    await connect('mongodb://localhost:27017/sreejadb1')//as the protocol of the client to database server is mongodb
    console.log("DB Connected successfully")
    app.listen(port, ()=>console.log("Server listening on port 4001..."))
  }catch(err){
    console.log("Couldn't connect: ", err)
  }
  
  // .then(()=>console.log("Connected to DB")) // old promise
  // .catch((err)=>console.log("Error in connecting to DB", err))

  //returns promise -> deal with the block request asynchronously
  //we should know weather the promise is consumed or not
}

connectDB()
const app = exp()

//Assign port Number
const port = 4001

//body pareser middleware
app.use(exp.json())
//add cookie-parser
app.use(cookieParser())

//if path starts with /user-api 
app.use('/user-api',userApp)
app.use('/product-api', productApp)


// we can use middle wares for error handling middle wares => we need to put this at the end of the server.js
// default error handler of the middle ware => auto (customising the error)

function errorHandler(err, req, res, next){
  res.json({message: "Error: ", reason: err.message})
}

//send the error message to express 
app.use(errorHandler) //=> we can also use arrow functions 500-> server side error



