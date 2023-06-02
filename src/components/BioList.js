import "../styles/Home.css";
// import assist from "../images/assist.jpeg";
// import penn from "../images/penn.jpeg";
import { Link } from "react-router-dom";
import {members} from "../data/Data";


function BioList(props) {
  return (
    <div>
      <li className="data-name" data-lastname="Acquavella">
        
        <Link
        state= {{name:props.name,rank:props.rank,image:props.image,content:props.content}}
          to="/profile"
          className="list-a"
          style={{ textDecoration: "none !important" }}
          // href="profile?id=11&amp;name=(Russell Rumbaugh)"
        >
          <div className="thumb">
            <img
              className="img-thumb"
              src={props.image}
              alt="Assistant Secretary of the Navy (Financial Managem"
            />
          </div>
          <h3 className="h3-thumb">{props.rank} </h3>
          <h2 className="h2-thumb">{props.name}</h2>
        </Link>
      </li>
    </div>
  );
}

export default BioList;
