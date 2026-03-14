const jwt = require('jsonwebtoken');
exports.login = (req,res) =>{
  const {email,password}  = req.body;
  const sql = 'SELECT * FROM users WHERE email=?';
  db.query(sql, [email], (err,result) =>{
    if(err){
      return res.status(500).json({
        message: 'User not found'
      });
    }
    if(result.length === 0) {
      return res.status(401).json({
        message: 'User not found'
      });
    };

    const user = result[0];

    const validPassword = bcrypt.compareSync(password, user.password);

    if(!validPassword){
      return res.status(401).json({
        messsage: 'Invalid password'
      });
    }

    const token = jwt.sign(
      {id: user.id, email:user.email},
      process.env.JWT_SECRET,
      { expiresIn: '1h'}
    );

    res.json({
      messasge: 'Login success',
      token: token
    });

  });
};



are u there