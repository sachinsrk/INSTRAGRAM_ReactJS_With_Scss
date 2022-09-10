import React, { useContext } from 'react'
import { Form, Button, Row, Col, Card, Image } from 'react-bootstrap';
import '../css/signup.scss'
import { Link } from "react-router-dom"
import { db, auth, storage } from "../config/db";
import { createUserWithEmailAndPassword, onAuthStateChanged, updateProfile } from '@firebase/auth';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import thoughtContext from '../context/thought/thoughtContext';
import ProImage from "../img/add-photo.png"
import { ref, uploadBytes, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { addDoc, collection } from 'firebase/firestore';



const Signup = () => {
    const context = useContext(thoughtContext)
    const { user, setUser } = context;
    const navigate = useNavigate()
    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [image, setImage] = useState(null);
    const [tempUrl, setTempURL] = useState()

    // image change
    const handleChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
            setTempURL(URL.createObjectURL(e.target.files[0]))
        }
    }
    // check user
    useEffect(() => {
        if (user) {
            navigate("/")
        }
    }, [user])
    // 
    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (authUser) => {
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
    const signUp = async (e) => {
        e.preventDefault();

        const storageRef = ref(storage, `images/${image.name}`);
        const uploadTask = uploadBytesResumable(storageRef, image)
        // upload image 
        uploadTask.on('state_changed',
            (snapshot) => { },
            (error) => {
                switch (error.code) {
                    case 'storage/unauthorized':
                        alert("Unauthorize Access")
                        break;
                    case 'storage/canceled':
                        alert("User Cancelled Upload")
                        break;
                    case 'storage/unknown':
                        alert(" Unknown error occurred, inspect error.serverResponse")
                        break;
                }
            },
            () => {
                // download and assign post 
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    console.log('File available at', downloadURL);
                    createUserWithEmailAndPassword(auth, email, password)
                        .then((authUser) => {
                            updateProfile(authUser.user, {
                                displayName: username
                            })
                            const data = {
                                displayName: username,
                                gmailID: email,
                                password: password,
                                photoURL: downloadURL
                            }
                            const rf = collection(db, "users")
                            // add post on collection
                            addDoc(rf, data).then(function () {
                                console.log(" created user");
                                navigate('/')
                            });

                        })
                        .catch((error) => {
                            console.log(error)
                            alert(error.message)
                        })
                });
            }
        );



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

                                <div className='profile-image'>
                                    {tempUrl ?
                                        <Form.Label for="file" id="this" ><Image className='img' src={tempUrl} /></Form.Label>
                                        :
                                        <Form.Label for="file" id="this" class="lab"><Image className='img' src={ProImage} /></Form.Label>
                                    }
                                    <Form.Control type="file" onChange={handleChange} id="file" hidden />
                                </div>
                            </Form.Group>
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
