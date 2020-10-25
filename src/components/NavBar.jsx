import "./NavBar.scss";
import profile from "images/icons/icon_perfil.png";
import howtoplay from "images/icons/icon_comojogar.png";
import game from "images/icons/icon_bafo.png";
import album from "images/icons/icon_album.png";

export default function Header(params) {
  return (
    <nav className="main-nav">
      <ul>
        <li className="active">
          <img src={profile} alt="Pefil" />
          <span>Perfil</span>
        </li>
        <li>
          <img src={howtoplay} alt="Como Jogar" />
          <span>Como Jogar?</span>
        </li>
        <li>
          <img src={game} alt="cartas" />
          <span>Bafo!</span>
        </li>
        <li>
          <img src={album} alt="álbum" />
          <span>Álbum</span>
        </li>
      </ul>
    </nav>
  );
}
