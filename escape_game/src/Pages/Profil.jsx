import React, {useContext, useEffect, useState} from 'react';
import AuthContext from "../Components/AuthContext";
import utilisateurService from "../Services/utilisateurService";
import reservationService from '../Services/reservationService';
import Auth from "../Services/Auth";

const Profil = () => {
    const {user} = useContext(AuthContext);
    const [users, setUsers] = useState({}); 
    const Auth0 = new Auth();

    const fetchUtilisateurById = () => {
        try {
            utilisateurService.fetchUtilisateurById(user.id_uti)
            .then((response) => {
                setUsers(response.data);
                console.log(response.data);
            });
        } catch (e) {
            console.log(e);
        };
    }

    const fetchResa =()  => {
        try {
             reservationService.fetchResa(user.id_uti)
             .then((response) =>{
                setUsers(response.data);
                console.log(response.data);
             });

    }catch (e) {
        console.log(e);
    };

    useEffect(()=> {
        fetchUtilisateurById(),
        fetchResa();
    },[]);
    

    console.log(user);
    return<>
        {user.nom_uti};
        {user.prenom_uti};
        {user.mail_uti};
        {user.adresse};
        {user.numero_tel};

        {user.creneau};
        {user.domicile};
        {user.nb_participantr};
    </>;
}}
export default Profil;