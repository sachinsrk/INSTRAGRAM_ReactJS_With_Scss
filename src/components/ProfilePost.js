import React from 'react'
import "../css/profilepost.scss";

function ProfilePost(props) {
    const {
        id,
        caption,
        username,
        storyBorder,
        image,
        likedByText,
        likedByNumber,
        hours,
      } = props;
    return (
        <div className="my-3">
          
                <img src={image}  />
          
        </div>
    )
}

export default ProfilePost
