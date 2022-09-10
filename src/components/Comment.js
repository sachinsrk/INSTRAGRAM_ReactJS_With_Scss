import "../css/comment.scss";
import Profile from "./Profile";

function Comment(props) {

  const { accountName, comment } = props;

  return (
    <div className='commentContainer'>
      <Profile iconSize="small" username={accountName} hideAccountName={true} />
      <div className="accountName">{accountName}</div>
      <div className="comment">{comment}</div>
    </div>
  )
}

export default Comment;
