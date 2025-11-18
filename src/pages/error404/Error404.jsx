import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import './Error404.scss';

export default function Error404() {
    return (
        <div className="error404">
            <Header />
            <section className="error404__content">
                <h1 className="error404__title">404</h1>
                <p className="error404__subtitle">Страница не найдена</p>
                <p className="error404__text">
                    К сожалению, запрашиваемая страница не существует или была удалена
                </p>
                <Link to="/" className="error404__btn">
                    Вернуться на главную
                </Link>
            </section>
        </div>
    );
}
