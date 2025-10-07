import './Cases.scss';
import titleImg from './images/title.svg';
import agent1 from './images/man1.jpg';
import agent2 from './images/man2.jpg';
import agent3 from './images/woman.jpg';

export default function Cases() {
    return (
        <div className="Cases">
            <div className="wrapper">
                <img src={titleImg} alt="title" />
                <div className="blocks">
                    <div className="block">
                        <div 
                            className="image" 
                            style={{ backgroundImage: `url(${agent1})` }}
                        ></div>
                        <span>Юрий Гусейнов</span>
                        <p>За 8 месяцев работы агентом купил собственную квартиру — мечты становятся реальностью!</p>
                    </div>
                    <div className="block">
                        <div 
                            className="image" 
                            style={{ backgroundImage: `url(${agent2})` }}
                        ></div>
                        <span>Артур Низамутдинов</span>
                        <p>Раньше продавал когтеточки, сегодня его годовая валовая выручка превышает 7 миллионов рублей.</p>
                    </div>
                    <div className="block">
                        <div 
                            className="image" 
                            style={{ backgroundImage: `url(${agent3})` }}
                        ></div>
                        <span>Нина Дугина</span>
                        <p>22 года: достигла миллиона рублей валовой выручки в месяц.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
