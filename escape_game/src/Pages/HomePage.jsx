import React, { useEffect, useState, useContext } from "react";
import CardEscape from "../Components/CardsEscape";
import Escapes from "../Services/escapesService";
import AuthContext from "../Components/AuthContext";
import "../HomePage.css";

const HomePage = () => {
  const [escp, setEscp] = useState([]);
  const { isAuthenticated, setIsAuthenticated, user } = useContext(AuthContext);
  const fetchEscapesCard = async () => {
    try {
      await Escapes.fetchEscapesCard().then((response) => {
        setEscp(response.data);
      });
    } catch (e) {
      console.log(e);
    }
  };

  const [escpdom, setEscpdom] = useState([]);

  const fetchEscapesCardDom = async () => {
    try {
      await Escapes.fetchEscapesCardDom().then((response) => {
        setEscpdom(response.data);
      });

    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchEscapesCard();
    fetchEscapesCardDom();
  }, []);

  return (   
     
    <body>
      <div className="homepage">
        <h1>L'univers des escapes games</h1>
        <div className="story">
          <h3>Notre histoire </h3>
          <p>
            "Énigmes Évadées" a été créée avec une passion commune pour les
            défis intellectuels et les aventures captivantes. Notre équipe
            dévouée travaille sans relâche pour concevoir des Escape Games
            originaux, stimulants et divertissants qui transportent les
            participants dans des univers extraordinaires
          </p>
        </div>



        <div className="card-container"></div>
        <div className="escape-container">
          {escp.map((e) => {
            return <CardEscape key={escp.id_escape} escapes={e} />;
          })}
        </div>

        <div className="titre">
          <h3 className="lieux">Mini Jeux</h3>
        </div>
      </div>{" "}
    </body>
  );
};

export default HomePage;
