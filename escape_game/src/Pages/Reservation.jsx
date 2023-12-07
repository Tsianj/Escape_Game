import React, { useState } from 'react';
import '../Connexion.css';

const Reservation = () => {
    const [isActive, setIsActive] = useState(false)
    const handleDateTimeChange = (event) => {
        const selectedDate = new Date(event.target.value);
        const disallowedHours = [0, 1, 2, 3, 4, 5, 6, 7, 8, 11, 12, 13, 23]; // Heures de minuit à 9h et de 12h à 14h
        
        if (disallowedHours.includes(selectedDate.getHours())) {
            // Si l'heure sélectionnée est dans la liste des heures non autorisées, annuler la sélection
            event.target.value = ''; // Effacer la valeur de l'input
            if (selectedDate.getHours() === 11 || selectedDate.getHours() === 23) {
              alert('Délais insuffisant pour une partie.'); // Alert pour les heures 11h et 23h
            } else {
              alert('Les horaires d\'ouverture sont de 9h - 12h et 14h - Minuit.'); // Autres heures non autorisées
            }
          }
        };

    return <>
    <div className='body'>
        <div className={isActive ? "container active" : "container"} id='container'>
            {/* <!-- Formulaire d'inscription --> */}
            <div className="form-container sign-up">
                <form>
                    <h1>A domicile</h1>
                    {/* <!-- Champs pour entrer le nom, l'email et le mot de passe --> */}
                    <input type="hidden" value={true} required />
                    <input type="text" placeholder="Nom" required />
                    <input type="text" placeholder="Prénom" required/>
                    <input type="email" placeholder="Adresse mail" required/>
                    <input type="text" placeholder="Adresse Postale" required/>
                    <input type="tel" placeholder="Numéro de téléphone"required />
                    <input type="text" placeholder="Nom de l'escape game" required/>
                    <input type="datetime-local" onChange={handleDateTimeChange} required/>
                    <input type="number" placeholder="Nombre de participants" min={2} max={10} required/>
                    <p>Minimum 2 personnes et maximum 10 personnes</p>
                    <button type='submit'>Envoyer</button>
                </form>
            </div>
            {/* <!-- Formulaire de connexion --> */}
            <div className="form-container sign-in">
                <form>
                    <h1>Sur Place</h1>
                    <input type="email" placeholder="Adresse mail" required/>
                    <input type="text" placeholder="Nom" required/>
                    <input type="text" placeholder="Prénom" required/>
                    <input type="tel" placeholder="Numéro de téléphone" required/>
                    <input type="datetime-local" onChange={handleDateTimeChange} required/>
                    <input type="text" placeholder="Nom de l'escape game" required/>
                    <input type="number" placeholder="Nombre de participants" min={2} max={8} required/>
                    <p>Minimum 2 personnes et maximum 8 personnes</p>
             
                    <button type='submit'>Envoyer</button>
                </form>
            </div>
            {/* <!-- Conteneur pour basculer entre les formulaires --> */}
            <div className="toggle-container">
                <div className="toggle">
                    {/* <!-- Panneau pour le formulaire de connexion --> */}
                    <div className="toggle-panel toggle-left">
                        <h1>Sur site</h1>
                        <p>Pour vos réservations sur site remplissez le formulaire</p>
                        <button className="hidden" id="login" onClick={() => {setIsActive(false)}}>Formulaire</button>
                    </div>
                    {/* <!-- Panneau pour le formulaire d'inscription --> */}
                    <div className="toggle-panel toggle-right">
                        <h1>Domicile</h1>
                        <p>Pour vos réservations à domicile remplissez le formulaire</p>
                        <button className="hidden"  id="register" onClick={() => {setIsActive(true)}}>Formulaire</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
    ;
}

export default Reservation;