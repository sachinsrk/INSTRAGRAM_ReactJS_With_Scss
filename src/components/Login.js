import React,{useContext} from 'react'
import { Form, Button, Row, Col, Card } from 'react-bootstrap';
import thoughtContext from '../context/thought/thoughtContext';
import { Link } from "react-router-dom"
import '../css/login.scss'

const Login = () => {
    const a = useContext(thoughtContext)
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
                                    Click here for<Link className='nav-m' to='/singup'>signup</Link>
                                </span>
                            </Form.Group>
                            
                        </Form>
                        <div className='container my-2'>
                            <center>
                            <Button variant="danger"> Sign In </Button>
                            </center>
                        </div>
                    </Card.Body>

                </Card>
            </div>

        </>
    )
}

export default Login
