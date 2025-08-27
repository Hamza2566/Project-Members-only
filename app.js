import express from 'express'
import login from './routes/login.js';
import signup from './routes/signup.js';
import posts from './routes/posts.js';
import passport from 'passport';
import session from 'express-session';
import newmessage from './routes/newmessage.js';
import membership from './routes/members.js';

const PORT = process.env.PORT|| 3000;
const app = express()
app.set('views','views')
app.set('view engine','ejs')
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))
 
app.use(
  session({
    secret: "yourSecretKeyHere",   
    resave: false,                
    saveUninitialized: false,      
    cookie: { 
      secure: false,             
      maxAge: 1000 * 60 * 60    
    }
  })
);
app.use(passport.initialize());
app.use(passport.session());  
app.use((req, res, next) => {
  res.locals.currentUser = req.user || null;
  next();
});
app.get('/',(req,res)=>{
  res.render('home')
})
app.use('/login',login)
app.use('/signup',signup)
app.use('/posts',posts)
app.use('/newMessage',newmessage)
app.use('/membership',membership)
app.listen(PORT,()=>{
    console.log(`App is running on Port ${PORT}`);
})