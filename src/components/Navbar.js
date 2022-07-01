import React from 'react'
import '../css/Navbar.scss'
import searchIcon from '../img/search.jpg'
import logo from '../img/Instagram_logo.svg.png'
import Menu from './Menu'

function Navbar() {
  return (
    <>
      <div className="navigation">
        <div className="container">
            <img src={logo} alt="instragram logo" className="logo" />
            <div className="search">
                <img src={searchIcon} alt="search Icon" className="searchIcon" />
                <span className="searchText">Search</span>
            </div>
            <Menu/>
        </div>
      </div>
    </>
  )
}

export default Navbar
