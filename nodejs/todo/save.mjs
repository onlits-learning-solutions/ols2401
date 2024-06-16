import { createConnection } from 'mysql';

let con = createConnection({
    host: "localhost",
    user: "ols2401",
    password: "ols2401"
})

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});