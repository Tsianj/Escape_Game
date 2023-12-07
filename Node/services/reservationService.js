const conn = require("./database");

const addResa = (resa) => {
    return new Promise((resolve, reject) => {
        let sql = `INSERT INTO reservation (id_uti, id_escape, creneau, Domicile, Nb_participant) VALUES ('${reservation.id_uti}', '${reservation.id_escape}', '${reservation.creneau}', '${reservation.Domicile}', '${reservation.Nb_participant}')`        
        let query = conn.query(sql, (err, result, field) => {
            if(err) return reject(err);
            resolve(result);
        });
    })
}