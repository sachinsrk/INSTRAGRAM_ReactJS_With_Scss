import React, { useContext, useEffect, useState } from 'react'
import '../css/menu.scss';
import thoughtContext from '../context/thought/thoughtContext';
import { ReactComponent as Home } from "../img/home.svg"
import { ReactComponent as New } from "../img/new.svg"
import { ReactComponent as Inbox } from "../img/chat.svg"
import { ReactComponent as Explore } from "../img/find.svg"
import { ReactComponent as Notification } from "../img/notification.svg"
import ProfileIcon from "./ProfileIcon.js"
import image from "../img/prop.jpg"
import AddPost from './AddPost'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  UncontrolledDropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
} from 'reactstrap';
import { auth } from '../config/db';
import { reload, signOut } from 'firebase/auth';


function Menu() {

  const location = useLocation();
const navigate = useNavigate();
  const [modalShow, setModalShow] = useState(false);
  const context = useContext(thoughtContext)
  const { user } = context

  const singout = async(e) =>{
    e.preventDefault();
    await signOut(auth)
    navigate("/login")
  }
  return (
    <>
      {user?
        <div className='menu'>
          <Home className='icon' />
          <Inbox className='icon' />
          <New className='icon' onClick={() => setModalShow(true)} />
          <AddPost show={modalShow} onHide={() => setModalShow(false)} />

          <Explore className='icon' />
          <Notification className='icon' />
          <UncontrolledDropdown >
            <DropdownToggle color='light'>
              <ProfileIcon iconSize="small" image={image} />
            </DropdownToggle>

            <DropdownMenu>
              <DropdownItem onClick={singout}>
                Logout
              </DropdownItem>

            </DropdownMenu>
          </UncontrolledDropdown>
        </div>
     :
     <Link to={location.pathname=='/login'?'/singup':'/login'}>
     <button className='btn btn-danger'>
      {location.pathname=='/login'?'Sign Up':'Login'}
     </button>
     </Link>
     }
    </>
  )
}

export default Menu
