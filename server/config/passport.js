import Passport from "passport"
import db from "./db.js";
import { Strategy as LocalStrategy } from "passport-local"; 
import bcrypt from "bcryptjs";


Passport.use(
   
  new LocalStrategy(
     { usernameField: "email", passwordField: "password" }
    ,async (email, password, done) => {
    try {
      const { rows } = await db.query(
        "SELECT id,  email, password_hash , membership_status FROM users WHERE email = $1",
        [email]
      );
      const user = rows[0];
      console.log(user);
            
      if (!user) {
        console.log({ message: "Incorrect email" });
        
        return done(null, false, { message: "Incorrect email" });
      }

      const isMatch = await bcrypt.compare(password, user.password_hash);
      if (!isMatch) {
          console.log({ message: "Incorrect password" });
        return done(null, false, { message: "Incorrect password" });

      }

      return done(null, user);
    } catch (err) {
      return done(err);
    }
  })
);
Passport.serializeUser((user, done) => {
  done(null, user.id);
});

Passport.deserializeUser(async (id, done) => {
  try {
    const { rows } = await db.query(
      "SELECT id, firstname, email , membership_status FROM users WHERE id = $1",
      [id]
    );
    const user = rows[0] || null;    
    done(null, user);
  } catch (err) {
    done(err);
  }
});

export default Passport
