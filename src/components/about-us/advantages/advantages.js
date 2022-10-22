import './advantages.scss'
import lineDark from '../../../assets/images/line-dark.png'
const Advantages = () => {
  return(
      <div className={'advantages'}>
          <div className={'advantages-main'}>
              <div className={'advantages-left'}>
                  <h3>Наши <span className={'color-p'}>преимущества</span></h3>
                  <h5>Команда профессионалов</h5>
                  <p>Детская стоматология: лечение под наркозом и под седацией ЗАКС (смеси закиси азота и медицинского кислорода), хирургическая стоматология (в том числе пластика уздечек губ и языка), исправление прикуса, формирование правильного роста зубов на этапе прорезывания, лечение молочных и постоянных зубов, детское протезирование, лечение десен, гигиена и профилактика заболеваний полости рта, обучающие программы по правильному уходу за зубами и полостью рта.</p>
                  <h5>Передовые технологии и оборудование</h5>
                  <p className={'ad-p'}>Высокотехнологичное оснащение отделений «<span className={'color-p'}>ERDENT</span>» позволяет выполнять качественную диагностику и стоматологические процедуры различного уровня сложности:</p>
                  <div className={'advantages-list'}>
                      <li>
                          <span><i className="fa-regular fa-circle"></i></span>
                          <p>компьютерные томографы Vatech и Galileos;</p>
                      </li>
                      <li>
                          <span><i className="fa-regular fa-circle"></i></span>
                          <p>микроскопы Leica;</p>
                      </li>
                      <li>
                          <span><i className="fa-regular fa-circle"></i></span>
                          <p>имплантологические системы ведущих мировых брендов;</p>
                      </li>
                      <li>
                          <span><i className="fa-regular fa-circle"></i></span>
                          <p>рентген-аппарат нового поколения;</p>
                      </li>
                      <li>
                          <span><i className="fa-regular fa-circle"></i></span>
                          <p>аппараты для профессионального отбеливания зубов ZOOM4, ZOOM3, Blanche Brillante;</p>
                      </li>
                      <li>
                          <span><i className="fa-regular fa-circle"></i></span>
                          <p>компьютерная анестезия;</p>
                      </li>
                      <li>
                          <span><i className="fa-regular fa-circle"></i></span>
                          <p>компьютерная диагностика тканей пародонта.</p>
                      </li>
                  </div>
              </div>
              <div className={'advantages-right'}>
                  <img src={lineDark} alt=""/>
              </div>
          </div>
      </div>
  )
}

export default Advantages