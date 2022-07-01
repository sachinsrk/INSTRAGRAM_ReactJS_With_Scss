import React from 'react'
import { Form, Button, Row, Col, Card } from 'react-bootstrap';
import '../css/signup.scss'
import { Link } from "react-router-dom"
const Signup = () => {
    return (
        <>

            <div className='App-header '>

                <Card className='card' >

                    <Card.Body>
                        <div className='container my-1 '>
                            <center>
                                <Card.Img variant="top" src='https://logodix.com/logo/790968.png'  />
                                {/* <Card.Img variant="top" src='' /> */}

                            </center>
                        </div>
                        <Form>
                            <Form.Group as={Row} className="mb-3 text-black-50" controlId="formPlaintextEmail">
                                <Form.Label column   >
                                    UserName
                                </Form.Label>
                                <Col >
                                    <Form.Control type="text" placeholder="UserName" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3 text-black-50" controlId="formPlaintextEmail">
                                <Form.Label column   >
                                    Email
                                </Form.Label>
                                <Col >
                                    <Form.Control type="email" placeholder="example@email.com" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-2 text-black-50" controlId="formPlaintextPassword">
                                <Form.Label column >
                                    Password
                                </Form.Label>
                                <Col >
                                    <Form.Control type="password" placeholder="Password" />
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
                                <Button variant="danger"> Sign Up </Button>
                            </center>
                        </div>
                    </Card.Body>

                </Card>
            </div>

        </>
    )
}

export default Signup
