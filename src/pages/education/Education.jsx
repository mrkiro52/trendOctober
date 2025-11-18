import Contacts from '../../components/Contacts/Contacts';
import Header from '../../components/Header/Header';
import './Education.scss';

export default function Education() {
    return (
        <div className="education">
            <Header/>
            <section className="education__hero">
                <h1 className="education__title">
                    Дополнительная общеобразовательная программа
                </h1>
                <p className="education__subtitle">
                    "Основы агентской деятельности в сфере недвижимости"
                </p>
                <a className="education__btn" target='_blank' href='https://drive.google.com/file/d/1aaVsDwKo6YBW04UfuJ3tln_Ifq5shQeD/view?pli=1'>Скачать программу</a>
            </section>

            <section className="education__content">
                <div className="education__block">
                    <h2 className="education__heading">Описание программы</h2>
                    <p className="education__text">
                        Дополнительная общеобразовательная общеразвивающая программа 
                        «Основы агентской деятельности в сфере недвижимости» (далее - Программа) 
                        имеет социально гуманитарную направленность, ориентирована на расширение и углубление 
                        знаний обучающихся в области агентской деятельности на рынке объектов недвижимости, 
                        развитие навыков общения с клиентами, а также формирование представлений о ключевых этапах 
                        сопровождения сделок.
                    </p>
                </div>
                <div className="education__block">
                    <h2 className="education__heading">Размещение документов</h2>
                    <ul className="education__list">
                        <li><a href="https://drive.google.com/file/d/1aaVsDwKo6YBW04UfuJ3tln_Ifq5shQeD/view" target='_blank'>Программа обучения</a></li>
                        <li><a href="https://drive.google.com/file/d/11Ll5IUv74aawfnDOdpyXBokGgU7nHEiy/view" target='_blank'>Порядок оказания учебно-методической помощи обучающимся</a></li>
                        <li><a href="https://drive.google.com/file/d/19__uLS0EPJXFlKKN5li-gZLNaRXPjHLE/view" target='_blank'>Положение об использовании электронного обучения</a></li>
                        <li><a href="https://drive.google.com/file/d/1sSXQa2T8_N7rGsxFzOS7bhawECbM-49C/view" target='_blank'>Положение о порядке определения соотношения объема занятий</a></li>
                        <li><a href="https://drive.google.com/file/d/1OET9GcggEpsCFBRnFVW5I544s690vOHe/view" target='_blank'>Положение о порядке ведения учета и осуществления хранения результатов образовательного процесса и внутренней документации в электронно-цифровой форме</a></li>
                        <li><a href="https://drive.google.com/file/d/1kJqJFfujpzxqKzAwh7z7IQC3WyqwKx6G/view" target='_blank'>Положение о контроле соблюдения условий проведения мероприятий, в рамках которых осуществляется оценка результатов обучения</a></li>
                    </ul>
                </div>
            </section>
            <Contacts/>
        </div>
    )
}
