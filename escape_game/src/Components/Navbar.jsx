import Logo from "../Assets/logo_escape.png";
import {React, useContext} from "react";
import LogoFcb from "../Assets/icons8-logo-facebook-50.png";
import LogoInsta from "../Assets/icons8-logo-instagram-50.png";
import { Link } from "react-router-dom";
import Connexion from "../Pages/Connexion";

function NavBar() {

  return (
    <>
      <div className="navbar">
        <img
          src={Logo}
          id="logo"
          width={"120px"}
          placeholder="Logo_escape_game"
        />
        <Link to={"/connexion"}>
          <button className="lien_nav">Connexion</button>
        </Link>
        <Link>
          <button className="lien_nav">Profil</button>
        </Link>
        <hr />

        <Link>
          <button className="lien_nav">Nos Escapes</button>
        </Link>
        <Link>
          <button className="lien_nav">Nos Escapes à domicile</button>
        </Link>
        <Link>
          <button className="lien_nav">Mini-jeux</button>
        </Link>
        <Link to={"/reservation"}>
          <button className="lien_nav">Réservation</button>
        </Link>
        <div className="icon-reseau"><a href="https://www.facebook.com" target="_blank">
          <img
            className="icon"
            src={LogoFcb}
            id="logo_fcb"
            width={"40px"}
            placeholder="Logo-facebook"
          />
        </a>
        <a href="https://www.instagram.com" target="_blank">
          <img
            className="icon"
            src={LogoInsta}
            id="logo_insta"
            width={"40px"}
            placeholder="Logo-instagram"
          />
        </a></div>
      </div>
    </>
  );
}

export default NavBar;
