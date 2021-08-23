import CommentsSection from './CommentsSection';

export default function Post(item) {
    return (
        <div class="post borda-padrao">
            <PostTop username={item.username} userImage={item.userImage} />
            <PostContent content={item.content} />
            {PostFooter(item)}
        </div>
    );
}

const PostTop = (props) => (
    <div class="topo-post">
        <div class="autor-post">
            <img src={"assets/images/stories/" + props.userImage} />
            <h1>{props.username}</h1>
        </div>
        <ion-icon name="ellipsis-horizontal"></ion-icon>
    </div>
);

const PostContent = (props) => (
    <div class="conteudo-post">

        {(props.content.slice(-3) === "mp4") || props.content.slice(-3) === "ogv" ?
            <video width="612px" autoplay muted>
                <source src={"assets/videos/" + (props.content)} type="video/mp4" />
                <source src={"assets/videos/" + (props.content)} type="video/ogg" />
                Seu navegador não suporta este vídeo.
            </video> :
            <img src={"assets/images/" + (props.content)} />}
    </div>
);

const PostFooter = (item) => (
    <div class="rodape-post">
        <IconsPost />
        <InfoLikePost mainLike={item.mainLike} mainLikeImage={item.mainLikeImage} numLikes={item.numLikes} />
        <TitlePost username={item.username} titlePost={item.titlePost} />
        <CommentsSection timeAgo={item.timeAgo} comments={item.comments} />
    </div>
);

const IconsPost = () => (
    <div class="icones-post">
        <div class="icones-principais">
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
        <ion-icon name="bookmark-outline"></ion-icon>
    </div>
);

const InfoLikePost = (props) => {
    const complement =
        <div>
            <span>&nbsp;e </span>
            <strong>{(props.numLikes === 2) ? "outra pessoa" : `outras ${props.numLikes.toLocaleString('pt-BR')} pessoas`}</strong>
        </div>;

    return (
        <div class="info-curtidas-post">
            <img src={"assets/images/stories/" + (props.mainLikeImage)} />
            <p>Curtido por <strong>{props.mainLike}</strong></p>
            {(props.numLikes <= 1) ? "" : complement}
        </div>
    );
};

const TitlePost = (props) => (
    <div class="titulo-post">
        <p><strong>{props.username} </strong>{props.titlePost}</p>
    </div>
);