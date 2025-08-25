import express from 'express'
import Passport from '../server/config/passport.js'


const login = express.Router()

login.get('/',(req,res)=>{
      res.render('login')
})
login.post('/',
      Passport.authenticate("local",{
            successRedirect:'/posts',
            failureRedirect:"/login",
      })
)



export default login