const db = require('../db');
const bcrypt = require('bcryptjs');

exports.register = (req,res) =>{
  const{ email,password } = req.body;
  const hashedPassword = bcrypt.hashSync(password,10);
  const sql = 'INSERT INTO users(email,hashedPassword) VALUES (?,?)';

  db.query(sql, [email,hashedPassword], (err,result)=>{
    if(err) {
      return res.status(500).json({
        message: 'database error'
      });
    }

    res.json({
      message: 'created succesfully'
    });
  });
};