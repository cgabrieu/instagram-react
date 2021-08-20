export default function Header() {
    return (
        <div class="topo-completo">
            <div class="topo">
                <div class="caixa-logos">
                    <ion-icon name="logo-instagram"></ion-icon>
                    <div class="barra-vertical ocultar"></div>
                    <img class="imagem-instagram" src="assets/images/logo.png" alt="Instagram"/>    
                </div>
                <input class="caixa-pesquisa ocultar" type="text" placeholder="Pesquisar"/>
                <img class="imagem-instagram ocultar-desktop" src="images/logo.png" alt="Instagram"/>
                <div class="icones-acoes">
                    <ion-icon class="icone" name="paper-plane-outline"></ion-icon>
                    <ion-icon class="icone ocultar" name="compass-outline"></ion-icon>
                    <ion-icon class="icone ocultar" name="heart-outline"></ion-icon>
                    <ion-icon class="icone ocultar" name="person-outline"></ion-icon>
                </div>
            </div>
        </div>
    );
}