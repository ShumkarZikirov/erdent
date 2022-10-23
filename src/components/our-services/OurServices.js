import './OurServices.scss'

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
    Navigation,
    Pagination,
    Autoplay,
    Virtual
} from "swiper/core";
import "swiper/swiper-bundle.css";



import imgTreatment from './../../assets/images/Treatment.svg'
import imgDiagnostics from './../../assets/images/Diagnostics.svg'
import imgPrevention from './../../assets/images/Prevention.svg'





export const OurService = () => {
    const serviceData = [
        { id: 0, name: 'Лечение без боли', description: 'Our cardiologists are skilled at  the diagnosing and treating diseases of the cardiovascular system.', img: imgTreatment, active: false },
        { id: 1, name: 'Диагностика', description: 'Our cardiologists are skilled at  the diagnosing and treating diseases of the cardiovascular system.', img: imgDiagnostics, active: true },
        { id: 2, name: 'Профилактика', description: 'Our cardiologists are skilled at  the diagnosing and treating diseases of the cardiovascular system.', img: imgPrevention, active: false },
        { id: 3, name: 'Ренген', description: 'Our cardiologists are skilled at  the diagnosing and treating diseases of the cardiovascular system.', img: imgTreatment, active: false },
    ]

    SwiperCore.use([Navigation, Pagination, Autoplay, Virtual]);









    return (
        <div className="OurService container">
            <h1><span className='info-color'> Наш Сервис </span></h1>
            <div>
                <div>Наши врачи обладают высокой квалификацией и гарантированно <br /> помогут вам оправиться от вашей проблемы в зубах.</div>
            </div>

            <div className="carousel">

                <div className="carouselItems">
                    {serviceData.map((item, i) => {
                        return (
                            <div className="carouselItem" key={i} >
                                <div>
                                    <img src={item.img} alt="" />
                                </div>
                                <h3>{item.name}</h3>
                                <p>
                                    {item.description}
                                </p>

                            </div>
                        )
                    })}
                </div>



                <Swiper
                    // autoplay
                    slidesPerView={3}
                    centeredSlides={true}
                    loop={true}
                    spaceBetween={50}
                    navigation
                    pagination

                >
                    {serviceData.map((elem, i) => {

                        return (
                            <SwiperSlide key={`slide-${i}`}  >
                                <div>
                                    <img src={elem.img} alt="" />
                                </div>
                                <h3>{elem.name}</h3>
                                <p>
                                    {elem.description}
                                </p>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>


            </div>
        </div >
    )
}
