import './About.scss';
import aboutTitle from './images/aboutTitle.svg';
import rightAboutImg from './images/rightAboutImg.jpg';

export default function About() {
    return (
        <div className="About">
            <div className="wrapper">
                <div className="left">
                    <div className="little">
                        <span>По версии TrendAgent</span>
                    </div>
                    <img src={aboutTitle} alt="title" />
                    <p><span>Тренд Недвижимость</span> - уже более 15 лет мы помогаем людям в Петербурге и ЛО находить и продавать квартиры, работая с новостроиками. вторичной недвижимостью и коммерцией. Иля нас кажлая слелка — это не просто метры и документы, а история человека, в которой мы идём рядом от первого шага до финального ключа в руках.</p>
                    <p><span>Если вы с нами:</span>  получите готовых клиентов и удобные инструменты, поддержку опытных наставников, честное вознаграждение и свободу самим планировать свой график. Мы ценим результат и партнёрство — и даём всё, чтобы вы</p>
                    <div className="blocks">
                        <div className="col">
                            <span className="col_title">ТОП-3</span>
                            <span className="col_text">На рынке недвижимости по версии TrendAgent</span>
                        </div>
                        <div className="col">
                            <span className="col_title">3500</span>
                            <span className="col_text">Количество лидов в месяц</span>
                        </div>
                        <div className="col">
                            <span className="col_title">200.000</span>
                            <span className="col_text">Среднее вознаграждение наших агентов</span>
                        </div>
                    </div>
                </div>
                <img src={rightAboutImg} alt="trend" />
            </div>
        </div>
    )
}