import './App.scss';
import Header from "./components/header";
import React from "react";
import Footer from "./components/footer";
import imgLine from '../src/assets/images/Back image shape.svg'
import Main from "./pages/main";
import FotterFoot from "./components/footer-foot";
import ChangeLife from "./components/change-life";
import ModalTell from "./components/modal/modal-tell/modal-tell";
function App() {
  return (
    <div className="App">
      <div className={'App-main'}>
        <React.Fragment>
          <Header />
        </React.Fragment>
        <Main />
      </div>


      <ChangeLife />
      <Footer />
      <FotterFoot />
    </div>
  );
}

export default App;
