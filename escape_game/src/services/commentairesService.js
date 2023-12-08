import axios from 'axios';

function fetchCommentaires() {
    return axios.get('http://127.0.0.1:3000/commentaires');
}

export default fetchCommentaires;