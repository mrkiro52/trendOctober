import './Utps.scss';
import utpTitle from './images/uptsTitle.svg';
import gendir from './images/gendir.jpg';

export default function Utps() {
    return (
        <div className="Utps">
            <div className="wrapper">
                <img src={utpTitle} alt="utp" />
                <div className="content">
                    <div className="left">
                        <div className="block">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16"><title>Arrow-up-right-16-filled SVG Icon</title><path fill="#057057" d="M7 2.75A.75.75 0 0 1 7.75 2h5.5a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0V4.56l-9.22 9.22a.75.75 0 0 1-1.06-1.06l9.22-9.22H7.75A.75.75 0 0 1 7 2.75"/></svg>
                            <span>Возможность работы с лидами компании без ограничений</span>
                        </div>
                        <div className="block">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16"><title>Arrow-up-right-16-filled SVG Icon</title><path fill="#057057" d="M7 2.75A.75.75 0 0 1 7.75 2h5.5a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0V4.56l-9.22 9.22a.75.75 0 0 1-1.06-1.06l9.22-9.22H7.75A.75.75 0 0 1 7 2.75"/></svg>
                            <span>Выход на сделку в первый месяц после оформления</span>
                        </div>
                        <div className="block">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16"><title>Arrow-up-right-16-filled SVG Icon</title><path fill="#057057" d="M7 2.75A.75.75 0 0 1 7.75 2h5.5a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0V4.56l-9.22 9.22a.75.75 0 0 1-1.06-1.06l9.22-9.22H7.75A.75.75 0 0 1 7 2.75"/></svg>
                            <span>Бесплатный аккредитованный учебный центр</span>
                        </div>
                        <div className="block">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16"><title>Arrow-up-right-16-filled SVG Icon</title><path fill="#057057" d="M7 2.75A.75.75 0 0 1 7.75 2h5.5a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0V4.56l-9.22 9.22a.75.75 0 0 1-1.06-1.06l9.22-9.22H7.75A.75.75 0 0 1 7 2.75"/></svg>
                            <span>Квалифицированный департамент юристов и ипотечных брокеров</span>
                        </div>
                        <div className="block">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16"><title>Arrow-up-right-16-filled SVG Icon</title><path fill="#057057" d="M7 2.75A.75.75 0 0 1 7.75 2h5.5a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0V4.56l-9.22 9.22a.75.75 0 0 1-1.06-1.06l9.22-9.22H7.75A.75.75 0 0 1 7 2.75"/></svg>
                            <span>Еженедельные выплаты за оказание услуг</span>
                        </div>
                    </div>
                    <div className="right">
                        <span className='title'>кейс нашего агента</span>
                        <p>Закрыл 3 сделки и купил новый автомобиль!</p>
                        <img src={gendir} alt="gendir" />
                        <span className='gendir'>Генеральный директор Тренд Недвижимость - Александр Рыков</span>
                    </div>
                </div>
            </div>
        </div>
    )
}