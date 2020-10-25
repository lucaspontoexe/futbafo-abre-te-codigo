import Header from "components/Header";
import placeholder from "images/rectangle9.svg";

function AlbumPage(params) {
  return (
    <div className="album-page">
      <header>
        <img src="" alt="futebafo section logo" />
        <h1>As donas da Bola</h1>
        {/* a seleção, etc. */}
      </header>
      <div className="figurinhas">
        <img src={placeholder} alt="figurinha (título do dataset)" />
      </div>
    </div>
  );
}

export default function Album(params) {
  return (
    <>
      <Header />

      <section id="album">
        <AlbumPage />
      </section>
    </>
  );
}
