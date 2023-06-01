import "../styles/Home.css";
import assist from "../images/assist.jpeg";
import penn from "../images/penn.jpeg";
import { Link } from "react-router-dom";

function BioList() {
  return (
    <div>
      <li className="data-name" data-lastname="Acquavella">
        <a
          className="list-a"
          style={{ textDecoration: "none !important" }}
          href="profile?id=11&amp;name=(Russell Rumbaugh)"
        >
          <div className="thumb">
            <img
              className="img-thumb"
              src={assist}
              alt="Assistant Secretary of the Navy (Financial Managem"
            />
          </div>
          <h3 className="h3-thumb">
            Assistant Secretary of the Navy (Financial Managem
          </h3>
          <h2 className="h2-thumb">
            Russell Rumbaugh</h2>
        </a>
      </li>
      <li 
      className="data-name"
      data-lastname="Acquavella">
        <a
          style={{ textDecoration: "none !important" }}
          href="profile?id=12&amp;name=(Franklin R. Parker)"
        >
          <div className="thumb">
            <img
              className="img-thumb"
              src={assist}
              alt="Assistant Secretary of the Navy (Manpower &amp; Reserv"
            />
          </div>
          <h3 className="h3-thumb">
            Assistant Secretary of the Navy (Manpower &amp; Reserv</h3>
          <h2 className="h2-thumb">
            Franklin R. Parker</h2>
        </a>
      </li>
      <li 
      className="data-name"
      data-lastname="Acquavella">
                              

                              <Link to="/profile"
          style={{ textDecoration: "none !important" }}
          // href="profile?id=14&amp;name=(John P. Coffey)"
        >
          <div className="thumb">
            <img
              className="img-thumb"
              src={penn}
              alt="General Counsel, Department of the Navy"
            />
          </div>
          <h3 className="h3-thumb">
          Lieutenant Commander
            </h3>
          <h2 className="h2-thumb">
          Isabella Penn
        </h2>
        </Link>
      </li>
    </div>
  );
}

export default BioList;
