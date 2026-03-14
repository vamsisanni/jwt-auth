const mysql = reuire('mysql2');
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Thanish@123',
  database: 'company_db'
});

db.connect((err) =>{
  if(err){
    console.log('DB connection error');
    
  } else {
    console.log('database connected');
    
  }
});

module.exports = db;