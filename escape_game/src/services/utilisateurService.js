import axios from 'axios';

function fetchUtilisateur() {
    return axios.get('/http://127.0.0.1:3000/utilisateur');
}

export default fetchUtilisateur;