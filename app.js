import express from 'express'
import login from './routes/login.js';
const PORT = 2551;
const app = express()
app.set('views','views')
app.set('view engine','ejs')
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))

app.get('/',(req,res)=>{
  res.render('home')
})
app.use('/login',login)
app.listen(PORT,()=>{
    console.log(`App is running on Port ${PORT}`);
})