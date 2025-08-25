import express from 'express'


const posts = express.Router()

posts.get('/',(req,res)=>{
      res.render('posts')
})



posts.post('/',(req,res)=>{
})
export default posts