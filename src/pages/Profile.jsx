import CardList from 'components/CardList';
import Header from 'components/Header';

export default function Profile(params) {
    return (
        <>
        <Header/>
        <section>
            <h1>Perfil</h1>
            <p>Jogador, você tem 16 figurinhas</p>
            <hr/>
            <CardList/>
        </section>
        </>
    );
}