import axios from "axios";

function fetchEscapes() {
  return axios.get("http://127.0.0.1:3000/escapes");
}

function fetchEscapesCard() {

    return axios.get("http://127.0.0.1:3000/escapes/card" );

  }

  function fetchEscapesCardDom() {
    return axios.get("http://127.0.0.1:3000/escapes/carddom");
  }

export default { 
    fetchEscapes, 
    fetchEscapesCard,
    fetchEscapesCardDom
};
