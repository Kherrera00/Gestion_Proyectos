let mysql = require("mysql");

let conexion = mysql.createConnection({

  host: "localhost",
  user: "root",
  password: "123456",
  database: "dbweb"
});

conexion.connect(function(err){
  if(err){
    throw err;
  }else {
    console.log("CONEXION EXITOSA");
  }

});

conexion.end();