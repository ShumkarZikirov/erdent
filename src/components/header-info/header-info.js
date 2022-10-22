import React from "react";
import './header-info.css'
import headerDoctor from '../../assets/images/header-doctor.png'
import imgLine from '../../assets/images/Back image shape.svg'
const HeaderInfo = () => {
    return (
        <div className={'headerInfo'} >
            <div className={'headerInfo-main'}>
                <div className={'headerInfo-info'}>
                    <div>
                        <h3>Имплантация зубов</h3>
                        <h3 className={'headerInfo-info-h3'}><span className={'info-color'}>доступно</span> и <span
                            className={'h3-position info-color'}>качественно</span></h3>
                    </div>
                    <div>
                        <p className={'info-text'}>Присоединяйтесь к нам и позаботьтесь о себе и своей семье с помощью
                            медицинских услуг, которые позволят вам чувствовать себя уверенно и в безопасности в
                            повседневной жизни.</p>
                    </div>
                    <div>
                        <button className={'info-btn'}>Записаться на прием</button>
                    </div>
                </div>
                <img className={'img-line'} src={imgLine} alt=""/>
                <div className={'headerInfo-doctor'}>
                    <img className={'doctor-img'} src={headerDoctor} alt=""/>
                </div>
            </div>
        </div>
    )
}
export default HeaderInfo