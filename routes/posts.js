import express from 'express'
import { getmessages } from '../controllers/messagesCR.js'


const posts = express.Router()

posts.get('/', async(req,res)=>{
      const {rows} = await getmessages()
      console.log(rows);
      res.render('posts',{messages:rows})
})



posts.post('/',(req,res)=>{
      
})
export default posts