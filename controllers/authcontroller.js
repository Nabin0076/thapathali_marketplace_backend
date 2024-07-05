const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const pool = require('../database/db');
const authQueries = require('../queries/authQueries');
const userQueries = require('../queries/userQueries');
const httpError = require('../error/httpError');

const register = async (req,res)=>{
    try {
        const {username, password, email, gender} = req.body;
        if(!username || !email || !password || !gender){
            res.redirect('/register');
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        const check = await pool.query(userQueries.checkEmailExists, [email]);
        if(check.rows.length){
            throw new httpError("Email already exists!", 400);
        } 
        await pool.query(authQueries.addUser, [username, email, hashedPassword, gender])
        if (error) throw error;
        res.redirect('/login');
       }
    catch(httpError){
       res.status(httpError.status).send(httpError.msg);
    }

}

const login = async (req,res)=>{
    try {
        const {email, Password} = req.body;
        if (!email || !Password){
            res.redirect('/login');
        }
        if(!(await pool.query(userQueries.checkEmailExists, [email])).rows.length)
            throw new httpError("Email doesn't exist!", 400);

        const results = await pool.query(authQueries.checkPassword, [email]);
        const password_hash  = results.rows[0].password;
        const passwordMatched = await bcrypt.compare(Password, password_hash);
        if(!passwordMatched)
             throw new httpError("Invalid credentials!", 400);

        const getuser = await pool.query(userQueries.getUserFromEmail, [email]);
        const user = getuser.rows[0].user_id;
        attachCookieToResponse({res, user});
        res.redirect('/');
    }
    catch(httpError){
        res.status(httpError.status).send(httpError.msg);
    }

}

module.exports = {
    register,
    login,
}