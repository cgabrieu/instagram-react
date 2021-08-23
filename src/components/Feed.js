import Post from './Post'

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