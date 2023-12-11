const express = require("express");
const galerieService = require("../services/galerieService");
const router = express.Router();

<<<<<<< HEAD
/*Ce sont des routes pour des pages d'acceuil (de présentation) comme dans scolarité*/ 
router.get("/card", (req, res) => {
=======

/*Ce sont des routes pour des pages d'acceuil (de présentation) comme dans scolarité*/ 
router.get("/card", (req, res) => {

>>>>>>> 86b11a86e62d606b46bba0c432d9d71bbd9646f6
    galerieService.fetchGalerie().then(result => {
        res.status(200)
        res.json(result);
    }).catch(err => {
        console.error("Oops...", err);
        res.json({"message" : "Error" + err.sqlMessage})
    });
});


module.exports = router;