import CardList from "components/CardList";
import NavBar from "components/NavBar";
import "./Profile.scss";

export default function Profile(params) {
  return (
    <>
      <NavBar />
      <section id="profile">
        <header>
          <h1>Perfil</h1>
          <p>Jogador,</p>
          <p>
            <strong>Você tem </strong>
            <span>16</span>{' '}
            <strong>figurinhas</strong>
          </p>
        </header>
        <hr />
        <CardList />
      </section>
    </>
  );
}
