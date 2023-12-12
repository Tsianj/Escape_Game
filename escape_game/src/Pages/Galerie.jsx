import React, { useEffect, useState } from "react";
import Photo from "../Components/Photo";
import Galerie from "../Services/galerieService";
import Avis from "../Components/Avis";
import Commentaire from "../Services/commentairesService";
import AuthContext from "../Components/AuthContext";
import "../Galerie.css";

const GaleriePhoto = () => {
  const [photo, setPhoto] = useState([]);

  const fetchGalerie = async () => {
    try {
      Galerie.fetchGalerie().then((response) => {
        console.log(response);
        setPhoto(response.data);
      });
    } catch (e) {
      console.log(e);
    }
  };

  const [avis, setAvis] = useState([]);

  const fetchCommentaire = async () => {
    try {
      Commentaire.fetchCommentaires().then((response) => {
        console.log(response);
        setAvis(response.data);
      });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchGalerie();
    fetchCommentaire();
  }, []);


  // Ajout commentaire

  const [ajoutAvis, setAjoutAvis] = useState({});

  const handleChange = (event) => {
      const { name, value } = event.currentTarget;
      setAjoutAvis({ ...ajoutAvis, [name]: value });
    };

    const handleAdd = (event) => {
      try {
        const response = Commentaire.addCommentaires(ajoutAvis);
        event.preventDefault();
      } catch (e) {
    
        console.log(e);
      }
      console.log(ajoutAvis);
    };



  return (
    <body>
      <div className="galerie">
        <h1>L'univers des escapes games</h1>

        <div className="avis">
          {avis.map((e) => {
            return <Avis key={avis.id_uti} avis={e} />;
          })}
        </div>

        <div className="block_card">
          <div className="titre">
            <h3>Galerie Photo</h3>
          </div>
          <div className="escape-container">
            {photo.map((e) => {
              return <Photo key={photo.id_galerie} photo={e} />;
            })}
          </div>
        </div>


        <form>
              <h1>Nouveau Commentaire</h1>
              {/* <!-- Champs pour entrer le nom, l'email et le mot de passe --> */}
              <input
                type="number"
                name="note"
                placeholder="Note"
                value={Commentaire.note}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="avis"
                placeholder="Avis"
                value={Commentaire.avis}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="id_escape"
                placeholder="Escape"
                value={Commentaire.id_escape}
                onChange={handleChange}
                required
              />
              
              <button onClick={handleAdd}>Envoyer mon commentaire</button>
            </form>


      </div>


    </body>
  );
};

export default GaleriePhoto;
