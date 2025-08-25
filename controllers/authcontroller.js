import express from 'express'
import { validationResult } from 'express-validator';
import bcrypt from "bcryptjs";

import db from '../server/config/db.js';


export const signupfunction = async (req,res) =>{
     const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.render("signup", { errors: errors.array(), old: req.body });
  }
  try {
      const {firstname,lastname,email,password} = req.body
    const salt = await bcrypt.genSalt(10)
    const hashedpassword = await  bcrypt.hash(password,salt)
    
      const user = `INSERT INTO users (firstname,lastname,email,password_hash) VALUES ($1,$2,$3,$4)`
      const values = [firstname,lastname,email,hashedpassword]
      const query = await db.query(user,values)
      console.log(query);
  } catch (error) {
    console.log(error);
    
  }
}

