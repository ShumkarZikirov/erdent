import app from '../../assets/images/Mockup.png'
import googleApp from '../../assets/images/google-play.png'
import appStore from '../../assets/images/app-store.png'
import './mobile-app.scss'
const MobileApp = () => {
  return(
      <div className={'mobileApp'}>
            <div className={'mobileApp-main'}>
                <div className={'mobileApp-img'}>
                    <img src={app} alt=""/>
                </div>
                <div className={'mobileApp-right'}>
                    <h3>Доступны мобильные приложения
                        Получите медицинскую помощь бесплатно!
                    </h3>
                    <p>Получите доступ к врачу по требованию на своем телефоне с помощью бесплатного мобильного приложения HealthCare. Скачайте и зарегистрируйтесь в нашем приложении бесплатно и чувствуйте себя в безопасности для всей своей семьи</p>
                    <div className={'mobileApp-button'}>
                        <img src={googleApp} alt=""/>
                        <img src={appStore} alt=""/>
                    </div>
                </div>
            </div>
      </div>
  )
}
export default MobileApp