import React, {  useState } from 'react'
import '../css/menu.scss';
// import thoughtContext from '../context/thought/thoughtContext';
import { ReactComponent as Home } from "../img/home.svg"
import { ReactComponent as New } from "../img/new.svg"
import { ReactComponent as Inbox } from "../img/chat.svg"
import { ReactComponent as Explore } from "../img/find.svg"
import { ReactComponent as Notification } from "../img/notification.svg"
import ProfileIcon from "./ProfileIcon.js"
import image from "../img/prop.jpg"
import AddPost from './AddPost'
// import Modal from 'react-modal';
// Model.setAppElement("#root"); 

function Menu() {
  const [modalShow, setModalShow] = useState(false);
  // const st = useContext(thoughtContext)

  return (
    <div className='menu'>
      <Home className='icon' />
      <Inbox className='icon' />
      <New className='icon' onClick={() => setModalShow(true)} />
      <AddPost show={modalShow} onHide={() => setModalShow(false)} />

      <Explore className='icon' />
      <Notification className='icon' />
      <ProfileIcon iconSize="small" image={image} />
    </div>
  )
}

export default Menu
