import ActiveUser from '../components/ActiveUser';
import InfoInsta from '../components/InfoInsta';
import SuggestionsToFollow from '../components/SuggestionsToFollow'

export default function Aside() {
    return (
        <div class="lateral">
            <ActiveUser name="Carlos Gabriel" user="cgabrieua"/>
            <SuggestionsToFollow />
            <InfoInsta />
        </div>
    );
}