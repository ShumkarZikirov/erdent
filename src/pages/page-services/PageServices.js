import { OurService } from '../../components/our-services/OurServices'
import './PageServices.scss'
import ServicesErdent from './../../components/about-us/services-erdent/services-erdent'


const priceData = [
  { name: 'Профессиональная чистка зубов', price: 0 },
  { name: 'Отбеливание зубов системой Zoom 4', price: 0 },
  { name: ' Лечение кариеса зубов', price: 0 },
  { name: 'Удаление зубов', price: 0 },
  { name: 'Протезирование на имплантах', price: 0 },
  { name: 'Безметалловые коронки', price: 0 },
  { name: 'Керамические коронки', price: 0 },
  { name: 'Коронки', price: 0 },
  { name: 'Установка брекетов', price: 0 },
  { name: 'Каппы INVISALIGN', price: 0 },
  { name: 'Лечение зубов под общим наркозом', price: 0 },
  { name: 'Одномоментная имплантация зубов', price: 0 },
  { name: 'Костная пластика', price: 0 }
]

const Price = priceData.map((item, i) => {
  return (
    <div key={i} className="price">
      <div>{item.name}</div>
      <div>{item.price} сом</div>
    </div>
  )
})



const Services = () => {
  return (
    <div className='services'>
      <div className="all_header">
        <div className="all_header_main">
          <h1><span className="info_color">У</span>слуги </h1>
          <div>
            Прием пациентов ведется
            с
            <span className="info_color">09:00</span>
            до
            <span className="info_color">21:30</span>
            по будням и с
            <span className="info_color">09:00</span>
            до
            <span className="info_color">21:00</span>
            по субботам и воскресеньям
            без перерывов и выходных
          </div>
        </div>
      </div>

      <OurService />

      <div className="description main-description">
        С полным прайс-листом можно ознакомиться в регистратуре или задать вопрос по телефону +996 999 999 999
        <br />
        <br />
        * Администрация клиники принимает все меры по своевременному обновлению размещенного на сайте
        прайс-листа, однако во избежание возможных недоразумений, советуем уточнять стоимость услуг в регистратуре или
        в контакт-центре по телефону +996 999 999 999
        <br />
        <br />
        Размещенный прайс не является офертой. Медицинские услуги оказываются на основании договора.
      </div>


      <div className="sevices-price">
        <div className="price description">
          <div>Ценики</div>
        </div>
        {Price}
      </div>

      <ServicesErdent />

    </div>
  )
}
export default Services