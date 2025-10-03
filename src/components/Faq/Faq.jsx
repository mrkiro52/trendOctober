import { useState } from "react";
import './Faq.scss';
import faqTitle from './images/faqTitle.svg';

export default function Faq() {
    const [openIndex, setOpenIndex] = useState(0);

    const faqData = [
        {
            question: "Можно ли начать работать агентом по недвижимости без опыта работы?",
            answer: "Можно. Для успешного старта в сфере недвижимости мы начинаем с качественного обучения. От вас необходимо иметь большое желание развиваться и обучаться."
        },
        {
            question: "Как быстро я выйду на первую сделку?",
            answer: "Большинство наших риелторов выходят на первую сделку под конец первого или на начало второго месяца. В недвижимости это – очень хороший результат, ведь продажа квартиры – не быстрая сделка. Мы достигаем таких результатов за счет качественного обучения."
        },
        {
            question: "А что по поводу карьерного роста?",
            answer: "Половина нашего руководящего состава выросла внутри компании, поэтому при выполнении показателей и прохождении дополнительного обучения можно продвигаться по профессиональной лестнице."
        },
        {
            question: "Из чего складывается вознаграждение агента?",
            answer: "Вознаграждение за услуги агента составляет до 70% от суммы вознаграждения заказчика услуг. Средний доход агента недвижимости – 200 000 рублей."
        }
    ];    

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="Faq">
            <div className="wrapper">
                <img src={faqTitle} alt="faq" />
                <div className="accordion">
                    {faqData.map((item, index) => (
                        <div
                            key={index}
                            className={`accordion-item ${openIndex === index ? "open" : ""} ${index === 0 ? "first" : ""}`}
                            onClick={() => toggle(index)}
                        >
                            <div className="accordion-header">
                                <span className="question">{item.question}</span>
                                <div className="icon_block">
                                    <span className="icon">+</span>
                                </div>
                            </div>
                            <div className="accordion-content">
                                <p>{item.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
