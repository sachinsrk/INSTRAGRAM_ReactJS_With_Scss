import React from "react";
import "../css/suggestion.scss";
import Profile from "./Profile";

function Suggestion() {


  return (
    <div className="suggestion">
      <div className="titleContainer">
        <div className="title">Suggerstion For you</div>
        <a href="/" >See All</a>
      </div>

      <Profile
        caption="Followed by vivek and + 3 more"
        urlText="Follow"
        iconSize="medium"
        captionSize="small"
        storyBorder={true}
      />
          <Profile
        caption="Follows You"
        urlText="Follow"
        iconSize="medium"
        captionSize="small"
        storyBorder={true}
      />
          <Profile
        caption="Followed by kuma and + 3 more"
        urlText="Follow"
        iconSize="medium"
        captionSize="small"
        
      />
          <Profile
        caption="Started Following you"
        urlText="Follow"
        iconSize="medium"
        captionSize="small"
        storyBorder={true}
      />
          <Profile
        caption="Followed by vivek and + 3 more"
        urlText="Follow"
        iconSize="medium"
        captionSize="small"
        
      />
    </div>
  );
}

export default Suggestion;
