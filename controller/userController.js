const router = require('express').Router();
const User = require('../models/User');

router.post('/adduser',(req, res) => {
    const userDetails = {
        name: req.body.name,
        email: req.body.email,
        password:req.body.password,
    }
    const user = new User(userDetails);
    user.save()
       .then((user) => {
            res.send(user);
          })
          .catch((err) => { 
            res.send('Error:' + err);
          });
})

router.post('/login', (req, res) => {
    console.log('in login function');
    const body = req.body;
    User.findOne(body.email)
      .then((user) => {
        if(user.password === body.password){
            res.send(user);
        }
        else {
            console.log('else')
            res.json({error: 'Invalid Email or Password'});
        }
      })
      .catch((err) => {
        res.send({error: 'Invalid Email or Password'});
      });
  });

router.post('/addscore', (req, res) => {
    const userDetails = { 
        score: req.body.score, 
        email: req.body.email 
    }
    User.findOne(userDetails.email).then((user) => {
        user.score = userDetails.score;
        user.save();
        res.send({message:'Score saved successfully !'})
    }).catch((err) => {
        res.send('Error:', err);
      });
})

  module.exports = router;