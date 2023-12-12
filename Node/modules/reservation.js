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


module.exports = router;

