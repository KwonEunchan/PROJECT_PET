import './App.scss'
import Header from "./Components/Header";
import Slide from './Components/Slide';
import Campaign from './Components/Campaign';
import Adopt from './Components/Adopt';

function App() {
  return(
    <>
      <Header></Header>
      <div className="banner">예쁜 아이들이 많아요!</div>
      <section className="main">
        <Slide></Slide>
        <Campaign></Campaign>
      </section>
      <section className="adopt">
        <Adopt></Adopt>
      </section>
      <footer>
        <img className="logo" src="logo.png" alt="logo" />
        <div className="infoBox">
          <p>고객센터 : 운영하지 않습니다</p>
          <p>이메일 : klg3377@naver.com</p>
          <p>주소 : 비밀입니다.</p>
        </div>
        <img className="footerLogo" src="footerImg.png" alt="f" />
      </footer>
    </>
  )

}

export default App;
