import axios from "axios";

function fetchEscapes() {
  return axios.get("/http://127.0.0.1:3000/escapes");
}

function fetchEscapesCard(id_dom) {
    return axios.get("/http://127.0.0.1:3000/escapes" + id_dom);
  }


export default { 
    fetchEscapes, 
    fetchEscapesCard

};
