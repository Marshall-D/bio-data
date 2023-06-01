// import { Link } from "react-router-dom";
// import "../Styles/Mobile.css";
import { Link } from 'react-router-dom';
import "../styles/Mobile.css";

function Mobile() {
   
    // import "../styles/animation.css";
    
    
        
    const reload = () =>{
      window.location.reload(false);
    
    
    }
        return (
          <div>
    
            <div className="content2">
              {/* <div 
          className="phone"
          > */}
              <nav role="navigation">
                <div id="menuToggle">
                  <input type="checkbox" />
                  <span></span>
                  <span></span>
                  <span></span>
    
                  <ul id="menu" onClick={reload}>
                    <li>
                    <Link to="/">Home</Link>
                    
                    </li>
                    <li>
                    <Link to="/about">About</Link>
                    </li>
                    <li>
                    <Link to="/press">Press</Link>
                    </li>
                    <li>
                    {/* <Link to="/openai">Openai & NeuraLink</Link> */}
                    </li>
                  
                    <li>
                    {/* <Link to="/theboringcompany">Theboringcompany</Link> */}
                    </li>
                    <li>
                    {/* <Link to="/contact">Contact</Link> */}
                    </li>
                    <li>
                    {/* <Link to="https://form.jotform.com/231312771736252">Invest</Link> */}
                    </li>
                  </ul>
                </div>
              </nav>
              {/* </div> */}
              {/* <div >
                <p className="texts"> Elon Investments</p>
              </div> */}
            </div>
            
          </div>
      











    // <div class="d-block d-lg-none">
    //   <nav class="navbar navbar-expand-lg navbar-light bg-light">
    //     <div class="container-fluid">
    //       <a class="navbar-brand" href="#"></a>
    //       <button
    //         class="navbar-toggler"
    //         type="button"
    //         data-bs-toggle="collapse"
    //         data-bs-target="#navbarNav"
    //         aria-controls="navbarNav"
    //         aria-expanded="true"
    //         aria-label="Toggle navigation"
    //       >
    //         <span class="navbar-toggler-icon"></span>
    //       </button>
    //       <div class="navbar-collapse collapse show" id="navbarNav" >
    //         <ul class="navbar-nav">
    //           <li class="nav-item">
    //             <a
    //               class="nav-link active text-white"
    //               aria-current="page"
    //               href="#"
    //             ></a>
    //           </li>
    //           <li class="nav-item">
    //             <a class="nav-link text-white" href="/about">
    //               About
    //             </a>
    //           </li>

    //           <li class="nav-item">
    //             <a class="nav-link text-white" href="/press_office">
    //               Press Office
    //             </a>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </nav>
    // </div>
  );
}
export default Mobile;
