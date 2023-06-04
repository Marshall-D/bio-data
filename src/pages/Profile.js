
// import penn from '../images/penn.jpeg'
import "../styles/Profile.css";
import { useLocation } from "react-router-dom";
// import React, { useEffect} from "react"



function Profile(props) {

const location = useLocation()




    return (
    <div>
      <div className="content-wrap">

      <h1 className="main-title">{location.state.rank} </h1>
        <h4 className="press-release">{location.state.name}</h4>
        

        <div class="divider-container">
          <div class="press-briefing-divider divider--narrow"></div>
        </div>

        <div className="bio-img">
          <img
            className="img-responsive"
            src={location.state.image}
            alt="n/a"
          />
          
        </div>
        <hr/>
        <div class="press-briefing-columns">
        
          <div className="acontent-container">
            {location.state.content}
          </div>
          <hr/>
          
          <p className='small'> Updated 2023</p >

        </div>



        </div>

    </div>
    );
  }
  
  export default Profile;