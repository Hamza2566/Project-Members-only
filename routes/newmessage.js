import express from 'express'
import db from '../server/config/db.js'


const newmessage = express.Router()

newmessage.get('/',(req,res)=>{
      res.render('newmessage')
})
newmessage.post('/', async (req,res)=>{
   const { title, text, userId } = req.body;
try {
  const message = `INSERT INTO messages (title, text, created_by) VALUES ($1, $2, $3)`;
  const values = [title, text, userId];
  
  const result = await db.query(message, values);

  console.log("Inserted:", result.rowCount);
} catch (err) {
  console.error("Insert failed:", err);
}

})
export default newmessage