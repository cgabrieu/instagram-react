export default function Feed() {
    const postsList = [
        {
            username: "meowed",
            userImage: "meowed.png",
            titlePost: "a kitten on the phone",
            content: "gato-telefone.png",
            mainLike: "respondeai",
            mainLikeImage: "respondeai.png",
            numLikes: 76546,
            comments: [
                {autor: "filomoderna", content: "que fofinho"},
                {autor: "respondeai", content: "ownt"},
                {autor: "dasddasd", content: "owdasdasdasdnt"},
            ],
            timeAgo: 2,
        },
        {
            username: "barked",
            userImage: "barked.png",
            titlePost: "a cute little dog",
            content: "dog.png",
            mainLike: "9gag",
            mainLikeImage: "9gag.png",
            numLikes: 1495,
            comments: [
                {autor: "filomoderna", content: "que feraaaa!"},
                {autor: "meowed", content: "opaaaaaa"},
            ],
            timeAgo: 1,
        },
        {
            username: "nathanwpylestrangeplanet",
            userImage: "nathanwpylestrangeplanet.png",
            titlePost: "a cute little dog",
            content: "farewall.mp4",
            mainLike: "filomoderna",
            mainLikeImage: "filomoderna.png",
            numLikes: 946,
            comments: [
                {autor: "filomoderna", content: "que feraaaa!"},
                {autor: "cgabrieua", content: "limao"},
                {autor: "meowed", content: "opaaaaaa"},
            ],
            timeAgo: 6,
        },
        {
            username: "respondeai",
            userImage: "respondeai.png",
            titlePost: "viva!",
            content: "respondeai.jpg",
            mainLike: "filomoderna",
            mainLikeImage: "filomoderna.png",
            numLikes: 145942,
            comments: [
                {autor: "filomoderna", content: "que feraaaa!"},
                {autor: "meowed", content: "opaaaaaa"},
                {autor: "meowed", content: "opaaaaaa"},
                {autor: "meowed", content: "opaaaaaa"},
                {autor: "meowed", content: "opaaaaaa"},
                {autor: "meowed", content: "opaaaaaa"},
            ],
            timeAgo: 6,
        },
    ]
    return (
        <div class="feed">
            {postsList.map(item => Post(item))}
        </div>
    );
}

const Post = (item) => (
    <div class="post borda-padrao">
        <PostTop username={item.username} userImage={item.userImage} />
        <PostContent content={item.content} />
        {PostFooter(item)}
    </div>
);

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
            <source src={"assets/videos/" + (props.content)} type="video/mp4"/>
            <source src={"assets/videos/" + (props.content)} type="video/ogg"/>
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
        <CommentsSectionPost timeAgo={item.timeAgo} comments={item.comments} />
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

const CommentsSectionPost = (props) => (
    <div class="secao-comentarios">
        {(props.comments.length > 2) ? <h2>Ver todos os {props.comments.length} comentários</h2> : ""}

        {props.comments.map((e,i) => (i < 2) ? Comment(e) : "")}

        <h2 class="tempo-postagem">HÁ {props.timeAgo} HORA{(props.timeAgo) > 1 ? "S" : ""} </h2>
        <div class="linha-horizontal"></div>
        <InputYourComment />
    </div>
);

const Comment = (comment) => (
    <div class="comentario">
        <p><strong>{comment.autor} </strong>{comment.content}</p>
        <ion-icon name="heart-outline"></ion-icon>
    </div>
);

const InputYourComment = () => (
    <div class="seu-comentario">
        <div class="adicione-comentario">
            <ion-icon name="happy-outline"></ion-icon>
            <input class="input-comentario" type="text" placeholder="Adicione um comentário..." />
        </div>
        <h6>Publicar</h6>
    </div>
);