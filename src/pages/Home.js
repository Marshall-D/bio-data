import BioList from "../components/BioList";
import "../styles/Home.css";

function Home() {
  return (
    <div className="dnd" >
        <form className="example" action="/search">
          <input
            className="search-input"
            type="text"
            placeholder="Search name"
            name="search"
          />
          <button className="button" type="submit">
            <i class="fa fa-search"></i>
          </button>
        </form>
      
      <div class="theme-container empty">
        <div id="dnn_ctr2178_ContentPane">
          <div
            id="dnn_ctr2178_ModuleContent"
            class="DNNModuleContent ModDNNHTMLC"
          >
            <div>
              <div class="row justify-content-md-center">
                <div className="col-12">
                  <a
                    className="bio-sub"
                    data-toggle="tooltip"
                    href="#"
                    style={{
                      paddingtop: "40px",
                      width: "100%",
                      backgroundColor: "#003b4f !important",
                    }}
                    title="For instruction on submitting biographies, click here"
                  >
                    Biography Submission Instruction{" "}
                    <i class="fas fa-chevron-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="bio-list">
        <ul className="alist">
          <BioList />
          <BioList />
          <BioList />
          <BioList />
          <BioList />
          <BioList />
          <BioList />
          <BioList />
          <BioList />
          <BioList />
          <BioList />
          <BioList />
          <BioList />
        </ul>
      </section>
    </div>
  );
}

export default Home;

