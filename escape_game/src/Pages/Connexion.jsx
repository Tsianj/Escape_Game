import React, { useState } from 'react';
import '../Connexion.css';

const Connexion = () => {
    const [isActive, setIsActive] = useState(false)


    return <>
    <div className='body'>
        <div className={isActive ? "container active" : "container"} id='container'>
            {/* <!-- Formulaire d'inscription --> */}
            <div className="form-container sign-up">
                <form>
                    <h1>Nouveau Compte</h1>
                    {/* <!-- Champs pour entrer le nom, l'email et le mot de passe --> */}
                    <input type="text" placeholder="Nom" required/>
                    <input type="text" placeholder="Prénom" required/>
                    <input type="email" placeholder="Adresse mail" required/>
                    <input type="password" placeholder="Mot de passe" required/>
                    <input type="text" placeholder="Adresse Postale" required/>
                    <input type="number" placeholder="Numéro de téléphone" required/>
                    <button>S'incrire</button>
                </form>
            </div>
            {/* <!-- Formulaire de connexion --> */}
            <div className="form-container sign-in">
                <form>
                    <h1>Connexion</h1>
                    {/* <!-- Champs pour entrer l'email et le mot de passe --> */}
                    <input type="email" placeholder="Adresse mail" required/>
                    <input type="password" placeholder="Mot de passe" required/>
                    {/* <!-- Lien pour réinitialiser le mot de passe --> */}
                    <a href="#">Mot de passe oublié</a>
                    <button>Se connecter</button>
                </form>
            </div>
            {/* <!-- Conteneur pour basculer entre les formulaires --> */}
            <div className="toggle-container">
                <div className="toggle">
                    {/* <!-- Panneau pour le formulaire de connexion --> */}
                    <div className="toggle-panel toggle-left">
                        <h1>Bon Retour!</h1>
                        <p>Pour vos connecter sur notre site</p>
                        <button className="hidden" id="login" onClick={() => {setIsActive(false)}}>Se connecter</button>
                    </div>
                    {/* <!-- Panneau pour le formulaire d'inscription --> */}
                    <div className="toggle-panel toggle-right">
                        <h1>Bienvenue</h1>
                        <p>Inscrivez-vous pour pouvoir faire vos réservations</p>
                        <button className="hidden"  id="register" onClick={() => {setIsActive(true)}}>S'inscrire</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
    ;
}

export default Connexion;