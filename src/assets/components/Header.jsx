import { Link } from "react-router-dom";

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
      <div className="links">
        {links.map(({ link, src }, i) => {
          return (
            <Link key={i} to={src}>
              {link}
            </Link>
          );
        })}
      </div>
    </header>
  );
}
