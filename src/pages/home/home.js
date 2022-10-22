import HeaderInfo from "../../components/header-info";
import BestServis from "../../components/best-servis";
import MainIcons from "../../components/main-icons";
import OnlineDoctor from "../../components/online-doctor";
import MobileApp from "../../components/mobile-app";

const Home = () => {
  return(
      <div>
          <HeaderInfo/>
          <MainIcons/>
          <BestServis/>
          <OnlineDoctor/>
          <MobileApp/>
      </div>
  )
}
export default Home