import './Header.scss';
import logo from './images/logo.svg';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div className="Header">
            <div className="wrapper">
                <a href="">
                    <img src={logo} alt="logo" />
                </a>
                <div className="Header__links">
                    <Link className="Header__links_link">Обучение</Link>
                    <a href='#' className="Header__links_link">Вакансии</a>
                    <a href='#' className="Header__links_link">Отзывы</a>
                    <a href='#' className="Header__links_link">Контакты</a>
                    <a href='#' className="Header__links_link">Telegram</a>
                    <a href='#' className="Header__links_phone">+7 (921) 765-02-33</a>
                </div>
            </div>
        </div>
    )
}