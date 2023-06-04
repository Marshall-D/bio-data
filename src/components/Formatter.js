
import { Outlet } from 'react-router-dom'
import '../App.css';
import MainHeader from './MainHeader';
import Home from '../pages/Home';
import Footer from './Footer';
import About from '../pages/About';
import Press from '../pages/Press';
import Profile from '../pages/Profile';




function Formatter() {
  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
      {/* <div>
        <TopHeader/>
      </div> */}
      <div style={{ width: "100%" }}>
      <MainHeader/>

      </div>

      <Outlet />

      {/* <Home/> */}
      {/* <About/> */}
      {/* <Press/> */}
      {/* <Profile/> */}

      {/* <Navigation />
      <div
        style={{
          display: "flex",
          width: "100%",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        <Outlet />
      </div> */}
      <div>
        <Footer />
      </div> 
    </div>
  );
}

export default Formatter;