import express from 'express'
import pool from './server/config/db.js';
const PORT = 2551


const app = express()
async function test(res,req) {
      try {
    const res = await pool.query("SELECT NOW()");
    console.log("✅ Database connected successfully at:", res.rows[0].now);
  } catch (err) {
    console.error("❌ Database connection error:", err.message);
  }
}
test()
app.listen(PORT,()=>{
    console.log(`App is running on Port ${PORT}`);
})