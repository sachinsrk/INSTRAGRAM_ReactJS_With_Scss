import React from 'react'
import '../css/Navbar.scss'
import {ReactComponent as Search} from "../img/s.4.svg"
import logo from '../img/Instagram_logo.svg.png'
import Menu from './Menu'

function Navbar() {
  return (
    <>
      <div className="navigation">
        <div className="container">
            <img src={logo} alt="instragram logo" className="logo" />
            <div className="search">
                <Search  className="searchIcon" />
                <span className="searchText">Search</span>
            </div>
            <Menu/>
        </div>
      </div>
    </>
  )
}

export default Navbar
