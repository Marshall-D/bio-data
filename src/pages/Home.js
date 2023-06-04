import BioList from "../components/BioList";
import "../styles/Home.css";
import {members} from "../data/Data";
import { useState } from "react";
import Search from "../components/SearchComponent";
import { Link } from "react-router-dom";






// array of navy memebrs


function Home(props) {
  // const [searchInput,setSearchInput] = useState(members);

  

  // const handletext = (event) => {
  //   event.preventDefault();
  //   setSearchInput(event.target.value)

  // }

  //
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // console.log(searchInput)
  //   let filteredMemebers = members.filter(
  //     (member) => member.name === searchInput 
  //   );
  //   setFilteredMembers(filteredMemebers)
  //   console.log(filteredMemebers)

  // }


  return (
    <div className="dnd">


      <form className="example" 
      // onSubmit={handleSubmit} 
      >
        <input
        // onChange={handletext}
          className="search-input"
          type="text"
          placeholder="Search name"
          // name="search"
        />
         <Link 
         to="/search">
        <button className="button" type="submit"  >
          <i class="fa fa-search"></i>
        </button>
        </Link> 

      </form>

      
      <section className="bio-list">
        <ul className="alist">
          {/* map the array of navy members here and 
          create a biolist each time and send the details through props */}
          {members.map((member) => (
            <BioList
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

export default Home;
