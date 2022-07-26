import React from "react";
import "../css/sidebar.scss";
import Sticky from "react-sticky-el";
import Profile from "./Profile";
import Suggestion from "./Suggestion";
import Footer from "./Footer";
import image from "../img/prop.jpg";
import thoughtContext from "../context/thought/thoughtContext";
import { useContext } from "react";

function Sidebar() {
  const context = useContext(thoughtContext);
  const {UserName} = context;
  return (
    
      <Sticky topOffset={-80}>
        <div className="sidebar">
          <Profile
            username={UserName}
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
