import exp from 'express'
import { ProductModel } from '../models/productModel.js'
export const productApp = exp.Router()

//PRODUCT API MODELS

//create products
//Read products
productApp.get('/products', async(req, res)=>{
  let productList = await ProductModel.find()
  res.status(200).json({message: "Products", payload: productList})
})

productApp.post('/products', async(req, res)=>{
  let newProduct = req.body
  let newProductDoc = new ProductModel(newProduct)
  //save in db
  await newProductDoc.save()
  res.status(201).json({message: "product created", payload: newProductDoc})
})

productApp.get('/products/:id', async(req, res)=>{
  //get ObjID from url
  let objId = req.params.id
  //find product in DB
  let productObj = await ProductModel.findById(objId)
  //send response
  res.status(200).json({message:"product", payload: productObj})
})

productApp.put('/products/:id', async(req, res)=>{
  //get obj by id
  let objId = req.params.id
  //get modified product from req
  let modifiedProduct = req.body
  //make update
  let latestProduct = await ProductModel.findByIdAndUpdate(objId, {$set: {...modifiedProduct}}, {new: true, runValidators: true})
  res.status(200).json({message: "Product modified", payload: latestProduct})
})