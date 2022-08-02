import React, { useEffect, useState } from "react";
import { db } from "../config/db";
import { collection, getDocs, onSnapshot, query , orderBy} from "@firebase/firestore";

import "../css/cards.scss";
import Stories from "./Stories";
// import comment from "../data/comment";
import Card from "./Card";
// duplicate

function Cards() {

  const [posts, setPosts] = useState([]);
  const ref = query(collection(db, "posts"), orderBy("timestamp", "desc"));
  function getData() {
    onSnapshot(ref, (q) => {
      const post = [];
      q.forEach((doc) => {
        // push item on loop
        post.push(doc);
      });
      //set item on posts
      setPosts(post);
    });
  }
  useEffect(() => {
    getData();
  }, []);

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return (
    <div className="cards">
      {/* stories from componenets */}
      <Stories />
      { posts.map((post) => (
       
          (  <Card
              key={post.id}
              id={post.id}
              caption={post.data().caption}
              username={post.data().username}
              image={post.data().image}
              storyBorder={post.data().storyBorder}
              likedByText={post.data().likedByText}
              likedByNumber={post.data().likedByNumber}
              hours={post.data().hours}
            />)
           
          ))
        }
    </div>
  );
}

export default Cards;
