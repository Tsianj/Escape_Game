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

const fetchEscapesCard = () => {
    return new Promise((resolve, reject) => {
        let sql = `SELECT es.id_escape, es.nom_escapes, es.escape_dom, gl.url, gl.alt, gl.id_galerie FROM escapes AS es  JOIN galerie AS gl ON es.id_escape = gl.id_escape WHERE es.escape_dom = 0 GROUP BY es.id_escape`;
        let query = conn.query(sql, (err, result, field) => {
            if(err) return reject(err);
            resolve(result);
        });
    });
}

const fetchEscapesCardDom = () => {
    return new Promise((resolve, reject) => {
        let sql = `SELECT es.id_escape, es.nom_escapes, es.escape_dom, gl.url, gl.alt, gl.id_galerie FROM escapes AS es JOIN galerie AS gl ON es.id_escape = gl.id_escape WHERE es.escape_dom = 1`;
        let query = conn.query(sql, (err, result, field) => {
            if(err) return reject(err);
            resolve(result);
        });
    });
}




module.exports = {fetchEscapes, fetchEscapesCard,fetchEscapesCardDom};