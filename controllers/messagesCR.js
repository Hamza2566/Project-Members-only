import express from 'express'
import db from '../server/config/db.js'



const NewmessageF = (req,res)=>{
    const {title,text} = req.body
    try {
    const message = `INSERT INTO messages (title,text,created_by) VALUES($1,$2,$3,$4)`
    const values = [title,text,req.user]
    } catch (error) {
        
    }
}


export const getmessages = async () => {
  try {
    const sql = `
      SELECT firstname, title, text, messages.created_at, membership_status
      FROM messages
      INNER JOIN users ON messages.created_by = users.id;
    `;
    const { rows } = await db.query(sql);
    return rows;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
