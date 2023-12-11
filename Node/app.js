const express = require("express");
const utilisateur = require("./modules/utilisateur");
const escapes = require("./modules/escapes");
const galerie = require("./modules/galerie");
const reservation = require("./modules/reservation");
const utilisateurService = require("./services/utilisateurService");
<<<<<<< HEAD
const reservationService = require("./services/reservationService");
const galerieService = require("./services/galerieService");
=======
>>>>>>> 86b11a86e62d606b46bba0c432d9d71bbd9646f6
const cors = require("cors");
const app = express();
const port = 3000;
app.use(express.json());

// app.use(cors({
//     origin: 'http://127.0.0.1:3001'
// }));
const allowedOrigins = ["http://localhost:3001", "http://127.0.0.1:3001"];

app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin
      // (like mobile apps or curl requests)
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        var msg =
          "The CORS policy for this site does not " +
          "allow access from the specified Origin.";
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
  })
);
app.use("/escapes", escapes);
app.post("/connexion", (req, res) => {
  let data = req.body;
  utilisateurService.connUtilisateur(data).then((result) => {
      res.status(201);
      res.json(result[0]);
    })
    .catch((err) => {
      console.log(err);
      res.send({ message: "Votre ajout ne s'est pas bien passé" });
    });
});
app.use("/galerie", galerie);
app.use("/utilisateur", utilisateur);
app.post("/reservation", reservation);
app.listen(port, () => {
  console.log(
    `Application exemple à l'écoute sur le port http://localhost:${port}/ !`
  );
  console.log(`Route utilisateur : http://localhost:${port}/utilisateur !`);
});
