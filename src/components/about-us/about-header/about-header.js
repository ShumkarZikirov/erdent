import imgLine from '../../../assets/images/Back image shape.svg'
import './about-header.scss'
const AboutHeader = () => {
    return (
        <div className={'aboutHeader'}>
            <div className={'aboutHeader-main'}>
                <div className={'aboutHeader-left'}>
                    <div className={'aboutHeader-left-top'}>
                        <h2><span className={'aboutHeader-color about'}>O</span>нас</h2>
                    </div>
                    <div className={'aboutHeader-left-center'}>
                        <p>В наших отделениях можно получить консультацию специалистов как самых востребованных, так и
                            достаточно редких стоматологических направлений, что позволяет решить большинство
                            стоматологических вопросов за одно посещение. Кроме того, мы заботимся о квалификации врачей
                            «ERDENT» – предоставляем возможность перенимать опыт у ведущих экспертов в своей области,
                            осваивать передовые методы и технологии, проходить стажировки и обучение за рубежом.</p>
                    </div>
                    <div className={'aboutHeader-left-bottom'}>
                        <p>Прием пациентов ведется <br/>
                            с <span className={'aboutHeader-color'}>09:00</span> до <span className={'aboutHeader-color'}>21:30</span> по будням и с <span className={'aboutHeader-color'}>09:00</span> до <span className={'aboutHeader-color'}>21:00</span> по субботам и воскресеньям <br/>
                            без перерывов и выходных</p>
                    </div>
                </div>
                <div className={'aboutHeader-right'}>
                    <img src={imgLine} alt=""/>
                </div>
            </div>
        </div>
    )
}
export default AboutHeader