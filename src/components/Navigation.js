import { Link} from 'react-router-dom';
import "../Styles/Navigation.css";


function Navigation() {
    return (
      <nav className="nav">
        <Link to="/" className="span">
          Home
        </Link>

        <Link to="/reg" className="span">
          Registration
        </Link>

        <Link to="/Visa" className="span">
          Canada Visa
        </Link>

        <Link to="/Call" className="span">
          Call For Paper
        </Link>

        <Link to="/Contact" className="span">
          Contact Us
        </Link>

        <Link to="/Speakers" className="span">
          Speakers
        </Link>

        <Link to="/Travel" className="span">
          Travel and Hotel
        </Link>
      </nav>
    );
  }
  
  export default Navigation;