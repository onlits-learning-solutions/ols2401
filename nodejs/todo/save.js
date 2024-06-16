let mysql = require('mysql');

let con = mysql.createConnection({
    host: "localhost",
    user: "ols2401",
    password: "ols2401",
    database: "todo_2401"
})

con.connect(function (err) {
    if (err) throw err;
    let sql = "INSERT INTO todo_item(title) VALUES('Learn Node.JS')";
    con.query(sql, function(err, result) {
        if (err) throw err;
        console.log("1 record inserted");
        console.log(result);
    });
});