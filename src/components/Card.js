import React from "react";
import "../css/card.scss";
import CardMenu from "./CardMenu";
import Comment from "./Comment";
import Profile from "./Profile";
import { ReactComponent as CardButton } from "../img/dot.svg";
import { useState } from "react";

function Card(props) {
  const {
    id,
    caption,
    username,
    storyBorder,
    image,
    comments,
    likedByText,
    likedByNumber,
    hours,
  } = props;
  const [comment, setComment] = useState()
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
      <div className="comments">{comments}</div>
      {/* <div className="comments">
      sir, the wordpress folder that you are sended me yesterday din't get downloaded because of file transfer error 
            {comments.map((comment) =>{
                return(
                    <Comment 
                    key={comment.id}
                    accountName={comment.username}
                    comment={comment.text}
                    />
                )
            })}
        </div> */}
      <div className="timePosted">{hours} HOURS AGO</div>
      <div className="addComment">
        <input type="text"
          className="commentText "
          placeholder="Add a comment..." value={comment} onChange={(e) => { e.preventDefault(); setComment(e.target.value) }}>

        </input>
        {comment ?
          <div className="postText" onClick={{}} style={{ color: '#0095f6' }}>Post</div> :
          <div className="postText">Post</div>
        }

      </div>
    </div>
  );
}

export default Card;
