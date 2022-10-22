import React from "react";
import icon1 from '../../assets/images/main-icon-1.png'
import icon2 from '../../assets/images/main-icon-2.png'
import icon3 from '../../assets/images/main-icon-3.png'
import './main-icons.scss'
const MainIcons = () => {
  return(
      <div className={'mainIcons'}>
          <div className={'mainIcons-main'}>
              <div className={'mainIcons-tittle'}>
                  <h5>3 Простых шага и Получите Свое решение</h5>
              </div>
              <div className={'mainIcons-info'}>
                  <div className={'info-icon'}>
                      <div className={'icon-div one'}>
                          <img  src={icon1} alt=""/>
                      </div>
                      <h6>Найдите лучшего врача</h6>
                      <p>Найдите своего врача легко, затратив минимум усилий. Мы все организовали для вас.</p>
                  </div>
                  <div className={'info-icon'}>
                      <div className={'icon-div tho'}>
                          <img src={icon2} alt=""/>
                      </div>
                      <h6>Записаться на прием</h6>
                      <p>Быстро запишитесь на прием к врачу практически одним щелчком мыши. Мы позаботимся обо всем остальнм.
                      </p>
                  </div>
                  <div className={'info-icon'}>
                      <div className={'icon-div last'}>
                          <img src={icon3} alt=""/>
                      </div>
                      <h6>Счастливые Консультации</h6>
                      <p>Проводите консультации и пользуйтесь услугами в соответствии с вашим назначением.</p>
                  </div>
              </div>
          </div>
      </div>
  )
}
export default MainIcons