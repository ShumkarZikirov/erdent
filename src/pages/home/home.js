import HeaderInfo from "../../components/header-info";
import BestServis from "../../components/best-servis";
import MainIcons from "../../components/main-icons";
import OnlineDoctor from "../../components/online-doctor";
import MobileApp from "../../components/mobile-app";
import { OurService } from "../../components/our-services/OurServices";

const Home = () => {
  return (
    <div>
      <HeaderInfo />
      <MainIcons />
      <BestServis />
      <OurService />
      <OnlineDoctor />
      <MobileApp />
    </div>
  )
}
export default Home