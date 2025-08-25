import express from 'express'
import validateRegister from '../middleware/validate.js'
import { signupfunction } from '../controllers/authcontroller.js'


const signup = express.Router()

signup.get('/',(req,res)=>{
      res.render('signup')
})
signup.post('/',validateRegister,signupfunction)



export default signup