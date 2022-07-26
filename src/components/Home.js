import React, { useContext } from 'react'
import Cards from './Cards'
import Sidebar from './Sidebar'
import '../css/home.scss'
import { useNavigate } from 'react-router-dom'
import thoughtContext from '../context/thought/thoughtContext';
import { useEffect } from 'react'

export default function Home() {
    const navigate = useNavigate();
    const context = useContext(thoughtContext)
    const {user} = context; 
    useEffect(()=>{
        if(user){
           
            navigate("/")
        }
        else{
           
            navigate("/login")
        }
    },[user])
 
  
    return (
        <>
            <main>

                <div className="container">
                    <Cards />
                    <Sidebar />
                </div>
            </main>
        </>
    )
}
