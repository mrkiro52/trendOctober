import Contacts from '../../components/Contacts/Contacts';
import Header from '../../components/Header/Header';
import './ProfEducation.scss';

export default function ProfEducation() {
    return (
        <div className="education">
            <Header/>
            <section className="education__hero">
                <h1 className="education__title">
                    Дополнительная профессиональная программа
                </h1>
                <p className="education__subtitle">
                    "Агентская деятельность и сопровождение клиентов в сфере недвижимости"
                </p>
                <p className="education__info">
                    40 ак. часа, Онлайн-формат
                </p>
                <a href="https://drive.google.com/file/d/1aaVsDwKo6YBW04UfuJ3tln_Ifq5shQeD/view?pli=1" target="_blank" className="education__btn">Скачать программу</a>
            </section>

            <section className="education__content">
                <div className="education__block">
                    <h2 className="education__heading">Описание программы</h2>
                    <p className="education__text">
                        Дополнительная профессиональная программа повышения квалификации «Агентская деятельность и сопровождение клиентов в сфере недвижимости» направлена на удовлетворение образовательных потребностей специалистов в сфере недвижимости, развитие их профессиональных компетенций и повышение уровня подготовки в области продаж, коммуникаций и сопровождения сделок с недвижимым имуществом. Программа направлена на формирование и совершенствование профессиональных компетенций обучающихся в области агентской деятельности на рынке недвижимости, развитие навыков эффективного взаимодействия с клиентами, а также освоение современных подходов к организации и сопровождению сделок.
                    </p>
                </div>
                <div className="education__block">
                    <h2 className="education__heading">Размещение иных документов</h2>
                    <ul className="education__list">
                        <li><a href="https://drive.google.com/file/d/1BIKENCLHK4orUxomEyfmc67nycoR-yTG/view" target='_blank'>Программа обучения</a></li>
                        <li><a href="https://drive.google.com/file/d/13jiu06RdYTFKmV_LDoNHwm_cc-YHIEp3/view?usp=drive_link" target='_blank'>Порядок оказания учебно-методической помощи обучающимся</a></li>
                        <li><a href="https://drive.google.com/file/d/1YbQpCUXGpbGzWQ41axQNqcmRTd0dXUhq/view?usp=drive_link" target='_blank'>Положение об использовании электронного обучения</a></li>
                        <li><a href="https://drive.google.com/file/d/17aB7--8EGcZNrLeSV9JRYZUu1pHFth1i/view?usp=drive_link" target='_blank'>Положение о порядке определения соотношения объема занятий</a></li>
                        <li><a href="https://drive.google.com/file/d/1EEhjvWmdVEa_aUA6zrqkmSl4n75jm6cn/view?usp=drive_link" target='_blank'>Положение о порядке ведения учета и осуществления хранения результатов образовательного процесса и внутренний документооборот в электронно-цифровой форме</a></li>
                        <li><a href="https://drive.google.com/file/d/13d03WM5eyoUn2DH-etlpk1oaJbgSVzbV/view?usp=drive_link" target='_blank'>Положение о контроле соблюдения условий проведения мероприятий, в рамках которых осуществляется оценка результатов обучения</a></li>
                        <li><a href="https://drive.google.com/file/d/1XP_eLiCDdiNS6osIFXEvyDdEuCbLpuXa/view?usp=drive_link" target='_blank'>Положение об обеспечении идентификации личности обучающегося в электронной информационно-образовательной среде</a></li>
                    </ul>
                </div>
            </section>
            <Contacts/>
        </div>
    )
}
