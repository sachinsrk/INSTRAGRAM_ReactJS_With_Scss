import React from 'react'
import "../css/cardmenu.scss"
import {ReactComponent as Share} from "../img/share.svg"
import {ReactComponent as Chat} from "../img/comment.svg"
import {ReactComponent as Notification} from "../img/notification.svg"
import Save from "../img/save-instagram.png"




function CardMenu() {
  return (
    <div className='cardMenu'>
            <div className="interactions">
                <Notification className='icon' />
                <Chat  className='icon' />
                <Share className='icon' />
            </div>
            <img src={Save} alt="save" className="icon" />
    </div>
  )
}

export default CardMenu
