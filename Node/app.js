const express = require("express");
const jwt = require("jsonwebtoken");
const utilisateur = require("./modules/utilisateur");
const escapes = require("./modules/escapes");
const galerie = require("./modules/galerie");
const commentaire = require("./modules/commentaires");
const reservation = require("./modules/reservation");
const utilisateurService = require("./services/utilisateurService");
const commentaireService = require("./services/commentairesService");
const cors = require("cors");
const app = express();
const port = 3000;
const SECRET = "toto";
const allowedOrigins = ["http://localhost:3001", "http://127.0.0.1:3001"];


/* Récupération du header bearer */
const extractBearerToken = (headerValue) => {
  if (typeof headerValue !== "string") {
    return false;
  }
  const matches = headerValue.match(/(bearer)\s+(\S+)/i);
  return matches && matches[2];
};

/* Vérification du token */
const checkTokenMiddleware = (req, res, next) => {
  // Récupération du token
  const token =
    req.headers.authorization && extractBearerToken(req.headers.authorization);
  // Présence d'un token
  if (!token) {
    return res.status(401).json({ message: "Token inexistant" });
  }
  // Véracité du token
  jwt.verify(token, SECRET, (err, decodedToken) => {
    if (err) {
      res.status(401).json({ message: "Error. Mauvais token" });
    } else {
      return next();
    }
  });
};


app.get("/", checkTokenMiddleware, (req, res) => {
  const token =
    req.headers.authorization && extractBearerToken(req.headers.authorization);
  // Décodage du token
  const decoded = jwt.decode(token, { complete: false });

  if (decoded != null && decoded != undefined) {
    res.send("Hello World!");
  } else {
  }
});

/*Utilisation d'express*/ 
app.use(express.json());

/* Utilisation de cors */
// app.use(cors({
//     origin: 'http://127.0.0.1:3001'
// }));
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

/*Route extraction galerie*/
app.use("/galerie", galerie);
/*Route extraction utilisateur*/
app.use("/utilisateur", utilisateur);
/*Route extractionescapes*/ 
app.use("/escapes", escapes);



/*Route permattant la connexion*/ 
app.post("/connexion", (req, res) => {
  // Pas d'information à traiter
  if (!req.body.mail_uti && !req.body.passwords) {
    return res
      .status(400)
      .json({ message: "Error. Please enter the correct login and password" });
  }
  // Checking
  utilisateurService
    .connUtilisateur(req.body)
    .then((result) => {
      // console.log(result[0])
      // if (result[0] instanceof RowDataPacket) {
      //     res.status(400).json({ message: 'Error. Wrong login or password' })
      // }
      /*usage de token utilisateur*/ 
      const token = jwt.sign(
        {
          user: result[0],
        },
        SECRET,
        { expiresIn: "1 hours" }
      );

      res.json({ access_token: token });
    })
    .catch((err) => {
      console.error("Oops...", err);
    });
});

/*Route SECURISE pour créer une réservation*/ 
app.use("/reservation", checkTokenMiddleware, reservation);
/*route API (non fonctionnel PB: token */ 
app.use("/galerie", galerie);
app.use("/utilisateur", utilisateur);
app.use("/commentaire", commentaire);
app.post("/commentaire", (req, res) => {
  let data = req.body;
  commentaireService.addCommentaire(data).then((result) => {
      res.status(201);
      res.json(result[0]);
    })
    .catch((err) => {
      console.log(err);
      res.send({ message: "Votre ajout ne s'est pas bien passé" });
    });
});
app.post("/reservation", reservation);

app.listen(port, () => {
  console.log(
    `Application exemple à l'écoute sur le port http://127.0.0.1:${port}/ !`
  );
  console.log(`Route utilisateur : http://127.0.0.1:${port}/utilisateur !`);
});
