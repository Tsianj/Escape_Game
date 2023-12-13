import React, { useState, useContext, useEffect } from "react";
import AuthContext from "../Components/AuthContext";
import "../Connexion.css";
import reservationService from "../Services/reservationService";
import escapesService from "../Services/escapesService";

const Reservation = () => {
  const [isActive, setIsActive] = useState(false);
  const { user } = useContext(AuthContext);
  console.log(user);
  const [formData, setFormData] = useState({
    domicile: {
      id_uti: user.id_uti,
      id_escape: "",
      creneau: "",
      isDomicile: true,
      Nb_participant: 2, // Mettez la valeur par défaut pour le nombre de participants à domicile
    },
    surPlace: {
      id_uti: user.id_uti,
      id_escape: "",
      creneau: "",
      isDomicile: false,
      Nb_participant: 2,
    },
  });
  console.log(formData.surPlace);
  const [escapeNom, setEscapeNom] = useState([]);
  const fetchEscapeNom = async () => {
    try {
      escapesService.fetchEscapeNames().then((response) => {
        setEscapeNom(response.data);
      });
    } catch (e) {
      console.log(e);
    }
  };

  const [escapeNomDom, setEscapeNomDom] = useState([]);
  const fetchEscapeNomDom = async () => {
    try {
      escapesService.fetchEscapeNamesDom().then((response) => {
        setEscapeNomDom(response.data);
      });
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchEscapeNomDom();
    fetchEscapeNom();
  }, []);

  const handleInputChange = (event, section, field) => {
    const value = event.target.value;
    console.log(value);
    setFormData((prevFormData) => ({
      ...prevFormData,
      [section]: {
        ...prevFormData[section],
        [field]: value,
      },
    }));
  };

  const handleFormSubmit = (event, location) => {
    event.preventDefault();
      // Si l'heure est valide, envoyer les données au serveur
      reservationService
        .addReservation(location==="isDomicile" ? formData.domicile : formData.surPlace)
        .then((response) => {
          console.log("Réponse du serveur :", response.data);
        })
        .catch((error) => {
          console.error("Erreur lors de l'envoi au serveur :", error);
        });
        setFormData({
          domicile: {
            id_uti: user.id_uti,
            id_escape: "",
            creneau: "",
            isDomicile: true,
            Nb_participant: 2, // Mettez la valeur par défaut pour le nombre de participants à domicile
          },
          surPlace: {
            id_uti: user.id_uti,
            id_escape: "",
            creneau: "",
            isDomicile: false,
            Nb_participant: 2,
          }})
  };
  const handleDateTimeChange = (event) => {
    const selectedDate = new Date(event.target.value);
    const disallowedHours = [0, 1, 2, 3, 4, 5, 6, 7, 8, 11, 12, 13, 23]; // Heures de minuit à 9h et de 12h à 14h

    if (disallowedHours.includes(selectedDate.getHours())) {
      // Si l'heure sélectionnée est dans la liste des heures non autorisées, annuler la sélection
      event.target.value = ""; // Effacer la valeur de l'input
      if (selectedDate.getHours() === 11 || selectedDate.getHours() === 23) {
        alert("Délais insuffisant pour une partie."); // Alert pour les heures 11h et 23h
      } else {
        alert("Les horaires d'ouverture sont de 9h - 12h et 14h - Minuit."); // Autres heures non autorisées
      }
    }
    setFormData((prevFormData) => ({
      ...prevFormData,
      domicile: {
        ...prevFormData.domicile,
        creneau: event.target.value,
      },
    }));
  };

  const handleDateTimeChangePlace = (event) => {
    const selectedDate = new Date(event.target.value);
    const disallowedHours = [0, 1, 2, 3, 4, 5, 6, 7, 8, 11, 12, 13, 23]; // Heures de minuit à 9h et de 12h à 14h

    if (disallowedHours.includes(selectedDate.getHours())) {
      // Si l'heure sélectionnée est dans la liste des heures non autorisées, annuler la sélection
      event.target.value = ""; // Effacer la valeur de l'input
      if (selectedDate.getHours() === 11 || selectedDate.getHours() === 23) {
        alert("Délais insuffisant pour une partie."); // Alert pour les heures 11h et 23h
      } else {
        alert("Les horaires d'ouverture sont de 9h - 12h et 14h - Minuit."); // Autres heures non autorisées
      }
    }
    setFormData((prevFormData) => ({
      ...prevFormData,
      surPlace: {
        ...prevFormData.surPlace,
        creneau: event.target.value,
      },
    }));
  };
  return (
    <>
      <div className="body">
        <div
          className={isActive ? "container active" : "container"}
          id="container"
        >
          {/* <!-- Formulaire d'inscription --> */}
          <div className="form-container sign-up">
            <form>
              <h1>A domicile</h1>
              {/* <!-- Champs pour entrer le nom, l'email et le mot de passe --> */}
              <input type="hidden" value={true} required />
              <select
                name="id_escape"
                value={formData.domicile.id_escape}
                onChange={(e) => handleInputChange(e, "domicile", "id_escape")}
                required
              >
                <option value="">Choisir un escape game</option>
                {escapeNomDom.map((escapeGame) => (
                  <option
                    key={escapeGame.id_escape}
                    value={escapeGame.id_escape}
                  >
                    {escapeGame.nom_escapes}
                  </option>
                ))}
              </select>
              <input
                type="datetime-local"
                onChange={handleDateTimeChange}
                value={formData.domicile.creneau}
                required
              />
              <input
                type="number"
                placeholder="Nombre de participants"
                value={formData.domicile.Nb_participant}
                onChange={(e) =>
                  handleInputChange(e, "domicile", "Nb_participant")
                }
                min={2}
                max={10}
                required
              />
              <p>Minimum 2 personnes et maximum 10 personnes</p>
              <button
                onClick={(event) => {
                  handleFormSubmit(event, "isDomicile");
                }}
              >
                Envoyer
              </button>
            </form>
          </div>
          {/* <!-- Formulaire de connexion --> */}
          <div className="form-container sign-in">
            <form>
              <h1>Sur Place</h1>
              <select
                name="id_escape"
                value={formData.surPlace.id_escape}
                onChange={(e) => handleInputChange(e, "surPlace", "id_escape")}
                required
              >
                <option value="">Choisir un escape game</option>
                {escapeNom.map((escapeGame) => (
                  <option
                    key={escapeGame.id_escape}
                    value={escapeGame.id_escape}
                  >
                    {escapeGame.nom_escapes}
                  </option>
                ))}
              </select>
              <input
                type="datetime-local"
                onChange={handleDateTimeChangePlace}
                value={formData.surPlace.creneau}
                required
              />
              <input
                type="number"
                placeholder="Nombre de participants"
                value={formData.surPlace.Nb_participant}
                onChange={(e) =>
                  handleInputChange(e, "surPlace", "Nb_participant")
                }
                min={2}
                max={8}
                required
              />

              <p>Minimum 2 personnes et maximum 8 personnes</p>

              <button
                onClick={(event) => {
                  handleFormSubmit(event, "isNotDomicile");
                }}
              >
                Envoyer
              </button>
            </form>
          </div>
          {/* <!-- Conteneur pour basculer entre les formulaires --> */}
          <div className="toggle-container">
            <div className="toggle">
              {/* <!-- Panneau pour le formulaire de connexion --> */}
              <div className="toggle-panel toggle-left">
                <h1 className="titre-form">Sur site</h1>
                <p>Pour vos réservations sur site remplissez le formulaire</p>
                <button
                  className="hidden"
                  id="login"
                  onClick={() => {
                    setIsActive(false);
                  }}
                >
                  Formulaire
                </button>
              </div>
              {/* <!-- Panneau pour le formulaire d'inscription --> */}
              <div className="toggle-panel toggle-right">
                <h1 className="titre-form">Domicile</h1>
                <p>Pour vos réservations à domicile remplissez le formulaire</p>
                <button
                  className="hidden"
                  id="register"
                  onClick={() => {
                    setIsActive(true);
                  }}
                >
                  Formulaire
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reservation;
