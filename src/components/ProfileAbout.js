import React from 'react'
import "../css/profileabout.scss"
function ProfileAbout() {
  return (
    <div className="AboutWrapper">
      <h2 className="ProfileName">SRK | ReactJS</h2>
      <span className="ProfileCategory">Education</span>
      <span className="BioText">
        🌐All About FrontEnd Web-Development | 
        📒Resources/tips/tricks/tutorials | 
        👨‍💻Free source codes | 
        ⬇️Join Our Telegram Channel</span>
      <a className="BioLink" href="https://this">//click</a>
    </div>
  )
}

export default ProfileAbout
