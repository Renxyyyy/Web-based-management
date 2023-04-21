import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import React from 'react'
import { useState } from 'react';
import { Button, Col, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase.config';
import 'react-toastify/dist/ReactToastify.css';
import './Form.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    //Signing up user
    const handleLogin = async () => {
                await signInWithEmailAndPassword(auth, email, password).then(() => {
                    alert('Successfully logged in')
                    navigate('/')
                }).catch((err) => {
                    alert(err.message)
                })

       
    }

  return (
 <div className='Form'>
    <Col className="d-flex justify-content-center align-items-center pt-5">
        <Form className='newform text-center'>
            <p className='form_text'>User Login</p>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" placeholder="Enter your email address..." onChange={(e) => setEmail(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter your password..." onChange={(e) => setPassword(e.target.value)}/>
            </Form.Group>
        
            <div className="d-grid gap-2 mt-5 mb-2">
            <Button variant="primary" size="lg" className='newbtn' onClick={handleLogin}>
                Login
            </Button>
            </div>
            <small className='text-white'>Dont have an account? <span onClick={() => navigate('/sign-up')} style={{cursor:"pointer"}}>Signup</span></small>
        </Form>
      </Col>
 </div>
  )
}

export default Login;