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
import { auth } from '../config/db';
import { reload, signOut } from 'firebase/auth';
import NavDropdown from 'react-bootstrap/NavDropdown';


function Menu() {

  const location = useLocation();
  const navigate = useNavigate();
  const [modalShow, setModalShow] = useState(false);
  const context = useContext(thoughtContext)
  const { user } = context

  const singout = async (e) => {
    e.preventDefault();
    await signOut(auth)
    navigate("/login")
  }
  return (
    <>
      {user ?
        <div className='menu'>
          <Home className='icon' />
          <Inbox className='icon' />
          <New className='icon' onClick={() => setModalShow(true)} />
          <AddPost open={modalShow} onClose={() => setModalShow(false)} />

          <Explore className='icon' />
          <Notification className='icon' />
          <NavDropdown
            id="nav-dropdown"
            title={<ProfileIcon iconSize="small" image={image} />}
          >
            <NavDropdown.Item onClick={()=>navigate('/profile')}>
              Profile
            </NavDropdown.Item>
            <NavDropdown.Item onClick={singout}>
              Logout
            </NavDropdown.Item>

          </NavDropdown>
        </div>
        :
        <Link to={location.pathname == '/login' ? '/singup' : '/login'}>
          <button className='btn btn-danger'>
            {location.pathname == '/login' ? 'Sign Up' : 'Login'}
          </button>
        </Link>
      }
    </>
  )
}

export default Menu
