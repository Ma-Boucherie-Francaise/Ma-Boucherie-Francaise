import { Link } from "react-router-dom";
import BadgeBR from "/BadgeBR.png";
import MBFLogoRouge from "/MBFLogoRouge.png";

export default function Header() {
  const links = [
    { link: "Home", src: "/" },
    { link: "Histoire", src: "/" },
    { link: "Produits", src: "/" },
    { link: "Livraison", src: "/" },
    { link: "FAQ", src: "/" },
  ];
  return (
    <header>
      <img className="badge" src={BadgeBR} alt="Image Badge" />

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
      <div>ah</div>
    </header>
  );
}
