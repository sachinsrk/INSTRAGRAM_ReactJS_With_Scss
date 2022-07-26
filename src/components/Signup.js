import React, { useContext } from 'react'
import { Form, Button, Row, Col, Card } from 'react-bootstrap';
import '../css/signup.scss'
import { Link } from "react-router-dom"
import { db, auth } from "../config/db";
import { createUserWithEmailAndPassword, onAuthStateChanged, updateProfile } from '@firebase/auth';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import thoughtContext from '../context/thought/thoughtContext';


const Signup = () => {
    const context = useContext(thoughtContext)
    const {user, setUser} = context; 
    const navigate = useNavigate()
    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
// check user
    useEffect(()=>{
        if(user){
            navigate("/")
        }
    },[user])
// 
    useEffect(() => {
      const unsub =  onAuthStateChanged(auth, (authUser) => {
            if (authUser) {
                console.log(authUser)
                setUser(authUser);

           
            } else {
                setUser(null)
            }
        });

        return () => {
            unsub();
        }
       
    }, [user, username])
    const signUp = async(e) => {
        e.preventDefault();


       await createUserWithEmailAndPassword(auth, email, password)
            .then((authUser)=>{
                updateProfile(authUser.user, {
                    displayName: username
                })
                // navigate("/");
            })
            .catch((error) => {
                console.log(error)
                alert(error.message)
            })
    }
    return (
        <>

            <div className='App-header '>

                <Card className='card' >

                    <Card.Body>
                        <div className='container my-1 '>
                            <center>
                                <Card.Img variant="top" src='https://logodix.com/logo/790968.png' />
                                {/* <Card.Img variant="top" src='' /> */}

                            </center>
                        </div>
                        <Form>
                            <Form.Group as={Row} className="mb-3 text-black-50" controlId="formPlaintextEmail">
                                <Form.Label column   >
                                    UserName
                                </Form.Label>
                                <Col >
                                    <Form.Control type="text" placeholder="UserName" value={username} onChange={(e) => { setUsername(e.target.value) }} />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3 text-black-50" controlId="formPlaintextEmail">
                                <Form.Label column   >
                                    Email
                                </Form.Label>
                                <Col >
                                    <Form.Control type="email" placeholder="example@email.com" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-2 text-black-50" controlId="formPlaintextPassword">
                                <Form.Label column >
                                    Password
                                </Form.Label>
                                <Col >
                                    <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-2 text-black-50 my-4" >
                                <span>
                                    Click here for<Link className='nav-m' to='/login'>login</Link>
                                </span>
                            </Form.Group>
                        </Form>
                        <div className='container my-2 '>

                            <center>
                                <Button variant="danger" onClick={signUp}> Sign Up </Button>
                            </center>
                        </div>
                    </Card.Body>

                </Card>
            </div>

        </>
    )
}

export default Signup
