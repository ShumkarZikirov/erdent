import React, {useRef, useState} from "react";
import imgLogo from '../../../assets/images/header-logo.png'
import {Link} from 'react-router-dom';
import './header.css'
import {useDispatch, useSelector} from 'react-redux';
import ModalTell from "../../modal/modal-tell/modal-tell";
import {openModal, closeModal} from "../../../redux/actions/global-action";
const Header = () => {
    const [headerTittle, setHeaderTittle] = useState('')

    const navRef = useRef();
    const {user} = useSelector(state => state.AuthReducer)
    const dispatch = useDispatch()
    const showNavbar = (e) => {
        navRef.current.classList.toggle('responsive_nav')
    }
    return (
        <div  className={'header'}>
            <div className={'header_main'}>
                <ModalTell/>
                <div className={'header_logo'}>
                    <img className={'logo-img'} src={imgLogo} alt=""/>
                </div>
                <nav ref={navRef} onClick={showNavbar} className={'header-nav'}>
                    <Link  className={headerTittle === 'Главная'? 'nav-p': null} to='/'>Главная</Link>
                    <Link  className={headerTittle === 'О нас'? 'nav-p': null} to='/about'>О нас</Link>
                    <Link  className={headerTittle === 'Услуги'? 'nav-p': null} to='/services'>Услуги</Link>
                    <Link  className={headerTittle === 'Наши врачи'? 'nav-p': null} to='/doctors'>Наши врачи</Link>
                    <button className={'nav-btn btn_close nav-close-btn'}><i className="fa-solid fa-x"></i></button>
                    <div className={'nav-btns'}>
                        <Link to='/sing-in'>
                            {user !== '' ?
                                <><h1>{user}</h1></>
                                :
                                <button>Войти</button>
                            }
                        </Link>
                    </div>
                </nav>

                <p className={'headerTittle'}>{headerTittle}</p>
                <button onClick={showNavbar} className={'nav-btn nav-close-btn'} ><i className="fa-solid fa-bars"></i>
                </button>
            </div>
        </div>
    )
}

export default Header