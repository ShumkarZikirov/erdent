import { OurService } from '../../components/our-services/OurServices'
import './doctors.scss'

const Doctors = () => {
  return (
    <div className="doctors">
      <div className="all_header">
        <div className="all_header_main">
          <h1>Наши <span className="info_color">врачи</span> </h1>
          <div>
            Нашим специалистам доступны все новейшие методики лечения, имплантации и протезирования зубов
          </div>
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

      <div className="doctors-description description">
        Нашим специалистам доступны все новейшие методики лечения, имплантации и протезирования зубов
      </div>

      <OurService />
    </div>
  )
}
export default Doctors