import jwt from 'jsonwebtoken'
export function verifyToken(req, res, next){
  //token verification logic
  //1. Get token from req(using cookie-parser)
  let signedToken = req.cookies.token
  if(!signedToken){
    return response.status(401).json({message: "Please login first"})
  }
  //2. Verify token
  let decodedToken = jwt.verify(signedToken, 'abcdef')
  console.log("decoded token: ", decodedToken)
  next()
}