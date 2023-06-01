
import "../styles/Footer.css";
import flag from "../images/9.jpg";


function Footer() {
  return (
          <footer className="footer-main" >
     <div className="footer-above" >
        <div class="container-fluid">
            <div class="row">
                <div className="col-md">
                    <div className="foot-info-container">
                         <div className="bottom-seal">
                            <a href="##" class="footer-logo">
                                <img src={flag} alt="Seal" className="departmental-seal"/>
                            </a>
                         </div>
                        <div className="office-info">
                            <a href="##" class="footer-contact-link">
                                <h3 className="footer-h3" >CLANDESTINEDATABASE</h3>
                                <div class="footer-information">
                                    <p className="footer-information">Chief of Information</p>
                                    <p className="footer-information">Attn: US Navy</p>
                                    <p className="footer-information">1200 Navy Pentagon</p>
                                    <p className="footer-information">Washington DC 20350-1200</p>
                                    <h3>Info@clandestinedatabase.com</h3>
                                </div>
                            </a>
                        </div>
                        {/* <div class="footer-text-links list-row social-grid-cell">
                                <ul class=""><li class=""><a href="#https://www.facebook.com/usnavy" title="Navy Facebook" rel="noopener"><span class="social-icon fab fa-facebook-square social-link-1"></span></a></li><li class=""><a href="#https://www.twitter.com/usnavy" title="Navy Twitter" rel="noopener"><span class="social-icon fab fa-twitter social-link-2"></span></a></li><li class=""><a href="#https://www.instagram.com/usnavy" title="Navy Instagram" rel="noopener"><span class="social-icon fab fa-instagram social-link-3"></span></a></li><li class=""><a href="#https://www.youtube.com/usnavy" title="Navy YouTube Channel" rel="noopener"><span class="social-icon fab fa-youtube social-link-4"></span></a></li><li class=""><a href="#https://www.flickr.com/usnavy" title="Navy Flickr" rel="noopener"><span class="social-icon fab fa-flickr social-link-5"></span></a></li><li class=""><a href="#https://www.pinterest.com/usnavy/" title="US Navy Pinterest" rel="noopener"><span class="social-icon fab fa-pinterest-square social-link-16"></span></a></li><li class=""><a href="##" title="US Navy Blog" rel="noopener"><span class="social-icon fab fa-blogger social-link-17"></span></a></li><li class=""><a href="#https://www.snapchat.com/add/usnavy" title="US Navy Snapchat" rel="noopener"><span class="social-icon fab fa-snapchat social-link-18"></span></a></li></ul>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
      </footer>
  );
}
  
  export default Footer;