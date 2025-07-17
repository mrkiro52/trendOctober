import './header.scss';
import { Link } from 'react-router-dom';

export default function Header(props) {

    function scrollToForm() {
        const form = document.querySelector("form");
        if (form) {
          form.scrollIntoView({ behavior: "smooth", block: "end" });
        }
      }

      function scrollToFaq() {
        const faq = document.getElementById("faq");
        if (faq) {
            faq.scrollIntoView({ behavior: "smooth", block: "end" });
        }
      }
      
    return (
        <div className="Header">
            <div className="content">
                <a href="/">
                    <img
                        src="/images/logos/logo.svg"
                        alt="Logo"
                        style={{ width: '153px', height: '40px' }}
                    />
                </a>
                <div className="btns">
                    <a href="https://drive.google.com/file/d/1aaVsDwKo6YBW04UfuJ3tln_Ifq5shQeD/view" target='_blank'>Программа обучения</a>
                    <Link to='/education'>Обучение</Link>
                    <a href="https://trend-people.ru">О компании</a>
                    <a href="https://t.me/trend_career">Телеграм канал</a>
                    <a href="">Контакты</a>
                    {/* <span onClick={scrollToFaq}>FAQ</span> */}
                </div>
                <button onClick={scrollToForm}>
                    <div className="brick">
                        <span>ОСТАВИТЬ ЗАЯВКУ</span>
                    </div>
                    <div className="circle">
                    <img
                        src="/images/icons/arrow.svg"
                        alt="arrow"
                        style={{ width: '30px', height: '17px' }}
                    />
                    </div>
                </button>
            </div>
        </div>
    )
}