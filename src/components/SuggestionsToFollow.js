export default function SuggestionsToFollow() {

    const listToFollow = [
        {name: "bad.vibes.memes", image: "badvibesmemes.png"},
        {name: "chibirdart", image: "chibirdart.png"},
        {name: "razoesparaacreditar", image: "razoesparaacreditar.png"},
        {name: "adorable_animals", image: "adorableanimals.png"},
        {name: "smallcutecats", image: "smallcutecats.png"},
    ]

    return (
        <div class="quem-seguir">
            <div class="topo-quem-seguir">
                <h3>Sugestões para você</h3>
                <h4>Ver tudo</h4>
            </div>
            {listToFollow.map(item => ItemToFollow(item))}
        </div>
    );
}

const ItemToFollow = (props) => (
    <div class="caixa-sugestao">
        <div class="info-sugestao-perfil">
            <img src={"assets/images/quem-seguir/"+props.image} />
            <div class="texto-sugestao-perfil">
                <h1>{props.name}</h1>
                <h5>Segue você</h5>
            </div>
        </div>
        <h6>Seguir</h6>
    </div>
);