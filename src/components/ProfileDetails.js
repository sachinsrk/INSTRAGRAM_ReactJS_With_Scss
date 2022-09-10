import React, { useContext } from 'react'
import "../css/profiledetails.scss"
import ProfileAbout from './ProfileAbout';
import scLogo from "../img/scLogo.jpg"
import ProfileIcon from './ProfileIcon';
import Button from 'react-bootstrap/esm/Button';
import thoughtContext from '../context/thought/thoughtContext';
function ProfileDetails() {
  const context = useContext(thoughtContext)
  const { UserName, postCount, UserProfileUrl } = context
  return (
    <div>
      {/* <img className="ProfileImage" src={scLogo} /> */}
      <div className="ProfileDetailsWrapper">
        <div className='propImage'>
          <ProfileIcon
            iconSize="big"
            storyBorder={true}
            image={UserProfileUrl ? UserProfileUrl : scLogo}
          />
        </div>

        <div className="bloc">
          <div className="ProName">
            <span className="BtName">{UserName}</span>
            <Button className="BtFollow">Follow</Button>
            <Button className="BtPlus">+</Button>
          </div>
          <div className="ProfileStats">
            <div className="StatsBlock">
              <span className="StatsNumber">{postCount}</span>
              <span className="StatsLabel">posts</span>
            </div>
            <div className="StatsBlock">
              <span className="StatsNumber">55.3K</span>
              <span className="StatsLabel">followers</span>
            </div>
            <div className="StatsBlock">
              <span className="StatsNumber">332</span>
              <span className="StatsLabel">following</span>
            </div>
          </div>
          <ProfileAbout />
        </div>
      </div>
    </div>
  )
}

export default ProfileDetails
