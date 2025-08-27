import express from 'express'
import { getmessages } from '../controllers/messagesCR.js'


const posts = express.Router()

posts.get('/', async (req, res) => {
  try {
    const messages = await getmessages();
    res.render('posts', { messages, currentUser: req.user || null });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});


posts.post('/',(req,res)=>{
      
})
export default posts