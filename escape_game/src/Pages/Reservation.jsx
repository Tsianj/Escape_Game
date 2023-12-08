import React, { useState, useContext } from "react";
import "../Connexion.css";
import AuthContext from "../Components/AuthContext";

const Reservation = () => {
  const [isActive, setIsActive] = useState(false);

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
              <input type="text" placeholder="Nom" required />
              <input type="text" placeholder="Prénom" required />
              <input type="email" placeholder="Adresse mail" required />
              <input type="text" placeholder="Adresse Postale" required />
              <input type="tel" placeholder="Numéro de téléphone" required />
              <input type="text" placeholder="Nom de l'escape game" required />
              <input type="datetime-local" required />
              <input type="" placeholder="Nombre de participant" />
              <input
                type="number"
                placeholder="Nombre de participants"
                min={2}
                max={10}
                required
              />
              <p>Minimum 2 personnes et maximum 10 personnes</p>
              <button type="submit">Envoyer</button>
            </form>
          </div>
          {/* <!-- Formulaire de connexion --> */}
          <div className="form-container sign-in">
            <form>
              <h1>Sur Place</h1>
              <input type="email" placeholder="Adresse mail" required />
              <input type="text" placeholder="Nom" required />
              <input type="text" placeholder="Prénom" required />
              <input type="tel" placeholder="Numéro de téléphone" required />
              <input type="datetime-local" required />
              <input type="text" placeholder="Nom de l'escape game" required />
              <input
                type="number"
                placeholder="Nombre de participants"
                min={2}
                max={8}
                required
              />
              <p>Minimum 2 personnes et maximum 8 personnes</p>

              <button type="submit">Envoyer</button>
            </form>
          </div>
          {/* <!-- Conteneur pour basculer entre les formulaires --> */}
          <div className="toggle-container">
            <div className="toggle">
              {/* <!-- Panneau pour le formulaire de connexion --> */}
              <div className="toggle-panel toggle-left">
                <h1>Sur site</h1>
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
                <h1>Domicile</h1>
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
