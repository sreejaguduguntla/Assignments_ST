import exp from 'express'
import { UserModel } from '../models/userModel.js'
import { hash, compare } from 'bcryptjs'
import jwt from 'jsonwebtoken' //imports default exports
import { verifyToken } from '../middlewares/verifyToken.js'

export const userApp = exp.Router()

//USER API MODELS

//Create User
//Read User
userApp.get('/users', async(req, res)=>{
  //read users from DB
  let usersList = await UserModel.find({}, {username: 1, _id: 0, age: 1, password: 1})
  //send res
  res.status(200).json({message: "users", payload: usersList})
})

//create user
userApp.post('/users', async(req, res)=>{
  //get newUser from req
  let newUser = req.body
  //hash the password
  let hashedPassword = await hash(newUser.password, 12)
  //Replace old pass with new pass
  newUser.password = hashedPassword
  //create new userDoc
  let newUserDoc = new UserModel(newUser)
  //save in db
  await newUserDoc.save()
  res.status(201).json({message: "User Created"})
})

// User Authentication route (Login)
userApp.post("/auth", async(req, res)=>{
  //get user cred obj
  let userCred = req.body
  let userOfDb = await UserModel.findOne({username: userCred.username})
  if(userOfDb === null){
    return res.status(404).json({message: "invalid username"})
  }//compare password
  else{
    let status = await compare(userCred.password, userOfDb.password)
    if(!status){
      return res.status(401).json({message: "invalid password"})
    }
  }
  //create signed token
    //Once the user credentials are verified then the login route creates a JWT (Json web Token) Token => it contains 3 parts 
  let signedToken = jwt.sign({username: userCred.username}, 'abcdef', {expiresIn: "60"})

  res.cookie('token', signedToken, {
    httpOnly: true, //it is httpOnly cookie
    secure: false, //http protocol and https protocol
    sameSite: 'lax' // => provides normal level secuirty (relaxing mode)
  })
  //we need to set the expiry time for the token => for security => here "10"-> milliseconds
  //send token in res
  res.status(200).json({message: "Login Success"})
})

//read user by ObjectID => since it is always unique
userApp.get('/users/:id', async(req, res)=>{
  //get objectId from url parameter
  let objId = req.params.id;
  //find user in DB
  let userObj = await UserModel.findById(objId)
  //send response
  res.status(200).json({message:"User", payload: userObj})
})

//update user by objectID
userApp.put('/users/:id',async(req,res)=>{
  //get object id from params
  let objId = req.params.id
  // get modified user from req
  let modifiedUser = req.body
  // make update
  let latestUser = await UserModel.findByIdAndUpdate(objId, { $set: {...modifiedUser}}, {new: true, runValidators: true})
  res.status(200).json({message: "user Modified", payload: latestUser})
})

//delete user by its objID
userApp.delete('/users/:id', async(req,res)=>{
  let objId = req.params.id
  let deletedUser = await UserModel.findByIdAndDelete(objId)
  res.status(200).json({message:"User removed", payload: deletedUser})
})

userApp.get("/test", verifyToken, (req, res)=>{
  //Token 
  res.status(200).json({message: "Test route"})
})