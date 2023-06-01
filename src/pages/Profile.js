
import penn from '../images/penn.jpeg'
import "../styles/Profile.css";

function Profile() {
    return (
    <div>
      <div className="content-wrap">

      <h1 className="main-title">Lieutenant Commander </h1>
        <h4 className="press-release">Isabella Penn</h4>
        

        <div class="divider-container">
          <div class="press-briefing-divider divider--narrow"></div>
        </div>

        <div className="bio-img">
          <img
            className="img-responsive"
            src={penn}
            alt="n/a"
          />
          {/* <div class="download">
            <a
              href="/uploads/646a8f295e02783d29dad5ed10362bec.jpeg"
              rel="noopener"
              download=""
            >
              Download
            </a>
          </div> */}
        </div>
        <hr/>
        <div class="press-briefing-columns">
        
          <div className="acontent-container">
            She is a native of ANCHORAGE Alaska. Born to an Ireland mother she
            commissioned through the NROTC program at the UNIVERSITY OF ALASKA
            ANCHORAGE in 1995 and After completing Officer Indoctrination School
            in December 2003, she served as a Staff Nurse at Naval Hospital Camp
            Lejeune, North Carolina. As a Lieutenant Junior Grade, she earned a
            Master of Arts Degree in Health Services Management from UAA and
            also has a degree in International Relations and she completed her
            Joint Professional Military Education as a student of the U.S. Naval
            War College and the Joint Forces Staff College. At sea, she served
            onboard USS Wasp (LHD 1), USS Saipan (LHA 2) USS Elrod (FFG 55), USS
            Leyte Gulf (CG 55), and USS Porter (DDG 78). She also commanded USS
            Kauffman (FFG 59) and Destroyer Squadron 28 where she deployed twice
            as the Sea Combat commander with Harry S. Truman Carrier Strike
            Group. Furthermore, she has been deployed in support of Operations
            Joint Endeavor, Active Endeavor, Afghanistan Freedom, Enduring
            Freedom and Inherent Resolve. She was transferred to the National
            Naval Medical Center in Bethesda, Maryland. She served as a Staff
            Nurse on the Mother and Infant Care Center and Nursing Supervisor.
            CDR she was aboard to the USNS Comfort (T-AH 19) from March to May
            2005 in support of Operation Iraqi Freedom (OIF). She also served as
            communications and information systems department head for USS Blue
            Ridge (LCC 19) and flag communications officer for Carrier Strike
            Group 8 embarked on USS Harry S Truman (CVN 75). Ashore, she served
            as current surface operations officer for Commander, U.S. Atlantic
            Fleet; flag secretary to Commander, Naval Surface Force Atlantic;
            contingency plans officer, U.S. Joint Forces Command; and, assistant
            chief of staff for Manning, Manpower, and Personnel (N1) for
            Commander, Naval Surface Force Atlantic. Couture also served as a
            federal executive fellow at the Center for a New American Security
            In July 2010, she was transferred to U.S. Airforce Hospital Okinawa
            serving as a Family Nurse Practitioner and Division Officer, then
            later as Head, Maternal-Child Nursing Department. She is currently
            on a clandestine active duty. She is stationed at the Intensive Care
            Unit at the, Al-Tanf garrison (ATG), is a United States military
            base within territory controlled by the Syrian opposition in Homs
            Governorate, Syria. It is located 24 km (15 mi) west of the al-Tanf
            border crossing in the Syrian Desert. The surrounding deconfliction
            zone is located along the Iraq and Jordan–Syria border. The garrison
            is located along a critical road known as the M2 Baghdad–Damascus
            Highway.
          </div>
          <hr/>
          
          <p className='small'> Updated 2022</p >

        </div>



        </div>

    </div>
    );
  }
  
  export default Profile;