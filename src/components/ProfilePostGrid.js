import React, { useContext, useEffect, useState } from 'react'
import { db } from "../config/db";
import { collection, getDocs, onSnapshot, query, orderBy, where } from "@firebase/firestore";
import "../css/profilepostgrid.scss";
import ProfilePost from './ProfilePost';
import thoughtContext from '../context/thought/thoughtContext';


function ProfilePostGrid() {
  const context = useContext(thoughtContext);
  const { user, UserName, setPostCount, commentCount} = context
  const [posts, setPosts] = useState([]);
  const ref = query(collection(db, "posts"), orderBy("timestamp", "desc"), where("username", "==", `${UserName}`));

  function getData() {
    onSnapshot(ref, (q) => {
      const post = [];
      let count = 0
      q.forEach((doc) => {
        // push item on loop
        count++;
        post.push(doc);
      });
      //set item on posts
      setPostCount(count)
      setPosts(post);
    });
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="GridWrapper">
    
      {posts.map((post) => (

        (<ProfilePost
          key={post.id}
          id={post.id}
          caption={post.data().caption}
          username={post.data().username}
          image={post.data().image}
          storyBorder={post.data().storyBorder}
          likedByText={post.data().likedByText}
          likedByNumber={post.data().likedByNumber}
          hours={post.data().hours}
          CommentCount = {commentCount}
        />)

      ))
      }
    </div>
  )
}

export default ProfilePostGrid
