import React, { useContext, useEffect } from 'react'
import image from "../img/prop.jpg";
import thoughtContext from '../context/thought/thoughtContext';
import { Link, useNavigate } from "react-router-dom"
import "../css/profilepage.scss"
import { Form, Button, Row, Col, Card } from 'react-bootstrap';
import ProfileDetails from './ProfileDetails';
import ProfileButton from './ProfileButton';
import ProfileHighLights from './ProfileHighLights';
import ProfileTabs from './ProfileTabs';
import ProfileTabsContent from './ProfileTabsContent';



const ProfilePage = () => {
    const context = useContext(thoughtContext);
    const navigate = useNavigate()
    const { user, UserName } = context
    useEffect(() => {
        if (!user) {
            navigate("/login")
        }else{
            navigate("/profile")
        }
    }, [user])

    return (
        <div>
            <div className="ProfileWrapper">

                <ProfileDetails />
               
                {/* <ProfileButton /> */}
                <ProfileHighLights />
                    
                <ProfileTabs/>
                <ProfileTabsContent/> 
               
            </div>
        </div>
    )
}

export default ProfilePage
