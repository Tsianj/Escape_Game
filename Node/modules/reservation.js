const express = require("express");
const reservationService = require("../services/reservationService");
const router = express.Router();

router.post("/", (req, res) => {
    let data = req.body;
    console.log(data);
    reservationService
      .addReservation(data)
      .then((result) => {
        res.status(201);
        res.json(data);
      })
      .catch((err) => {
        console.log(err);
        res.send({ message: "Votre ajout ne s'est pas bien passé" });
      });
  });

  module.exports = router;