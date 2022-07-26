import React,{useContext, useEffect} from 'react'
import { Form, Button, Row, Col, Card } from 'react-bootstrap';
import thoughtContext from '../context/thought/thoughtContext';
import { db, auth } from '../config/db';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom"
import '../css/login.scss'
import { useState } from 'react';

const Login = () => {
    const [email,setEmail]= useState()
    const [password, setPassword]= useState()
      const navigate = useNavigate()
    const context = useContext(thoughtContext)
    const {user, setUser} = context; 
    useEffect(()=>{
        if(user){
            
            navigate("/")
        }
    },[user])
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
         
      }, [user])
    const logIn = (e) =>{
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
         
            setUser(userCredential.user);
         
        })
        .catch((error) => {
          const errorMessage = error.message;
          console.log(errorMessage)
        });
    }
    return (
        <>
            <div className='App-header '>
                <Card className='card' >

                    <Card.Body>
                        <div className='container my-1 '>
                            <center>
                            <Card.Img variant="top" src='https://logodix.com/logo/790968.png'  />
                            {/* <Card.Img variant="top" src=''  /> */}
                                {/* {a.name} */}
                            </center>
                        </div>
                        <Form>
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
                                    Click here for<Link className='nav-m' to='/singup'>signup</Link>
                                </span>
                            </Form.Group>
                            
                        </Form>
                        <div className='container my-2'>
                            <center>
                            <Button variant="danger" onClick={logIn}> Log In </Button>
                            </center>
                        </div>
                    </Card.Body>

                </Card>
            </div>

        </>
    )
}

export default Login
