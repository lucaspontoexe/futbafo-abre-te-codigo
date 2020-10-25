import { Link } from "react-router-dom";
import profile from "images/icons/icon_perfil.png";
import howtoplay from "images/icons/icon_comojogar.png";
import game from "images/icons/icon_bafo.png";
import album from "images/icons/icon_album.png";
import "./NavBar.scss";

export default function Header(params) {
  return (
    <nav className="main-nav">
      <ul>
        <li className="active">
          <Link to="/profile">
            <img src={profile} alt="Pefil" />
            <span>Perfil</span>
          </Link>
        </li>
        <li>
          <Link to="/tutorial">
            <img src={howtoplay} alt="Como Jogar" />
            <span>Como Jogar?</span>
          </Link>
        </li>
        <li>
          <Link to="/game">
            <img src={game} alt="cartas" />
            <span>Bafo!</span>
          </Link>
        </li>
        <li>
          <Link to="/album">
            <img src={album} alt="álbum" />
            <span>Álbum</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
