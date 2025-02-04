import { Link } from "react-router-dom";
import BadgeBR from "/BadgeBR.png";
import MBFLogoRouge from "/MBFLogoRouge.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <header>
      <img className="badge" src={BadgeBR} alt="Image Badge" />
      <CenterDiv />
      <RightDiv />
    </header>
  );
}

function CenterDiv() {
  const links = [
    { link: "Accueil", src: "/" },
    { link: "Histoire", src: "/histoire" },
    { link: "Produits", src: "/" },
    { link: "Livraison", src: "/" },
    { link: "FAQ", src: "/" },
  ];

  return (
    <div className="center">
      <div className="image">
        <img src={MBFLogoRouge} alt="Logo MBF" />
      </div>
      <div className="links">
        {links.map(({ link, src }, i) => {
          return (
            <Link key={i} to={src}>
              {link}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

function RightDiv() {
  return (
    <div className="right">
      <div className="inputContainer">
        <input type="search" placeholder={"Recherche"} />
        <FontAwesomeIcon icon={faMagnifyingGlass} className="searchIcon" />
      </div>
      <FontAwesomeIcon icon={faCartShopping} className="cartShopping" />
    </div>
  );
}
