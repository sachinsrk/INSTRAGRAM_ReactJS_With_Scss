import React from "react";
import "../css/card.scss";
import CardMenu from "./CardMenu";
import Comment from "./Comment";
import Profile from "./Profile";
import { ReactComponent as CardButton } from "../img/dot.svg";
import { useState } from "react";
import { useEffect } from "react";
import { db } from "../config/db";
import { addDoc, collection, doc, getDocs, onSnapshot, serverTimestamp } from "firebase/firestore";
import { useContext } from "react";
import thoughtContext from "../context/thought/thoughtContext";

function Card(props) {
  const context = useContext(thoughtContext);
  const { UserName } = context;
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
  const [comment, setComment] = useState()
  const [comments, setComments] = useState([])
  const colRef = collection(db, "posts", id, "comment");

  useEffect(() => {
    onSnapshot(colRef, (q) => {
      const post = [];
      q.forEach((doc) => {
        // push item on loop
        post.push(doc);

      });
      setComments(post)
    });
  }, []);

  const addComment = () => {

    const data = {
      timestamp: serverTimestamp(),
      text: comment,
      username: UserName
    }
    addDoc(colRef, data)
      .then(function () {
        setComment('')
        console.log("added");
      }).catch((error) => {
        console.log(error)
        alert(error.message)
      });
  }

  return (

    <div className="_card">
      <header>
        <Profile
          iconSize="medium"
          username={username}
          storyBorder={storyBorder}
        />
        <CardButton className="cardButton" height={16} width={16} />
      </header>
      <img src={image} alt="card content" className="cardImage" />
      <CardMenu />

      <div className="likedBy">
        <Profile iconSize="small" hideAccountName={true} />
        <span>
          Liked by <strong>{likedByText}</strong> and{" "}
          <strong>{likedByNumber} others</strong>
        </span>
      </div>
      <div className="captionContainer">
        <div className="username">{username}</div>
        <div className="caption">{caption}</div>
      </div>
      {/* <div className="comments">{comments}</div> */}
      <div className="comments">
        {comments.map((com) => (
          (
            <Comment
              key={com.id}
              accountName={com.data().username}
              comment={com.data().text}
            />
          )

        ))}
      </div>
      <div className="timePosted">{hours} HOURS AGO</div>
      <div className="addComment">
        <input type="text"
          className="commentText "
          placeholder="Add a comment..." value={comment} onChange={(e) => { e.preventDefault(); setComment(e.target.value) }}>

        </input>
        {comment ?
          <div className="postText" onClick={addComment} style={{ color: '#0095f6' }}>Post</div> :
          <div className="postText">Post</div>
        }

      </div>
    </div>
  );
}

export default Card;
