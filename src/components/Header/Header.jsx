import './Header.scss';
import logo from './images/logo.svg';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [educationDropdown, setEducationDropdown] = useState(false);

    return (
        <div className="Header">
            <div className="wrapper">
                <Link to="/">
                    <img src={logo} alt="logo" />
                </Link>

                {/* Десктопные ссылки */}
                <div className="Header__links">
                    <a href="https://drive.google.com/file/d/1aaVsDwKo6YBW04UfuJ3tln_Ifq5shQeD/view?pli=1" target='_blank' className="Header__links_link">Программа ДОО</a>
                    <a href="https://drive.google.com/file/d/1BIKENCLHK4orUxomEyfmc67nycoR-yTG/view" target='_blank' className="Header__links_link">Программа ДПО</a>
                    <div 
                        className="Header__dropdown"
                        onMouseEnter={() => setEducationDropdown(true)}
                        onMouseLeave={() => setEducationDropdown(false)}
                    >
                        <span className="Header__links_link">Обучение</span>
                        {educationDropdown && (
                            <div className="Header__dropdown_wrapper">
                                <div className="Header__dropdown_menu">
                                    <Link to="/education" className="Header__dropdown_item">Программа ДОО</Link>
                                    <Link to="/prof-education" className="Header__dropdown_item">Программа ДПО</Link>
                                </div>
                            </div>
                        )}
                    </div>
                    <a href='https://spb.hh.ru/employer/4258986?hhtmFrom=vacancy' target="_blank" className="Header__links_link">Вакансии</a>
                    <a href='https://dreamjob.ru/employers/48906' target="_blank" className="Header__links_link">Отзывы</a>
                    <a href='#Contacts' className="Header__links_link">Контакты</a>
                    <a href='https://t.me/trend_career' target="_blank" className="Header__links_link">Telegram</a>
                    <a href='#' target="_blank" className="Header__links_phone">+7 (921) 765-02-33</a>
                </div>

                {/* Кнопка меню для мобильных */}
                <div
                    className="Header__menu-btn"
                    onClick={() => setMenuOpen(true)}
                >
                    МЕНЮ
                </div>
            </div>

            {/* Оверлей-меню */}
            {menuOpen && (
                <div className="Header__overlay">
                    <button
                        className="Header__overlay_close"
                        onClick={() => setMenuOpen(false)}
                    >
                        ✕
                    </button>
                    <nav className="Header__overlay_nav">
                        <Link to="/">
                            <img src={logo} alt="logo" />
                        </Link>
                        <a href="https://drive.google.com/file/d/1aaVsDwKo6YBW04UfuJ3tln_Ifq5shQeD/view?pli=1" target='_blank' className="Header__links_link">Программа ДОО</a>
                        <a href="https://drive.google.com/file/d/1BIKENCLHK4orUxomEyfmc67nycoR-yTG/view" target='_blank' className="Header__links_link">Программа ДПО</a>
                        <Link onClick={() => setMenuOpen(false)} to="/education">Программа ДОО</Link>
                        <Link onClick={() => setMenuOpen(false)} to="/prof-education">Программа ДПО</Link>
                        <a onClick={() => setMenuOpen(false)} href='https://spb.hh.ru/employer/4258986?hhtmFrom=vacancy' target="_blank">Вакансии</a>
                        <a onClick={() => setMenuOpen(false)} href='https://dreamjob.ru/employers/48906' target="_blank">Отзывы</a>
                        <a onClick={() => setMenuOpen(false)} href='#Contacts'>Контакты</a>
                        <a onClick={() => setMenuOpen(false)} href='https://t.me/trend_career' target="_blank">Telegram</a>
                        <a onClick={() => setMenuOpen(false)} href='tel:+79311072118' target="_blank" className="phone">+7 (931) 107-21-18</a>
                    </nav>
                </div>
            )}
        </div>
    )
}
