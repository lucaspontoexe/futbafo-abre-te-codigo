import NavBar from "components/NavBar";
import placeholder from "images/rectangle9.svg";
import demo from "images/group26.png";
import "./Album.scss";  

function AlbumPage(params) {
  return (
    <div className="album-page">
      <img src={demo} alt="Demonstração"/>
    </div>
  );
}

export default function Album(params) {
  return (
    <>
      <NavBar />

      <section id="album">
        {/* array de pages; podem ser componentes mesmo, com alguns você sabia no meio */}
        <AlbumPage />
      </section>
    </>
  );
}
