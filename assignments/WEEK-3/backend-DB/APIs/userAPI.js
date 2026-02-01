import exp from 'express'
import { UserModel } from '../models/userModel.js'
export const userApp = exp.Router()

//USER API MODELS

//Create User
//Read User
userApp.get('/users', async(req, res)=>{
  //read users from DB
  let usersList = await UserModel.find()
  //send res
  res.status(200).json({message: "users", payload: usersList})
})

//create user
userApp.post('/users', async(req, res)=>{
  let newUser = req.body
  let newUserDoc = new UserModel(newUser)
  //save in db
  await newUserDoc.save()
  res.status(201).json({message: "User Created"})
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