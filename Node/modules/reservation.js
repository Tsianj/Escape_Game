const express = require("express");
const reservationService = require("../services/reservationService");
const router = express.Router();

router.post("/", (req, res) => {
    let data = req.body;
    console.log(data);
    reservationService
        .addResa(data)
        .then((result) => {
            res.status(201).json(data); // Envoi de la réponse avec le statut 201 et les données ajoutées
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ message: "Votre ajout ne s'est pas bien passé" }); // En cas d'erreur, renvoyer un statut d'erreur 500
        });
});


<<<<<<< HEAD
  module.exports = router;
=======
module.exports = router;

>>>>>>> 86b11a86e62d606b46bba0c432d9d71bbd9646f6
