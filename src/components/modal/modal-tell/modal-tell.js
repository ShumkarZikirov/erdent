import imgLogo from '../../../assets/images/header-logo.png'
import './modal-tell.scss'
import {useDispatch, useSelector} from "react-redux";
import {closeModal} from "../../../redux/actions/global-action";

const ModalTell = () => {
    const dispatch = useDispatch()
    const {modal} = useSelector(state => state.globalReducer)
    return(
      <div onClick={() => dispatch(closeModal())} className={modal?'modal-tell active':'modal-tell'}>
          <div className={'modal-main'}>
              <button id={'close-modal'}><i className="fa-solid fa-xmark"></i></button>
              <div onClick={e => e.stopPropagation()} className={'modal-content'}>
                  <img src={imgLogo} alt=""/>
                  <h5>Запись к специалисту</h5>
                  <form action="">
                      <input type="text" placeholder={'Ваше имя'}/>
                      <input type="text" placeholder={'Ваш номер телефона'}/>
                      <button>Оставить заявку</button>
                  </form>
                  <p>Нажимая на кнопку, вы даете согласие
                      на обработку своих <span>персональных данных.</span></p>
              </div>
          </div>
      </div>
  )
}
export default ModalTell