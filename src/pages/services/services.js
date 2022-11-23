import ServicesHeader from "../../components/services/services-header";
import ServicesErdent from "../../components/about-us/services-erdent";

const Services = () => {
  return(
      <div>
          <ServicesHeader/>
          <div style={{backgroundColor:'#F1F1F1'}}>
              <ServicesErdent/>
          </div>
      </div>
  )
}
export default Services