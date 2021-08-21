export default function Stories() {
    return (
        <ul class="stories borda-padrao">
            <StoryItem image="9gag.png" name="9gag"/>
            <ForwardStories/>
        </ul>
    );
}

const StoryItem = (props) => {
    return (
        <li class="item-story">
            <div class="image-story">
                <img src={"assets/images/stories/"+props.image} alt={props.name}/>
            </div>
            <p class="nome-story">{props.name}</p>
        </li>
    );
}

const ForwardStories = () => <ion-icon class="seta-stories ocultar" name="chevron-forward-circle"></ion-icon>