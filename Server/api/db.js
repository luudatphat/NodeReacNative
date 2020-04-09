const mysql     = require('mysql');
var dotenv      = require('dotenv').config();
// Kết nối với mysql
const db = mysql.createConnection({
  host: process.env.DB_HOST         || "localhost",
  user: process.env.DB_USER         || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME     || "test"
});

//Kiểm tra mysql đã kết nối hay chưa ?
db.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
    console.log('Mysql ' + db.threadId); 
  });

module.exports = db