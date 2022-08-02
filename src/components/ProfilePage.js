import React, { useContext, useEffect } from 'react'
import image from "../img/prop.jpg";
import thoughtContext from '../context/thought/thoughtContext';
import { Link, useNavigate } from "react-router-dom"
import "../css/profilepage.scss"
import ProfileIcon from './ProfileIcon';
// import ProfilePageDetail from './ProfilePageDetail';
import { Form, Button, Row, Col, Card } from 'react-bootstrap';


const ProfilePage = () => {
    const context = useContext(thoughtContext);
    const navigate = useNavigate()
    const iconSize = 'big'
    const storyBorder = true
    const { user , UserName} = context
    useEffect(() => {
        if (!user) {
            navigate("/login")
        }
    }, [user])
    return (
        <>
            <header>
                
                <div className="container">

                    <div className="profilep">

                  
                            <div className="profile-image">
                            <ProfileIcon
                                iconSize={iconSize}
                                storyBorder={storyBorder}
                                image={image}
                            />
                            </div>
                      

                        <div className="profile-user-settings">

                            <h1 className="profile-user-name">{UserName}</h1>

                            <Button className="profile-edit-btn">Edit Profile</Button>

                            <Button className="profile-settings-btn" aria-label="profile settings">Edit</Button>

                        </div>

                        <div className="profile-stats">

                            <ul>
                                <li><span className="profile-stat-count">164</span> posts</li>
                                <li><span className="profile-stat-count">188</span> followers</li>
                                <li><span className="profile-stat-count">206</span> following</li>
                            </ul>

                        </div>

                        <div className="profile-bio">

                            <p><span className="profile-real-name">Jane Doe</span> Lorem ipsum dolor sit, amet consectetur adipisicing elit 📷✈️🏕️</p>

                        </div>  

                    </div>


                </div>

            </header>
{/* change */}
            <main>

                <div className="container">

                 


                </div>
              

            </main>
           
        </>
    )
}

export default ProfilePage
