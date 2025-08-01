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
                    <a href="https://t.me/trend_career">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none"><g clip-path="url(#akarIconsTelegramFill0)"><path fill="currentColor" fill-rule="evenodd" d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12S5.373 0 12 0s12 5.373 12 12M12.43 8.859c-1.167.485-3.5 1.49-6.998 3.014c-.568.226-.866.447-.893.663c-.046.366.412.51 1.034.705c.085.027.173.054.263.084c.613.199 1.437.432 1.865.441c.389.008.823-.152 1.302-.48c3.268-2.207 4.955-3.322 5.061-3.346c.075-.017.179-.039.249.024c.07.062.063.18.056.212c-.046.193-1.84 1.862-2.77 2.726c-.29.269-.495.46-.537.504c-.094.097-.19.19-.282.279c-.57.548-.996.96.024 1.632c.49.323.882.59 1.273.856c.427.291.853.581 1.405.943c.14.092.274.187.405.28c.497.355.944.673 1.496.623c.32-.03.652-.331.82-1.23c.397-2.126 1.179-6.73 1.36-8.628a2.111 2.111 0 0 0-.02-.472a.506.506 0 0 0-.172-.325c-.143-.117-.365-.142-.465-.14c-.451.008-1.143.249-4.476 1.635" clip-rule="evenodd"/></g><defs><clipPath id="akarIconsTelegramFill0"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></g></svg>
                    </a>
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