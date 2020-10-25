import CardList from 'components/CardList';
import NavBar from 'components/NavBar';

export default function Profile(params) {
    return (
        <>
        <NavBar/>
        <section>
            <h1>Perfil</h1>
            <p>Jogador, você tem 16 figurinhas</p>
            <hr/>
            <CardList/>
        </section>
        </>
    );
}