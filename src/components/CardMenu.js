import React from 'react'
import "../css/cardmenu.scss"
import {ReactComponent as Share} from "../img/s.1.svg"
import {ReactComponent as Chat} from "../img/s.2.svg"
import {ReactComponent as Notification} from "../img/notification.svg"
import {ReactComponent as Save} from "../img/s.3.svg"




function CardMenu() {
  return (
    <div className='cardMenu'>
            <div className="interactions">
                <Notification className='icon' />
                <Chat  className='icon' />
                <Share className='icon' />
            </div>
            <Save className="icon" />

            
    </div>
  )
}

export default CardMenu
