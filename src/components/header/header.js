import React, {useRef, useState} from "react";
import imgLogo from '../../assets/images/header-logo.png'
import imgUser from '../../assets/images/user.png'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import {Link} from 'react-router-dom';
import './header.css'
import {useDispatch, useSelector} from 'react-redux';
import ModalTell from "../modal/modal-tell/modal-tell";
const Header = () => {
    const [activeModal,setActiveModal] = useState(true)
    const [headerTittle, setHeaderTittle] = useState('Главная')
    const navRef = useRef();
    const {user} = useSelector(state => state.AuthReducer)
    const showNavbar = (e) => {
        navRef.current.classList.toggle('responsive_nav')
    }
    return (
        <div className={'header'}>
            <div className={'header_main'}>
                <ModalTell active={activeModal} setActive={setActiveModal}/>
                <div className={'header_logo'}>
                    <img className={'logo-img'} src={imgLogo} alt=""/>
                </div>
                <nav ref={navRef} onClick={showNavbar} className={'header-nav'}>
                    <Link onClick={(e) => setHeaderTittle('Главная')} to='/'>Главная</Link>
                    <Link onClick={(e) => setHeaderTittle('О нас')} to='/about'>О нас</Link>
                    <Link onClick={(e) => setHeaderTittle('Услуги')} to='/services'>Услуги</Link>
                    <Link onClick={(e) => setHeaderTittle('Наши врачи')} to='/doctors'>Наши врачи</Link>
                    <Link to='/sing-in'>
                        {user !== '' ?
                            <><h1>{user}</h1></>
                            :
                            <img className={'img-profile'} src={imgUser} alt=""/>
                        }
                    </Link>
                    <button className={'nav-btn btn_close nav-close-btn'}><i className="fa-solid fa-x"></i></button>
                </nav>
                <div className={'nav-btns'}>
                    <div className={'btns-number'}>
                        <button onClick={() => setActiveModal(true)} className={'nav-entry'}>Записаться на примем</button>
                        <button className={'nav-login'}>+996990008217</button>
                    </div>
                </div>
                <p className={'headerTittle'}>{headerTittle}</p>
                <button onClick={showNavbar} className={'nav-btn nav-close-btn'} ><i className="fa-solid fa-bars"></i>
                </button>
            </div>
        </div>
    )
}

export default Header