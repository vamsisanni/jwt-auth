const jwt = require('jsonwebtoken');

exports.verifyTooken = (req,res,next)=>{
  const header = req.header['authentication'];

  if(!header) {
    return res.json({
      message: 'token required'
    });
  };

  const token = req.header.split(' ')[1];

  const verify = jwt.verify(token, process.env, (err,decodded) =>{
    if(err){
      console.log('invalid');
      
    }

    req.user = decodded;
  })
  next();
}