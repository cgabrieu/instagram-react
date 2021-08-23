export default function ActiveUser(props) {
    return (
        <div class="perfil">
            <img class="image-perfil" src="assets/images/cgabrieua.jpg"/>
            <div class="info-perfil">
                <h1>{props.user}</h1>
                <h2>{props.name}</h2>
            </div>
        </div>
    );
}