import axios from "axios";

function addReservation(reservation){
    return axios.post("http://127.0.0.1:3000/reservation", reservation, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export default {addReservation};