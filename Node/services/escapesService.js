const conn = require("./database");

const fetchEscapes = () => {
    return new Promise((resolve, reject) => {
        let sql = `SELECT * FROM escapes;`;
        let query = conn.query(sql, (err, result, field) => {
            if(err) return reject(err);
            resolve(result);
        });
    });
}

module.exports = {fetchEscapes};