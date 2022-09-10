import React from "react";
import "../css/sidebar.scss";
import Sticky from "react-sticky-el";
import Profile from "./Profile";
import Suggestion from "./Suggestion";
import Footer from "./Footer";
import scLogo from "../img/scLogo.jpg";
import thoughtContext from "../context/thought/thoughtContext";
import { useContext } from "react";

function Sidebar() {
  const context = useContext(thoughtContext);
  const { UserName, UserProfileUrl } = context;
  return (

    <Sticky topOffset={-80}>
      <div className="sidebar">
        <Profile
          username={UserName}
          caption="Everyting you see. Don't even existe."
          urlText="Switch"
          iconSize="big"
        />
        <Suggestion />
        <Footer />
      </div>
    </Sticky>

  );
}

export default Sidebar;
