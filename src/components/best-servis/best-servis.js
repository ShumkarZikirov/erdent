import React from "react";
import './best-servis.scss'
const BestServis = () => {
  return(
      <div className={'bestServis'}>
          <div className={'bestServis-main'}>
              <div className={'bestServis-tittle'}>
                  <h3>Самое качественное обслуживание с нашими опытными врачами</h3>
              </div>
              <div className={'bestServis-info'}>
                  <div className={'info-left'}>
                      <p>С нашими лучшими врачами мы можем предоставлять лучшие медицинские услуги выше среднего. У нас есть высококвалифицированные врачи, так что не волнуйтесь, они также очень талантливы в своих областях.</p>
                  </div>
                  <div className={'info-right'}>
                      <p><span><i className="fa-solid fa-check"></i></span> Ищите своего специалиста и онлайн-консультации в любом месте</p>
                      <p><span><i className="fa-solid fa-check"></i></span>Консультация наших ведущих специалистов</p>
                      <p><span><i className="fa-solid fa-check"></i></span> Врачи доступны 24/7</p>
                      <button className={'bestServis-btn'}>исследовать специалистов <span><i className="fa-solid fa-arrow-right"></i></span></button>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default BestServis