import axios from "axios";

function fetchEscapes() {
  return axios.get("http://127.0.0.1:3000/escapes");
}

function fetchEscapesCard() {
<<<<<<< HEAD
    return axios.get("http://127.0.0.1:3000/escapes/card");
  }
=======
  return axios.get("http://127.0.0.1:3000/escapes/card");
}

function fetchEscapesCardDom() {
  return axios.get("http://127.0.0.1:3000/escapes/carddom");
}

function fetchEscapesById(id_escape) {
  return axios.get(`http://127.0.0.1:3000/escapes/escapesdetails/` + id_escape);
}
>>>>>>> 86b11a86e62d606b46bba0c432d9d71bbd9646f6

  function fetchEscapeNames() {
      return axios.get("http://127.0.0.1:3000/escapes/names");
    }
  function fetchEscapeNamesDom() {
      return axios.get("http://127.0.0.1:3000/escapes/namesdom");
    }

export default { 
    fetchEscapes, 
    fetchEscapesCard,
<<<<<<< HEAD
    fetchEscapesCardDom
=======
    fetchEscapesCardDom,
    fetchEscapesById,
    fetchEscapeNames,
    fetchEscapeNamesDom

>>>>>>> 86b11a86e62d606b46bba0c432d9d71bbd9646f6
};
