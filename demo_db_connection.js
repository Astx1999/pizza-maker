const mysql = require('mysql');
const instance = null
const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'pizza_maker'
});
connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});


connection.query("SELECT * FROM pizzas", function (err, results, fields) {
    if (err) throw err;
    // console.log(results);
});


class DbService {
    static getDbServiceInstance() {
        return instance ? instance : new DbService();
    }

    async getAllData() {
        try {
            const response = await new Promise((resolve, reject) => {
                const query = "SELECT * FROM pizzas;";

                connection.query(query, (err, results) => {
                    if (err) reject(new Error(err.message));
                    resolve(results);
                })
            });
            // console.log(response);
            return response;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = DbService
// Execute some query statements
// I.e. SELECT * FROM FOO
// connection.end();