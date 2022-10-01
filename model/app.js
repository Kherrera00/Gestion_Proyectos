let mysql = require("mysql");

let conexion = mysql.createConnection({

  host: "localhost",
  user: "root",
  password: "Admin12345",
  database: "crearusuario"
});

conexion.connect(function(err){
  if(err){
    throw err;
  }else {
    console.log("CONEXION EXITOSA");
  }

});

conexion.end();