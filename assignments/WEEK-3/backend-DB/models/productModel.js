import { Schema, model} from 'mongoose'

//create product Schema (productName, price)
const productSchema = new Schema({
  productname:{
    type: String,
    required: [true, "productname is required"]
  },
  price:{
    type: Number,
    required: [true, "Price is required"]
  },
},{
  strict: "throw",
  timestamps: true
})

//create product Model with that schema
export const ProductModel = model('product', productSchema)