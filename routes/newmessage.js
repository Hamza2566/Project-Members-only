import express from 'express'
import db from '../server/config/db.js'
import { getmessages } from '../controllers/messagesCR.js'


const newmessage = express.Router()

newmessage.get('/',async (req,res)=>{
      res.render('newmessage')
      const result  = await getmessages() 
      console.log(result);
      
})
newmessage.post('/', async (req,res)=>{
   const { title, text, userId } = req.body;
try {
  const message = `INSERT INTO messages (title, text, created_by) VALUES ($1, $2, $3)`;
  const values = [title, text, userId];
  
  const result = await db.query(message, values);

  console.log("Inserted:", result.rowCount);
  res.redirect("/posts")
} catch (err) {
  console.error("Insert failed:", err);
}

})
export default newmessage