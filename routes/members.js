import express from 'express'
const membership = express.Router()

membership.get('/',(req,res)=>{
      res.render('membership')
})
membership.post('/',(req,res)=>{
      
})


export default membership