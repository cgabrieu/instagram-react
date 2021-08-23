export default function CommentsSection(props) {
    return (
        <div class="secao-comentarios">
            {(props.comments.length > 2) ? <h2>Ver todos os {props.comments.length} comentários</h2> : ""}

            {props.comments.map((e, i) => (i < 2) ? Comment(e) : "")}

            <h2 class="tempo-postagem">HÁ {props.timeAgo} HORA{(props.timeAgo) > 1 ? "S" : ""} </h2>
            <div class="linha-horizontal"></div>
            <InputYourComment />
        </div>
    );
};

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