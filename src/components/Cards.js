import React, { useContext, useEffect } from "react";
// import { db } from "../config/db";
// import { collection, getDocs, onSnapshot, query, orderBy } from "@firebase/firestore";

import "../css/cards.scss";
import Stories from "./Stories";
// import comment from "../data/comment";
import Card from "./Card";
import thoughtContext from "../context/thought/thoughtContext";
// duplicate

function Cards() {
  const context = useContext(thoughtContext);
  const { posts, getPost } = context;


  useEffect(() => {
    getPost();
  }, []);



  return (
    <div className="cards">
      {/* stories from componenets */}
      <Stories />
      {posts.map((post) => (

        (<Card
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
