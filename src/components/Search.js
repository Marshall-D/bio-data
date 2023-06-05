import "../styles/Home.css";
import { members } from "../data/Data";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SearchComponent from "../components/SearchComponent";
import img100 from "../images/lisapenn.jpeg";
import { doc, collection, addDoc, getDocs, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useLocation } from "react-router-dom";

let isabel = [
  {
    id: "e100",

    name: "saul",
    rank: "Lieutenant Commander",
    image: img100,
    content:
      "She is a native of ANCHORAGE Alaska. Born to an Ireland mother she commissioned through the NROTC program at the UNIVERSITY OF ALASKA ANCHORAGE in 1995 and After completing Officer Indoctrination School in December 2003, she served as a Staff Nurse at Naval Hospital Camp Lejeune, North Carolina. As a Lieutenant Junior Grade, she earned a Master of Arts Degree in Health Services Management from UAA and also has a degree in International Relations and she completed her Joint Professional Military Education as a student of the U.S. Naval War College and the Joint Forces Staff College. At sea, she served onboard USS Wasp (LHD 1), USS Saipan (LHA 2) USS Elrod (FFG 55), USS Leyte Gulf (CG 55), and USS Porter (DDG 78). She also commanded USS Kauffman (FFG 59) and Destroyer Squadron 28 where she deployed twice as the Sea Combat commander with Harry S. Truman Carrier Strike Group." +
      " Furthermore, she has been deployed in support of Operations Joint Endeavor, Active Endeavor, Afghanistan Freedom, Enduring Freedom and Inherent Resolve. She was transferred to the National Naval Medical Center in Bethesda, Maryland. She served as a Staff Nurse on the Mother and Infant Care Center and Nursing Supervisor. CDR she was aboard to the USNS Comfort (T-AH 19) from March to May 2005 in support of Operation Iraqi Freedom (OIF). She also served as communications and information systems department head for USS Blue Ridge (LCC 19) and flag communications officer for Carrier Strike Group 8 embarked on USS Harry S Truman (CVN 75). Ashore, she served as current surface operations officer for Commander, U.S. Atlantic Fleet; flag secretary to Commander, Naval Surface Force Atlantic; contingency plans officer, U.S. Joint Forces Command; and, assistant chief of staff for Manning, Manpower, and Personnel (N1) for Commander, Naval Surface Force Atlantic. Couture also served as a federal executive fellow at the Center for a New American Security In July 2010, she was transferred to U.S. Airforce Hospital Okinawa serving as a Family Nurse Practitioner and Division Officer, then later as Head, Maternal-Child Nursing Department. She is currently on a clandestine active duty. She is stationed at the Intensive Care Unit at the, Al-Tanf garrison (ATG), is a United States military base within territory controlled by the Syrian opposition in Homs Governorate, Syria. It is located 24 km (15 mi) west of the al-Tanf border crossing in the Syrian Desert. The surrounding deconfliction zone is located along the Iraq and Jordan–Syria border. The garrison is located along a critical road known as the M2 Baghdad–Damascus Highway.",
  },
];
// import { FiSearch } from 'react-icons/';

// array of navy meme

function Search(props) {
  const [searchInput, setSearchInput] = useState("");
  // const [show,  setShow] = useState(false);
  // const [filteredMemebers, setFilteredMembers] = useState([]);
  const [todos, setTodos] = useState("");
  // const [searchcomponents, setSearchcomponents] = useState("");
  const location = useLocation();
  console.log(location.state.input);
  console.log(searchInput);

      useEffect(()=>{
          fetchPost();
      }, [])
    const fetchPost = async () => {

      await getDocs(collection(db, "89"))
          .then((querySnapshot)=>{
              const newData = querySnapshot.docs
                  .map((doc) => (doc.data().todo));
              setTodos(...newData);
              console.log(todos)
          })

          // let  name = newData;

  }
  isabel[0].name = todos;
  // const reload = () => {
  //   window.location.reload(false);
  // };

  const handletext = (event) => {
    event.preventDefault();
    setSearchInput(event.target.value);
  };
//   if (coinToss() === 'heads') {
//   img = <img src={pics.kitty} />
// } else {
//   img = <img src={pics.doggy} />
// }
let pennRegex = /penn/i;

let searchcomponents = (<div>
  <p  style={{marginLeft:"0.5em"}}> no results found</p> 
  </div>)

  if (pennRegex.test(location.state.input)) {
   searchcomponents = <div>
<SearchComponent
        key={isabel[0].id}
        name={isabel[0].name}
        rank={isabel[0].rank}
        image={isabel[0].image}
        content={isabel[0].content}
      /> <SearchComponent
        key={members[97].id}
        name={members[97].name}
        rank={members[97].rank}
        image={members[97].image}
        content={members[97].content}
      /> <SearchComponent
      key={members[96].id}
      name={members[96].name}
      rank={members[96].rank}
      image={members[96].image}
      content={members[96].content}
      /><SearchComponent
      key={members[95].id}
      name={members[95].name}
      rank={members[95].rank}
      image={members[95].image}
      content={members[95].content}
      /><SearchComponent
      key={members[94].id}
        name={members[94].name}
        rank={members[94].rank}
        image={members[94].image}
        content={members[94].content}
      /><SearchComponent
      key={members[93].id}
      name={members[93].name}
      rank={members[93].rank}
      image={members[93].image}
      content={members[93].content}
      /><SearchComponent
      key={members[92].id}
      name={members[92].name}
      rank={members[92].rank}
      image={members[92].image}
      content={members[92].content}
      /><SearchComponent
      key={members[91].id}
      name={members[91].name}
      rank={members[91].rank}
      image={members[91].image}
      content={members[91].content}
      /><SearchComponent
      key={members[90].id}
      name={members[90].name}
      rank={members[90].rank}
      image={members[90].image}
      content={members[90].content}
      />

   </div>
          
  } ;
  if ( pennRegex.test(searchInput )){
    searchcomponents = <div>
 <SearchComponent
      key={isabel[0].id}
      name={isabel[0].name}
      rank={isabel[0].rank}
      image={isabel[0].image}
      content={isabel[0].content}
    /> <SearchComponent
      key={members[97].id}
      name={members[97].name}
      rank={members[97].rank}
      image={members[97].image}
      content={members[97].content}
    /> <SearchComponent
    key={members[96].id}
    name={members[96].name}
    rank={members[96].rank}
    image={members[96].image}
    content={members[96].content}
    /><SearchComponent
    key={members[95].id}
    name={members[95].name}
    rank={members[95].rank}
    image={members[95].image}
    content={members[95].content}
    /><SearchComponent
    key={members[94].id}
      name={members[94].name}
      rank={members[94].rank}
      image={members[94].image}
      content={members[94].content}
    /><SearchComponent
    key={members[93].id}
    name={members[93].name}
    rank={members[93].rank}
    image={members[93].image}
    content={members[93].content}
    /><SearchComponent
    key={members[92].id}
    name={members[92].name}
    rank={members[92].rank}
    image={members[92].image}
    content={members[92].content}
    /><SearchComponent
    key={members[91].id}
    name={members[91].name}
    rank={members[91].rank}
    image={members[91].image}
    content={members[91].content}
    /><SearchComponent
    key={members[90].id}
    name={members[90].name}
    rank={members[90].rank}
    image={members[90].image}
    content={members[90].content}
    />
      
    
    </div>
     
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    
  };

  
  

  return (
    <div className="dnd">
      <form className="example" onSubmit={handleSubmit}>
        <input
          onChange={handletext}
          className="search-input"
          type="text"
          placeholder="Search name"
            value={searchInput}
        />
        <Link 
        state= {{input:searchInput}}

        to="/search"> 
        <button className="button" type="submit">
            {/* <FiSearch/> */}
            <i class="fa fa-search"></i>
          </button>
        </Link>
         
        
      </form>

      <section className="bio-list">
        <ul className="alist">
          <p> Search results :</p>
          <br/>
          <br/>
          <br/>
          <br/>

          {searchcomponents}
        </ul>
      </section>
    </div>
  );
}

export default Search;
