const conn = require("./database");

const fetchCommentaires = () => {
    return new Promise((resolve, reject) => {
        let sql = `SELECT * FROM utilisateur;`;
        let query = conn.query(sql, (err, result, field) => {
            if(err) return reject(err);
            resolve(result);
        });
    });
}

module.exports = {fetchCommentaires};