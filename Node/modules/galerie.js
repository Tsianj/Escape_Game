const express = require("express");
const galerieService = require("../services/galerieService");
const router = express.Router();


router.get("/", (req, res) => {
    galerieService.fetchGalerie().then(result => {
        res.status(200)
        res.json(result);
    }).catch(err => {
        console.error("Oops...", err);
        res.json({"message" : "Error" + err.sqlMessage})
    });
});


module.exports = router;