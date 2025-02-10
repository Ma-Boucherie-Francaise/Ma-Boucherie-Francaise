import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import ScrollBar from "./ScrollBar";

export default function Header() {
  return (
    <header>
      <Image
        className="badge"
        src={"/BadgeBR.png"}
        alt="Logo Ma Boucherie Française"
        width={813}
        height={508}
      />
      <Navigation />
      <RightDiv />
      <ScrollBar />
    </header>
  );
}

function Navigation() {
  const links = [
    { link: "Accueil", src: "/" },
    { link: "Histoire", src: "/notre-histoire" },
    { link: "Produits", src: "/nos-produits" },
    { link: "Livraison", src: "/" },
    { link: "FAQ", src: "/foire-aux-questions" },
  ];

  return (
    <div className="center">
      <div className="image">
        <Image
          src={"/MBFLogoRouge.png"}
          alt="Logo MBF"
          width={8000}
          height={4500}
        />
      </div>
      <div className="links">
        {links.map(({ link, src }, i) => {
          return (
            <Link key={i} href={src}>
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
