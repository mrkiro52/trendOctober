import './Main';
import Startscreen from '../../components/Startscreen/Startscreen';
import Header from '../../components/Header/Header';
import About from '../../components/About/About';
import Utps from '../../components/Utps/Utps';
import Faq from '../../components/Faq/Faq';
import Contacts from '../../components/Contacts/Contacts';
import Cases from '../../components/Cases/Cases';

export default function Main() {
    return (
        <div className="Main">
            <Header/>
            <Startscreen/>
            <About/>
            <Utps/>
            <Cases/>
            <Faq/>
            <Contacts/>
        </div>
    )
}