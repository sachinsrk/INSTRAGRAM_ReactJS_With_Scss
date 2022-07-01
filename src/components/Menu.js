import React from 'react'
import '../css/menu.scss'
import {ReactComponent as Home} from "../img/home.svg"
import {ReactComponent as New} from "../img/new.svg"
import {ReactComponent as Inbox} from "../img/chat.svg"
import {ReactComponent as Explore} from "../img/find.svg"
import {ReactComponent as Notification} from "../img/notification.svg"
import ProfileIcon from "./ProfileIcon.js"
import image from "../img/prop.jpg"


function Menu() {
  return (
    <div className='menu'>
      <Home className='icon'/>
      <Inbox  className='icon'/>
      <New className='icon'/>
      <Explore className='icon'/> 
      <Notification className='icon'/>
      <ProfileIcon iconSize="small" image={image}   />
    </div>
  )
}

export default Menu
