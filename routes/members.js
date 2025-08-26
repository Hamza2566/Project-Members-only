import express from 'express'
import memberverify from '../controllers/memberscontrollers.js'
const membership = express.Router()

membership.get('/',(req,res)=>{
      res.render('membership')
})
membership.post('/', async (req, res) => {
    const { Passcode, userId } = req.body;
    console.log(userId);
    

    if (Passcode === process.env.Passcode) {
        try {
            const result = await memberverify(userId);
            console.log('Verification result:', result);
            res.redirect('/posts')
        } catch (error) {
            console.error('Error verifying membership:', error);
        }
    } else {

        res.status(401).send('Incorrect passcode ❌');
    }
});







export default membership