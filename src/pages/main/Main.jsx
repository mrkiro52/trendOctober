import './Main.scss';
import { useState } from 'react';
import { useRef } from "react";
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com';

function Main() {
        const form = useRef(null);
        const eduRef = useRef(null);
        const sucRef = useRef(null);
        const faq = useRef(null);

        const [name, setName] = useState('');
        const [phone, setPhone] = useState('');
        const [email, setEmail] = useState('');
      
        const scrollToForm = () => {
          if (form.current) {
            form.current.scrollIntoView({ behavior: "smooth" });
          }
        };

        const scrollToEducation = () => {
          if (eduRef.current) {
            eduRef.current.scrollIntoView({ behavior: "smooth" });
          }
        };

        const scrollToSuccess = () => {
          if (sucRef.current) {
            sucRef.current.scrollIntoView({ behavior: "smooth" });
          }
        };
      
        const faqs = [
          {
            question: "Как быстро можно выйти на результат?",
            answer: "Средний цикл самой первой сделки новичков занимает полтора месяца, с начала обучения. Всё зависит от вовлечённости, от потраченных сил и времени в самом начале. По факту, найти продавца и покупателя занимает пару недель, но иногда есть нюансы с документами, которые увеличивают срок сделки.",
          },
          {
            question: "Сколько длится обучение?",
            answer: "Базовое обучение длится одну неделю, там бизнес-тренер даст всё что нужно для входа в сферу. Далее, уже в отделе продаж, обучением занимаются руководитель и наставник. Адаптируют, проводят индивидуальные построения планов, ставят цели и курируют весь процесс работы.",
          },
          {
            question: "Разве рынок сейчас стабильный?",
            answer: "Безусловно, ведь людям всегда нужно где-то жить. Они переезжают/женятся и тд, всё приводит к тому, что население сталкивается с куплей-продажей квартир. Не исключаем, что происходят различные внешние изменения, которые влияют на недвижимость, но благодаря универсальности, наши ребята могут продавать любой сегмент, от новостроек до элитки.",
          },
          {
            question: "Может ли быть такое, что вообще сделок не будет?",
            answer: "Может ли быть такое, что вообще сделок не будет? - Если в самом начале сидеть ровно и ждать чуда, пока клиент сам позвонит и попросит продать/купить квартиру, то конечно сделок не будет) Но, если активно входить в сферу, обучаться, иметь нацеленность на результат, то сделки будут всегда. Даже в 'плохие' времена. В недвижимости по-настоящему зарабатывает тот, кто стремится к деньгам и успеху, а не тот, кто пробует",
          },
          {
            question: "Всегда нужно сидеть в офисе?",
            answer: "Как говорят руководители: 'хороший агент тот - который в офисе как раз не сидит' Первое время и вправду надо быть в офисе, но лишь потому, что здесь находится всё инфополе, где руководитель и наставник вкладывают в новичков все свои знания, помогают освоиться в новой профессии. Далее график гикбий, мы нацелены на результат и цифры, а не на то, чтобы ребята постоянно сидели в офисе)",
          },
        ];
      
        const [openIndex, setOpenIndex] = useState(0);
      
        const toggle = (index) => {
          setOpenIndex(openIndex === index ? null : index);
        };

        const sendEmail = (e) => {
          e.preventDefault();
      
          emailjs.sendForm(
            'service_4gufntf',    // из EmailJS
            'template_wa6w5wg',   // из EmailJS
            form.current,
            'pAb5tI0BfATKs4toa'     // из EmailJS (например: '5gFG5fBnXz4k-XXXX')
          )
          .then(() => {
              alert("Заявка успешно отправлена!");
          }, (error) => {
              alert("Ошибка при отправке: " + error.text);
          });
        };

        return (
          <><Header/>
          <div className='Home'>
              <section className='startscreen'>
                <div className="content">
                  <img src="./images/photos/alice.png" className='alice' alt="hr" />
                  <a href="#">СТАТЬЯ: ТОП 1 ПРОФЕССИЯ 2025</a>
                  <h1>Профессия, <br/>которая приносит<br/>от 200 000 ₽ в месяц!</h1>
                  <p>Без опыта? Не проблема! Мы обучим тебя за 5 дней и дадим готовых клиентов – выход на доход от 200 000 ₽ уже в первый месяц.</p>
                  <img src='./images/photos/mobileAlice.png' className="mobileAlice"/>
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
                  <div className="sqs">
                    <div className="sq" onClick={scrollToSuccess}>
                      <span>Истории<br/>успеха</span>
                    </div>
                    <div className="sq" onClick={scrollToEducation}>
                      <span>Наше<br/>обучение</span>
                      <img className='education' src="./images/photos/educationIcons.svg" alt="education" />
                      <img className='hat' src="./images/icons/hat.svg" alt="hat" />
                    </div>
                  </div>
                </div>
              </section>
              <div className="rectangle"></div>
              <section className='choose_trend'>
                <div className="left">
                  <h2>Выбирай нас и будь там, где видят твой потенциал!</h2>
                  <p>Более 100 партнеров, квалифицированный юридический департамент, ипотека онлайн и готовые предложения для инвесторов. </p>
                  <button onClick={scrollToForm}>
                    <div className="brick">
                        <span>СТАТЬ АГЕНТОМ</span>
                    </div>
                    <div className="circle">
                    <img
                      src="/images/icons/arrow3.svg"
                      alt="arrow"
                      style={{ width: '30px', height: '17px' }}
                    />
                    </div>
                  </button>
                  <div className="rate">
                  <img
                    src="/images/icons/star.png"
                    alt="arrow"
                    style={{ width: '30px', height: '17px' }}
                  />
                    <span>Рейтинг 4.5 / более 120 отзывов HH.RU</span>
                  </div>
                  <a href="#">ВСЕ ПЛЮСЫ РАБОТЫ У НАС - ЧИТАЙ СТАТЬЮ!</a>
                </div>
                <img src="./images/photos/office.jpg" alt="office" />
              </section>
              <section className='uc' ref={eduRef}>
                <h2>Учебный центр</h2>
                <div className="row">
                  <div className="trainer">
                    <img src="./images/photos/vadim.png" alt="trainer" />
                    <h3>Вадим Мордачев</h3>
                    <h4>Бизнес тренер учебного центра</h4>
                    <p>"У вас действительно есть шанс что-то изменить и прожить жизнь так, как хотите, а не так, как боитесь."</p>
                  </div>
                  <div className="info">
                    <div className="textblock">
                      <h6>Как проходит обучение новичков?</h6>
                      <span>📚 5 дней в учебном центре</span>
                      <p>Мы разбираем всю нужную теорию, учим, как работать с клиентами и делать сделки.</p>
                      <span>🎓 Стажировка с наставником</span>
                      <p>Вас сопровождает опытный агент, первые 4 сделки вы заключаете вместе бок о бок.</p>
                      <span>🚀 Дальше — самостоятельная работа</span>
                      <p>После стажировки вы уже самостоятельный агент</p>
                    </div>
                    <a href="#">Узнать больше</a>
                    <button onClick={scrollToForm}>👇 Пройти обучение</button>
                  </div>
                  <div className="trainer">
                    <img src="./images/photos/elina.png" alt="trainer" />
                    <h3>Элина Тер-Осипова</h3>
                    <h4>Руководитель учебного центра</h4>
                    <p>“Знание - это единственное богатство, которое увеличивается, когда его делят”</p>
                  </div>
                </div>
              </section>
              <section className='double_block' ref={sucRef}>
                <div className="left">
                  <h2>Меняем судьбы!</h2>
                  <h3>Послушайте реальные истории наших агентов</h3>
                  <iframe width="100%" height="310px" style={{borderRadius: "16px"}} src="https://www.youtube.com/embed/1ITRSI1O1UY?si=nnH_VrJHyISIB_Z2" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                  <button onClick={scrollToForm}>СТАТЬ АГЕНТОМ</button>
                </div>
                <div className="right">
                  <h2>Наш HR отдел<br/>ждет именно Тебя!</h2>
                  <div className="circles">
                    <img src="./images/photos/hr1.png" alt="hr" />
                    <img src="./images/photos/hr2.png" alt="hr" />
                    <img src="./images/photos/hr3.png" alt="hr" />
                    <img src="./images/photos/hr4.png" alt="hr" />
                    <img src="./images/photos/hr5.png" alt="hr" />
                  </div>
                </div>
              </section>
              <section className='about_agent'>
                <div className="left">
                  <h2>Чем занимается<br/>агент по недвижимости?</h2>
                  <p>🏡 Мы работаем с недвижимостью в Санкт-Петербурге и Ленинградской области: новостройки, вторичка, загород.
                  Помогаем людям покупать и продавать квартиры под ключ.<br/><br/>
      🚀 <span>Не разбираешься в этом?</span> Не проблема! Мы обучаем новичков с нуля бесплатно в нашем учебном центре. Уже в первые недели ты получишь все необходимые знания и начнешь зарабатывать! </p>
                  <button onClick={scrollToForm}>
                      <div className="brick">
                          <span>СТАТЬ АГЕНТОМ</span>
                      </div>
                      <div className="circle">
                      <img
                        src="/images/icons/arrow3.svg"
                        alt="arrow"
                        style={{ width: '30px', height: '17px' }}
                      />
                      </div>
                  </button>
                </div>
                <div className="right">
                  <div className="req reqPC">
                    <span>Клиент платит:</span>
                    <img src="./images/icons/circleArrowBlack.svg" alt="arrow" />
                  </div>
                  <div className="reqblack">
                    <div className="top">
                      <span>Комиссия:</span>
                      <img src="./images/icons/circleArrowWhite.svg" alt="arrow" />
                    </div>
                    <div className="rows">
                      <div className="row">
                        <h6>30% - 45% от комиссии</h6>
                        <span>Первые 4 сделки</span>
                      </div>
                      <div className="row">
                        <h6>от 50% до 70%</h6>
                        <span>Пятая сделка и последующие</span>
                      </div>
                      <div className="row">
                        <h6>+ 20 000 руб</h6>
                        <span>Стипендия</span>
                      </div>
                    </div>
                  </div>
                  <div className="req reqPC">
                    <span>Оформление:</span>
                    <img src="./images/icons/circleArrowBlack.svg" alt="arrow" />
                  </div>
                </div>
              </section>
              <section className='form_section'>
                <img src="./images/photos/alice.png" alt="alice" />
                <div className="title_row">
                  <h2>Давайте знакомиться</h2>
                  <img src="./images/icons/circleArrowForm.svg" alt="arrow" />
                </div>
                <form action="#" ref={form}>
                  <label htmlFor="name">Ваше имя</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Иван Иванов"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />

                  <label htmlFor="phone">Ваш номер телефон</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+7 XXX XXX XX XX"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />

                  <label htmlFor="email">Ваша почта</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="*******@****"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  <button type="button" onClick={sendEmail}>
                    Оставить заявку
                  </button>
                </form>
                <div className="white_blank">
                  <div className="blank">
                    <img src="./images/icons/circleArrowBlack.svg" alt="arrow" />
                    <h3>Контакты</h3>
                    <span>Санкт-Петербург,<br/>Петроградская набережная, 22</span>
                    <span>info.nedvigimosti@gmail.com</span>
                    <span>+7 (921) 765-02-33</span>
                  </div>
                </div>
              </section>
          </div>
          <Footer/></>
        );
}

export default Main;
