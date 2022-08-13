import React from 'react'
import "../css/profilebutton.scss"
import { Button} from 'react-bootstrap';
function ProfileButton() {
  return (
    <div className="ButtonWrapper">
    <div className="ButtonRow">
      <Button className="Button">Edit Profile</Button>
      <Button className="Button">Promotions</Button>
    </div>
  </div>
  )
}


export default ProfileButton

