export default function Stories() {
    const storiesList = [
        {name: "9gag", image: "9gag.png"},
        {name: "meowed", image: "meowed.png"},
        {name: "barked", image: "barked.png"},
        {name: "nathanwpyle", image: "nathanwpylestrangeplanet.png"},
        {name: "wawawiwac", image: "wawawiwacomicsa.png"},
        {name: "respondeai", image: "respondeai.png"},
        {name: "filomoderna", image: "filomoderna.png"},
        {name: "memeriago", image: "memeriagourmet.png"},
    ]
    return (
        <ul class="stories borda-padrao">
            {storiesList.map(item => StoryItem(item))}
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