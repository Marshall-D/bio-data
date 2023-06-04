import "../styles/Home.css";
import {members} from "../data/Data";
import { useState } from "react";
import { Link } from "react-router-dom";
import SearchComponent from "../components/SearchComponent";






// array of navy memebrs


function Search(props) {
  const [searchInput,setSearchInput] = useState(members);
  const [filteredMemebers,setFilteredMembers] = useState([]);
  const reload = () => {
    window.location.reload(false);
  };
  

  const handletext = (event) => {
    event.preventDefault();
    setSearchInput(event.target.value)

  }

  //
  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(searchInput)
    let filteredMemebers = members.filter(
      (member) => member.name === searchInput 
    );
    setFilteredMembers(filteredMemebers)
    console.log(filteredMemebers)

  }


  return (
    <div className="dnd">
      <form className="example" 
      
      onSubmit={handleSubmit} 
      >
        <input
        onChange={handletext}
          className="search-input"
          type="text"
          placeholder="Search name"
          // name="search"
        />
         <Link
         to="/search"
         onClick={reload} >
        <button className="button" type="submit"  >
          <i class="fa fa-search"></i>
        </button>
        </Link> 

      </form>

      
      <section className="bio-list">
        <ul className="alist">
         
<p> Search results :</p>


         {filteredMemebers.map((member) => (

         <SearchComponent
           key={member.id}
           name={member.name}
           rank={member.rank}
           image={member.image}
           content={member.content}
          
          />
          ))}

        </ul>
      </section>
    </div>
  );
}

export default Search;
