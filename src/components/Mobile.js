// import { Link } from "react-router-dom";
// import "../Styles/Mobile.css";
import { Link } from "react-router-dom";
import "../styles/Mobile.css";

function Mobile() {
  // import "../styles/animation.css";

  const reload = () => {
    window.location.reload(false);
  };
  return (
    <div className="container">
      <div className="content2">
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
                <Link to="/press">Press Office</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}
export default Mobile;
