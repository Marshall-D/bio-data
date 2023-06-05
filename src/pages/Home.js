import BioList from "../components/BioList";
import "../styles/Home.css";
import {members} from "../data/Data";
import { useState,useEffect } from "react";
import Search from "../components/SearchComponent";
import { Link } from "react-router-dom";
import img100 from "../images/lisapenn.jpeg";
import { doc, collection,addDoc,getDocs,setDoc } from "firebase/firestore";
import {db} from '../firebase';



let isabel = [
  {
    id: "e100",
      
        name: "saul",
        rank: "Lieutenant Commander",
        image: img100,
        content: "She is a native of ANCHORAGE Alaska. Born to an Ireland mother she commissioned through the NROTC program at the UNIVERSITY OF ALASKA ANCHORAGE in 1995 and After completing Officer Indoctrination School in December 2003, she served as a Staff Nurse at Naval Hospital Camp Lejeune, North Carolina. As a Lieutenant Junior Grade, she earned a Master of Arts Degree in Health Services Management from UAA and also has a degree in International Relations and she completed her Joint Professional Military Education as a student of the U.S. Naval War College and the Joint Forces Staff College. At sea, she served onboard USS Wasp (LHD 1), USS Saipan (LHA 2) USS Elrod (FFG 55), USS Leyte Gulf (CG 55), and USS Porter (DDG 78). She also commanded USS Kauffman (FFG 59) and Destroyer Squadron 28 where she deployed twice as the Sea Combat commander with Harry S. Truman Carrier Strike Group."+
        " Furthermore, she has been deployed in support of Operations Joint Endeavor, Active Endeavor, Afghanistan Freedom, Enduring Freedom and Inherent Resolve. She was transferred to the National Naval Medical Center in Bethesda, Maryland. She served as a Staff Nurse on the Mother and Infant Care Center and Nursing Supervisor. CDR she was aboard to the USNS Comfort (T-AH 19) from March to May 2005 in support of Operation Iraqi Freedom (OIF). She also served as communications and information systems department head for USS Blue Ridge (LCC 19) and flag communications officer for Carrier Strike Group 8 embarked on USS Harry S Truman (CVN 75). Ashore, she served as current surface operations officer for Commander, U.S. Atlantic Fleet; flag secretary to Commander, Naval Surface Force Atlantic; contingency plans officer, U.S. Joint Forces Command; and, assistant chief of staff for Manning, Manpower, and Personnel (N1) for Commander, Naval Surface Force Atlantic. Couture also served as a federal executive fellow at the Center for a New American Security In July 2010, she was transferred to U.S. Airforce Hospital Okinawa serving as a Family Nurse Practitioner and Division Officer, then later as Head, Maternal-Child Nursing Department. She is currently on a clandestine active duty. She is stationed at the Intensive Care Unit at the, Al-Tanf garrison (ATG), is a United States military base within territory controlled by the Syrian opposition in Homs Governorate, Syria. It is located 24 km (15 mi) west of the al-Tanf border crossing in the Syrian Desert. The surrounding deconfliction zone is located along the Iraq and Jordan–Syria border. The garrison is located along a critical road known as the M2 Baghdad–Damascus Highway."
      
  }
]

// regex to search for penn
// let testStr = "freeCodeCamp";
// let testRegex = /Code/;
// testRegex.test(testStr);

function Home(props) {
  const [todos, setTodos] = useState("");
  const [searchInput,setSearchInput] = useState("");
  const [show,setShow] = useState(false);


   
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

   isabel[0].name = todos

  

  const handletext = (event) => {
    event.preventDefault();
    setSearchInput(event.target.value)

    // console.log(searchInput)

  }

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

  const handleSubmit = (event) => {
    // event.preventDefault();
    setSearchInput("")


    let pennRegex = /penn/i;

// if (pennRegex.test(searchInput)) {
  // setShow('true')

//   } 
// if (1===1) {
//   setShow("true");

//   } 
//   else
//    {setShow(false)};

  // console.log(show)
  


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
          value={searchInput}
          // name="search"
        />
         <Link 
         state= {{input:searchInput}}

         to="/search"> 
        <button className="button" type="submit" 
        // onClick={handleSubmit}
         >
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
            <BioList
            key={isabel[0].id}
            name={isabel[0].name}
            rank={isabel[0].rank}
            image={isabel[0].image}
            content={isabel[0].content}

          />

          
         


        

        </ul>
      </section>
    </div>
  );
}

export default Home;
