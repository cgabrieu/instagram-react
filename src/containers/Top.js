export default function Top() {
    return (
        <div class="topo-completo">
            <div class="topo">
                <LogoBox />
                <SearchField />
                <LogoMobile />
                <ActionsIconsBox />
            </div>
        </div>
    );
}

const LogoBox = () => {
    return (
            <div class="caixa-logos">
                <ion-icon name="logo-instagram"></ion-icon>
                <div class="barra-vertical ocultar"></div>
                <img class="imagem-instagram" src="assets/images/logo.png" alt="Instagram"/>    
            </div>
    );
}

const SearchField = () => <input class="caixa-pesquisa ocultar" type="text" placeholder="Pesquisar"/>;

const LogoMobile = () => <img class="imagem-instagram ocultar-desktop" src="assets/images/logo.png" alt="Instagram"/>;

const ActionsIconsBox = () => {
    return (
        <div class="icones-acoes">
            <ion-icon class="icone" name="paper-plane-outline"></ion-icon>
            <ion-icon class="icone ocultar" name="compass-outline"></ion-icon>
            <ion-icon class="icone ocultar" name="heart-outline"></ion-icon>
            <ion-icon class="icone ocultar" name="person-outline"></ion-icon>
        </div>
    );
}

