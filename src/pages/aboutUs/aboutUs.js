import AboutHeader from "../../components/about-us/about-header";
import Servis from "../../components/about-us/servis";
import AboutPriceList from "../../components/about-us/about-price-list";
import ListPrice from "../../components/about-us/list-price";
import ServicesErdent from "../../components/about-us/services-erdent";
import Advantages from "../../components/about-us/advantages";
import Garanty from "../../components/about-us/garanty";
import MobileApp from "../../components/mobile-app";
import BestServis from "../../components/best-servis";
const AboutUs = () => {
  return(
      <div>
          <AboutHeader/>
          <Servis/>
          <BestServis/>
          <ServicesErdent/>
          <Advantages/>
          <Garanty/>
          <MobileApp/>
          {/*<AboutPriceList/>*/}
          {/*<ListPrice/>*/}
      </div>
  )
}
export default AboutUs