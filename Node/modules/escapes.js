const express = require("express");
const conn = require("../services/database");
const escapesService = require("../services/escapesService");
const router = express.Router();

/*Ce sont des routes pour des pages d'acceuil (de présentation) comme dans scolarité*/ 
router.get("/", (req, res) => {
    escapesService.fetchEscapes().then(result => {
        res.status(200)
        res.json(result);
    }).catch(err => {
        console.error("Oops...", err);
        res.json({"message" : "Error" + err.sqlMessage})
    });
});

router.get("/card", (req, res) => {
    escapesService.fetchEscapesCard().then(result => {
        res.status(200)
        res.json(result);
    }).catch(err => {
        console.error("Oops...", err);
        res.json({"message" : "Error" + err.sqlMessage})
    });
});

router.get("/carddom", (req, res) => {
    escapesService.fetchEscapesCardDom().then(result => {
        res.status(200)
        res.json(result);
    }).catch(err => {
        console.error("Oops...", err);
        res.json({"message" : "Error" + err.sqlMessage})
    });
});

router.get("/escapesdetails/:id_escape", (req, res) => {
    escapesService.fetchEscapesById(req.params.id_escape).then(result => {
        res.status(200)
        res.json(result[0]);
    }).catch(err => {
        console.error("Oops...", err);
        res.json({"message" : "Error" + err.sqlMessage})
    });
});


module.exports = router;