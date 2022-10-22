import './comment.scss'
import alan from '../../assets/images/allan.png'
import alex from '../../assets/images/alex.png'
import tasmin from '../../assets/images/tasmin.png'

const Comment = () => {
    return (
        <div>
            <div>
                <div>
                    <h3>Look our Clients have to say about us</h3>
                </div>
                <div>
                    <button><i className="fa-solid fa-angle-left"></i></button>
                    <div>
                        <img src={alan} alt=""/>
                        <div>
                            <div>
                                <h4>Alan Zara dilan</h4>
                                <p>New York, America, USA</p>
                            </div>
                            <p>⭐⭐⭐⭐⭐</p>
                        </div>
                        <p>Telehealth is fueled by digital technologies and DocTime telemedicine app has brought a great
                            revolution in medical services specially an overpopulated country where virtual chamber can
                            create at anywhere thoughout country</p>
                    </div>
                    <div></div>
                    <div></div>
                    <button><i className="fa-solid fa-chevron-right"></i></button>
                </div>
            </div>
        </div>
    )
}
export default Comment