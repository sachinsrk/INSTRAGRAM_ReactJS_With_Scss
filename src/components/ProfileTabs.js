import React from 'react'
import "../css/profiletabs.scss"
import thoughtContext from '../context/thought/thoughtContext';
import Grid from "../img/Grid";
import Reels from "../img/Reels";
import IGTV from "../img/IGTV.js";
import Guides from "../img/Guides";
import Tags from "../img/Tags";
import { useContext } from 'react';


function ProfileTabs() {
  const context = useContext(thoughtContext)
  const {activeTab, setActiveTab} = context
 
    return (
        <div className="TabsWrapper">
        <li className={activeTab === "Tab-1" ? "active" : "Tab-1"} name="Tab-1" onClick={()=>setActiveTab("Tab-1")}>
          <Grid />
        </li>
        <li className={activeTab === "Tab-2" ? "active" : "Tab-2"} name="Tab-2"  onClick={()=>setActiveTab("Tab-2")}>
          <Reels />
        </li>
        <li className={activeTab === "Tab-3" ? "active" : "Tab-3"} name="Tab-3"  onClick={()=>setActiveTab("Tab-3")}>
          <IGTV />
        </li>
        <li className={activeTab === "Tab-4" ? "active" : "Tab-4"} name="Tab-4"  onClick={()=>setActiveTab("Tab-4")}>
          <Guides />
        </li>
        <li className={activeTab === "Tab-5" ? "active" : "Tab-5"} name="Tab-5"  onClick={()=>setActiveTab("Tab-5")}>
          <Tags />
        </li>
      </div>
    )
}

export default ProfileTabs
