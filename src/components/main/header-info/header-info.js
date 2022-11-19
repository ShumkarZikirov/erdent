import React from "react";
import './header-info.css'
import headerDoctor from '../../../assets/images/header-doctor.png'
import {openModal} from "../../../redux/actions/global-action";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";
const HeaderInfo = () => {
    const dispatch = useDispatch()
    return (
        <div className={'headerInfo'} >
            <div className={'headerInfo-main'}>
                <img className={'headerInfo-main-img'} src={headerDoctor} alt="doctor"/>
                <div className={'headerInfo-main-color'}></div>
                <div className={'headerInfo-main-title'}>
                    <h2>Красивая  улыбка меняет Всё!</h2>
                    <button><Link to={'/enroll'}>Записаться</Link></button>
                </div>
            </div>
        </div>
    )
}
export default HeaderInfo