import './Startscreen.scss';
import mainImg from './images/trendImgMain.png';
import titleText from './images/titleText.svg';

export default function Startscreen() {
    return (
        <div className="Startscreen">
            {/* Фоновые круги */}
            <div className="circles">
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
            </div>

            <div className="wrapper">
                <img src={mainImg} alt="trend" />
                <div className="content">
                    <img src={titleText} alt="title" />
                    <button>НАШИ ВАКАНСИИ</button>
                </div>
            </div>
        </div>
    )
}
