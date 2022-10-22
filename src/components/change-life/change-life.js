import './change-life.scss'
import smileDoctor from '../../assets/images/smile-doctor.png'
const ChangeLife = () => {
  return(
      <div className={'changeLife'}>
          <div className={'changeLife-main'}>
              <div className={'changeLife-left'}>
                  <h3>Пришло время изменить свою жизнь сегодня</h3>
                  <button>Запишитесь на прием</button>
              </div>
              <div className={'changeLife-right'}>
                  <img src={smileDoctor} alt=""/>
              </div>
          </div>
      </div>
  )
}
export default ChangeLife