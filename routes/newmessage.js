import express from 'express'


const newmessage = express.Router()

newmessage.get('/',(req,res)=>{
      res.render('newmessage')
})



newmessage.post('/',(req,res)=>{
      
})
export default newmessage