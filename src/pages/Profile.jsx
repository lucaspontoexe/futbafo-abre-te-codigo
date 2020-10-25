import CardList from 'components/CardList';

export default function Profile(params) {
    return (
        <section>
            <h1>Perfil</h1>
            <p>Jogador, você tem 16 figurinhas</p>
            <hr/>
            <CardList/>
        </section>
    );
}