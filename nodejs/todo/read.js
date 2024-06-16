let mysql = require('mysql');

let con = mysql.createConnection({
    host: "localhost",
    user: "ols2401",
    password: "ols2401",
    database: "todo_2401"
})

con.connect(function (err) {
    if (err) throw err;
    let sql = "SELECT * FROM todo_item";
    con.query(sql, function(err, result) {
        if (err) throw err;
        console.log(result[0].title);
    });
});