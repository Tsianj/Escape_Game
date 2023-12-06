const conn = require("./database");

const fetchUtilisateur = () => {
    return new Promise((resolve, reject) => {
        let sql = `SELECT * FROM utilisateur;`;
        let query = conn.query(sql, (err, result, field) => {
            if(err) return reject(err);
            resolve(result);
        });
    });
}

module.exports = {fetchUtilisateur};