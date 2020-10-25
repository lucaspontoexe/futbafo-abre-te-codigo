import { Link, useLocation } from "react-router-dom";
import profile from "images/icons/icon_perfil.png";
import howtoplay from "images/icons/icon_comojogar.png";
import game from "images/icons/icon_bafo.png";
import album from "images/icons/icon_album.png";
import "./NavBar.scss";

const links = [
  { location: "/profile", name: "Perfil", image: profile },
  { location: "/tutorial", name: "Como Jogar?", image: howtoplay },
  { location: "/game", name: "Bafo!", image: game, alt: "Cartas" },
  {
    location: "/album",
    name: "Álbum",
    image: album,
    alt: "Álbum de Figurinhas",
  },
];

export default function Header() {
  const { pathname } = useLocation();

  return (
    <nav className="main-nav">
      <ul>
        {links.map((link) => (
          <li key={link.location} className={pathname === link.location ? "active" : ""}>
            <Link to={link.location}>
              <img src={link.image} alt={link.alt || link.name} />
              <span>{link.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
