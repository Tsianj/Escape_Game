import React, { useState } from 'react';
import '../Connexion.css';
import utilisateurService from '../Services/utilisateurService';

const Connexion = () => {
    const [isActive, setIsActive] = useState(false)
    const [utilisateur, setUtilisateur] = useState({});
    const handleChange = (event) => {
        const {name, value} = event.currentTarget;
        setUtilisateur({...utilisateur, [name] : value})
    }
    
    const handleAdd = () => {
        try{
            const response = utilisateurService.addUtilisateur(utilisateur);
        }catch (e){
            console.log(e)
        }
        console.log(utilisateur)
    }


    return <>
    <div className='body'>
        <div className={isActive ? "container active" : "container"} id='container'>
            {/* <!-- Formulaire d'inscription --> */}
            <div className="form-container sign-up">
                <form>
                    <h1>Nouveau Compte</h1>
                    {/* <!-- Champs pour entrer le nom, l'email et le mot de passe --> */}
                    <input type="text" name='nom_uti' placeholder="Nom" value={utilisateur.nom_uti} onChange={handleChange} required/>
                    <input type="text" name='prenom_uti' placeholder="Prénom" value={utilisateur.prenom_uti} onChange={handleChange} required/>
                    <input type="email" name='mail_uti' placeholder="Adresse mail" value={utilisateur.mail_uti} onChange={handleChange} required/>
                    <input type="password" name='passwords' placeholder="Mot de passe" value={utilisateur.passwords} onChange={handleChange} required/>
                    <input type="text" name='adresse' placeholder="Adresse Postale" value={utilisateur.adresse} onChange={handleChange} required/>
                    <input type="number" name='numero_tel' placeholder="Numéro de téléphone" value={utilisateur.numero_tel} onChange={handleChange} required/>
                    <button onClick={handleAdd}>S'incrire</button>
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