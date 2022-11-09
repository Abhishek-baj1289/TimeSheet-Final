// function myFunction() {
//     // document.getElementById("demo").style.color = "red";
//     var email=document.getElementById('email').value;
//     var uname=document.getElementById('uname').value;
//     var pass=document.getElementById('pass').value;

//     alert(email,uname,pass)
//     console.log(email,uname,pass);
// }

// function myFunction(){
//     var email=document.getElementById('email').value;
//     var uname=document.getElementById('uname').value;
//     var pass=document.getElementById('pass').value;
//   }

  var mysql = require('mysql');

  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "home",
    database: "company"
  });
  

  // adding into query

  
    var sql = "INSERT INTO employee VALUES ('abc', 'abc@123', 'test')";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });
  