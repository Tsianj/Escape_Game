import Logo from "../Assets/logo_escape.png";
import { React, useState } from "react";
import { Link } from "react-router-dom";
import LogoFcb from "../Assets/icons8-logo-facebook-50.png";
import LogoInsta from "../Assets/icons8-logo-instagram-50.png";
import MenuBurger from "../Assets/icons8-menu-64.png";
import Connexion from "../Pages/Connexion";

function NavBar() {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div className="navbar">
        <img
          src={Logo}
          id="logo"
          width={"120px"}
          alt="Logo"
          placeholder="Logo_escape_game"
        />
        <img
          src={MenuBurger}
          alt="menu burger"
          className="menu_burger"
          onClick={() => {
            setIsActive(!isActive);
          }}
        />
        <div className={isActive ? "nav-links active" : "nav-links"}>
          <img
            src={MenuBurger}
            alt="menu burger"
            className="menu_burger"
            id="menu_burger2"
            onClick={() => {
              setIsActive(!isActive);
            }}
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
          <div className="icon-reseau">
            <Link to={"https://www.facebook.com"} target="_blank">
              <img
                className="icon"
                src={LogoFcb}
                id="logo_fcb"
                width={"40px"}
                alt="Lien Facebook"
                placeholder="Logo-facebook"
              />
            </Link>
            <Link to={"https://www.instagram.com"} target="_blank">
              <img
                className="icon"
                src={LogoInsta}
                id="logo_insta"
                width={"40px"}
                alt="Lien Instagram"
                placeholder="Logo-instagram"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
