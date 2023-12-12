const conn = require("./database");

const addResa = (reservation) => {
    return new Promise((resolve, reject) => {
        let sql = `INSERT INTO reservation (id_uti, id_escape, creneau, domicile, nb_participant) VALUES ('${reservation.id_uti}', '${reservation.id_escape}', '${reservation.creneau}', '${reservation.isDomicile === true ? 1 : 0}', '${reservation.Nb_participant}')`        
        conn.query(sql, (err, result, field) => {
            if(err) return reject(err);
            resolve(result);
        });
    })
}

module.exports = {
    addResa
}