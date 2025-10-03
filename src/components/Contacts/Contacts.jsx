import './Contacts.scss';
import contactsTitle from './images/contactsTitle.svg';
import { useState } from 'react';

export default function Contacts() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        age: '',
        comment: '',
        experience: '',
        consent: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name || !formData.phone || !formData.age || !formData.experience || !formData.consent) {
            alert("Заполните все обязательные поля и подтвердите согласие!");
            return;
        }

        const message = `
📩 Новая заявка с сайта:
👤 Имя и фамилия: ${formData.name}
📞 Телефон: ${formData.phone}
🎂 Возраст: ${formData.age}
🏢 Опыт в недвижимости: ${formData.experience}
💬 Комментарий: ${formData.comment || "—"}
        `;


        console.log(message);

        try {
            await fetch(`https://api.telegram.org/bot8217661305:AAHmvMjWP7lKSFhponRvAqMj51VEzPLU7Yk/sendMessage`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    chat_id: "8159138602",
                    text: message,
                    parse_mode: "HTML",
                }),
            });
            alert("Спасибо! Данные успешно отправлены.");
            setFormData({
                name: '',
                phone: '',
                age: '',
                comment: '',
                experience: '',
                consent: false,
            });
        } catch (error) {
            console.error("Ошибка отправки:", error);
            alert("Не удалось отправить данные. Попробуйте позже.");
        }
    };

    return (
        <div className="Contacts">
            {/* Фоновые круги */}
            <div className="circles">
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
            </div>

            <div className="wrapper">
                <div className="left">
                    <span className="title">КОНТАКТЫ</span>
                    <span className="addr">Санкт-Петербург,<br />Петроградская набережная, 22</span>
                    <span className="email">trend.nedvizhimost@gmail.com</span>
                    <span className='phone'>+7 (931) 107-21-18</span>
                </div>
                <div className="right">
                    <img src={contactsTitle} alt="trend" />

                    <form className="contact-form" onSubmit={handleSubmit}>
                        <label>
                            Имя и фамилия*  
                            <input 
                                type="text" 
                                name="name" 
                                value={formData.name} 
                                onChange={handleChange} 
                                required 
                            />
                        </label>
                        <label>
                            Номер телефона*  
                            <input 
                                type="tel" 
                                name="phone" 
                                pattern="^\+?[0-9\s\-]+$" 
                                value={formData.phone} 
                                onChange={handleChange} 
                                required 
                            />
                        </label>
                        <label>
                            Ваш возраст*  
                            <input 
                                type="number" 
                                name="age" 
                                min="1" 
                                value={formData.age} 
                                onChange={handleChange} 
                                required 
                            />
                        </label>

                        <label>
                            Комментарий  
                            <textarea 
                                name="comment" 
                                value={formData.comment} 
                                onChange={handleChange} 
                            />
                        </label>

                        <div className="experience">
                            <span>У вас есть опыт работы<br/>в сфере недвижимости?*</span>
                            <div className="options">
                                <label>
                                    <input
                                        type="radio"
                                        name="experience"
                                        value="Да"
                                        checked={formData.experience === "Да"}
                                        onChange={handleChange}
                                        required
                                    />
                                    Да
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="experience"
                                        value="Нет"
                                        checked={formData.experience === "Нет"}
                                        onChange={handleChange}
                                        required
                                    />
                                    Нет
                                </label>
                            </div>
                        </div>

                        <label className="consent">
                            <input 
                                type="checkbox" 
                                name="consent" 
                                checked={formData.consent} 
                                onChange={handleChange} 
                                required 
                            />
                            <span>Даю согласие на обработку персональных данных. Подробнее — <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">
                                Политика конфиденциальности
                            </a></span> 
                        </label>
                        <button type="submit">ХОЧУ В КОМАНДУ</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
