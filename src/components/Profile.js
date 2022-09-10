import React from "react";
import "../css/profile.scss";
import ProfileIcon from "./ProfileIcon";
import users from "../data/users";
import { useState } from "react";
import { useEffect } from "react";
import { db, auth, storage } from "../config/db";
import { addDoc, collection, doc, getDocs, onSnapshot, orderBy, query, serverTimestamp, where } from "firebase/firestore";

function Profile(props) {
  const [ProfileImageLink, setProfileImageLink] = useState()
  const {
    username,
    caption,
    urlText,
    iconSize,
    captionSize,
    storyBorder,
    hideAccountName,
    image,
  } = props;
  useEffect(() => {
    const ref = query(collection(db, "users"), where("displayName", "==", `${username}`));
    console.log("enter card")    //set item on posts
    const getPro = async () => {
      onSnapshot(ref, (q) => {
        const post = [];
        q.forEach((doc) => {
          // push item on      
          console.log("enter card loop")
          setProfileImageLink(doc.data().photoURL)
          console.log(doc.data())
        });
        //set item on posts
      });
    }
    getPro();
  }, [username])
  const accountName = username
    ? username
    : users[Math.floor(Math.random() * users.length)].username;

  return (
    <div className="profile">
      <ProfileIcon
        iconSize={iconSize}
        storyBorder={storyBorder}
        image={ProfileImageLink ? ProfileImageLink : image}
      />

      {(accountName || caption) && !hideAccountName && (
        <div className="textContainer">
          <span className="accountName">{accountName}</span>
          <span className={`caption ${captionSize}`}>{caption}</span>
        </div>
      )}
      <a href="/">{urlText}</a>
    </div>
  );
}

export default Profile;
