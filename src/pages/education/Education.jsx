import './Education.scss';
import Header from '../../components/Header';

export default function Education() {
    return (
        <div className="Education">
            <Header/>
            <div className="startscreen">
                <h2>Дополнительная<br/>общеобразовательная<br/>программа</h2>
                <h3>"Основы агентской деятельности<br/>в сфере недвижимости"</h3>
                <a href='https://drive.google.com/file/d/1aaVsDwKo6YBW04UfuJ3tln_Ifq5shQeD/view' target='_blank'>Скачать программу</a>
            </div>
            <div className="infoscreen">
                <div className="left">
                    <h4>Описание программы</h4>
                    <p>Дополнительная общеобразовательная общеразвивающая программа «Основы агентской деятельности в сфере недвижимости» (далее - Программа) имеет социально гуманитарную направленность, ориентирована на расширение и углубление знаний обучающихся в области агентской деятельности на рынке объектов недвижимости, развитие навыков общения с клиентами, а также формирование представлений о ключевых этапах сопровождения сделок.</p>
                </div>
                <div className="right">
                    <h4>Размещение документов</h4>
                    <ul>
                        <li>
                            <a href="https://drive.google.com/file/d/1aaVsDwKo6YBW04UfuJ3tln_Ifq5shQeD/view" target='_blank'>Программа обучения</a>
                        </li>
                        <li>
                            <a href="https://drive.google.com/file/d/11Ll5IUv74aawfnDOdpyXBokGgU7nHEiy/view" target='_blank'>Порядок оказания учебно-методической помощи обучающимся</a>
                        </li>
                        <li>
                            <a href="https://drive.google.com/file/d/19__uLS0EPJXFlKKN5li-gZLNaRXPjHLE/view" target='_blank'>Положение об использовании электронного обучения</a>
                        </li>
                        <li>
                            <a href="https://drive.google.com/file/d/1sSXQa2T8_N7rGsxFzOS7bhawECbM-49C/view" target='_blank'>Положение о порядке определенных соотношений объёма занятий</a>
                        </li>
                        <li>
                            <a href="https://drive.google.com/file/d/1OET9GcggEpsCFBRnFVW5I544s690vOHe/view" target='_blank'>Положение о порядке ведения учета и осуществления хранения результатов образовательного процесса и внутренний документооборот в электронно-цифровой форме</a>
                        </li>
                        <li>
                            <a href="https://drive.google.com/file/d/1kJqJFfujpzxqKzAwh7z7IQC3WyqwKx6G/view" target='_blank'>Положения о контроле соблюдения условий проведения мероприятий, в рамках которых осуществляется оценка результатов обучения</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}