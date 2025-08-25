import express from 'express'



const NewmessageF = (req,res)=>{
    const {title,text} = req.body
    try {
    const message = `INSERT INTO messages (title,text,created_by) VALUES($1,$2,$3,$4)`
    const values = [title,text,req.user]
    } catch (error) {
        
    }
}


const getmessages = (req,res)=>{
    try {
    const messages = `SELECT `
    } catch (error) {
        
    }
}