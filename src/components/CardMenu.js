import React, { useEffect, useState } from 'react'
import "../css/cardmenu.scss"
import { ReactComponent as Share } from "../img/s.1.svg"
import { ReactComponent as Chat } from "../img/s.2.svg"
import { ReactComponent as Notification } from "../img/notification.svg"
import { ReactComponent as Save } from "../img/s.3.svg"
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { db } from '../config/db'
  



function CardMenu() {
  const [isTrue, setIsTrue] = useState(false);
  useEffect(()=>{
    if(isTrue == true){
       
    }
  },[isTrue])
  return (
    <div className='cardMenu'>
      <div className="interactions">
      <FormControlLabel className='icon' 
        control={<Checkbox checked={isTrue} icon={<FavoriteBorder/>} 
                  checkedIcon={<Favorite  /> }
          name="checkedH"   onChange={e => {
            console.log(e.target.checked);
            setIsTrue(e.target.checked);
          }} />}
      />
        {/* <Notification className='icon' /> */}
        <Chat className='icon' fill='red' style={{marginLeft:"1em"}} />
        <Share className='icon' fill='red' />
      </div>
      <Save className="icon" fill='red' />


    </div>
  )
}

export default CardMenu
