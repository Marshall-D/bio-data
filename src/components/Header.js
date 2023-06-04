// import Mobile from "./Mobile";
// import { ImMenu } from "react-icons/im";
// import { MdClose } from "react-icons/md";
// import "../Styles/Header.css";
// import React, { useContext } from "react";
// import { AuthContext } from "../Context/Context";
import bg from "../images/bg.jpg";

import "../styles/TopHeader.css";

function Header() {
  // const { showSide, toggleSide } = useContext(AuthContext);

  return (
    <div className="content-fixed">
      <div
        id="dnn_HeaderPane"
        class="backend-cp-collapsible DNNEmptyPane"
      ></div>
      <div class="page-container">
        <div id="dnn_ContentPane" class="backend-cp-collapsible">
          <div class="DnnModule DnnModule-DNN_HTML DnnModule-690">
            <a name="690" href="#"></a>

            <div class="theme-container empty">
              <div id="dnn_ctr690_ContentPane">
                <div
                  id="dnn_ctr690_ModuleContent"
                  class="DNNModuleContent ModDNNHTMLC"
                >
                  <div id="dnn_ctr690_HtmlModule_lblContent" class="Normal">
                    <p>
                      <img
                        alt=""
                        src={bg}
                        style={{width: "100%", }}
                        title=""
                      />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="DnnModule DnnModule-ArticleCSDashboard DnnModule-707">
            <a name="707" href="#"></a>

            <div class="theme-container">
              <h2 class="theme-container-header">
                <span className="bio-2">
                  BIOGRAPHIES
                </span>

                <span class="rss"></span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
