import React from "react";
import "../css/sidebar.scss";
import Sticky from "react-sticky-el";
import Profile from "./Profile";
import Suggestion from "./Suggestion";
import Footer from "./Footer";
import image from "../img/prop.jpg";

function Sidebar() {
  return (
    
      <Sticky topOffset={-80}>
        <div className="sidebar">
          <Profile
            username="vishal_rk"
            caption="The day we live the day you die."
            urlText="Switch"
            iconSize="big"
            image={image}
          />
          <Suggestion/>
          <Footer/>
        </div>
      </Sticky>
    
  );
}

export default Sidebar;
