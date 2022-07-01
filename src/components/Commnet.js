import React from 'react'
import "../css/comment.scss"


function Commnet(props) {
    const {accountName, comment} = props;
  return (
    <div className='commentContainer'>
      <div className="accountName">{accountName}</div>
      <div className="comment">{comment}</div>
    </div>
  )
}

export default Commnet
