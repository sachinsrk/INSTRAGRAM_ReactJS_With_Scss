import React from 'react'
import "../css/card.scss";
import CardMenu from './CardMenu';
import Comment from './Comment';
import Profile from './Profile'; 
import {ReactComponent as CardButton} from "../img/dot.svg"

function Card(props) {
    const{
        storyBorder,
        image,
        comments,
        likedByText,
        likedByNumber,
        hours,
    }=props;
  return (
    <div className='card'>
        <header>
            <Profile iconSize="medium" storyBorder={storyBorder} />
            <CardButton className='cardButton' height={16} width={16}/>
        </header>
        <img src={image} alt="card content" className="cardImage" />
        <CardMenu/>
        <div className="likedBy">
            <Profile iconSize="small" hideAccountName={true} />
            <span>
                Liked by <strong>{likedByText}</strong> and{" "}
                <strong>{likedByNumber} others</strong>
            </span>
        </div>
        <div className="comments">
            {comments.map((comment) =>{
                return(
                    <Comment 
                    key={comment.id}
                    accountName={comment.username}
                    comment={comment.text}
                    />
                )
            })}
        </div>
        <div className="timePosted">{hours} HOURS AGO</div>
        <div className="addComment">
            <div className="commentText">Add a comment...</div>
            <div className="postText">Post</div>
        </div>
    </div>
  )
}


export default Card
