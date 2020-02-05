// Set up MySQL connection.
var mysql = require("mysql");
var connection;

//connect to JAWS/Heroku
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "k2fqe1if4c7uowsh.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        port: 3306,
        user: "tg6b7537dcfdk5iq",
        password: "bfo177mlk1jqxo9a",
        database: "pnc2av4xpkaujl0y"
    });
};

connection.connect();

// Export connection for our ORM to use.  
module.exports = connection;




