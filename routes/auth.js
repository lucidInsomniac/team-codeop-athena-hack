var express = require('express');
var router = express.Router();
const db = require("../model/helper");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const {BCRYPT_WORK_FACTOR, SECRET_KEY} = require('../config')



//user registration

router.post('/register', async (req, res, next) => {
    let {username, email, password, avatar} = req.body;
    try {
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt)
        let sql = `INSERT INTO User (username, email, password, avatar)
        VALUES ('${username}', '${email}', '${hashedPassword}', '${avatar}')`
        await db(sql);
        res.send({ message: 'Registration succeeded' });

    }catch(err) {
        next(err);
  }
    
});

//user login

router.post('/login', async (req, res, next) => {
    let { username, password } = req.body;

    try {
        let results = await db(`SELECT * FROM user WHERE username = '${username}'`);
        if (results.data.length === 0) {
            // Username not found
            res.status(401).send({ error: 'Login failed' });
        } else {
            let user = results.data[0];  // the user's row/record from the DB
            let passwordsEqual = await bcrypt.compare(password, user.password);
            if (passwordsEqual) {
                // Passwords match
                let payload = { userId: user.id };
                // Create token containing user ID
                let token = jwt.sign(payload, SECRET_KEY);
                // Also return user (without password)
                delete user.password;
                res.send({
                    message: 'Login succeeded',
                    token: token,
                    user: user
                });
            } else {
                // Passwords don't match
                res.status(401).send({ error: 'Login failed' });
            }
        }
    } catch (err) {
        next(err);
    }
});

















module.exports = router;