import Stories from '../components/Stories';
import Feed from '../components/Feed'
import Aside from './Aside';

export default function Container() {
    return (
        <div class="container">
            <div class="principal">
                <Stories />
                <Feed />
            </div>
            <Aside />
        </div>
    );
}