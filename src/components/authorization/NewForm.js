import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import React from 'react'
import { useState } from 'react';
import { Button, Col, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase.config';
import 'react-toastify/dist/ReactToastify.css';
import './Form.css';

const NewForm = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    //Signing up user
    const handleSignup = async () => {
        if(password !== confirmPassword) {
           return alert('Passwords do not match')
        } 

        try{
           alert('Successfully created account')
                await createUserWithEmailAndPassword(auth, email, password);
                updateProfile(auth.currentUser, {displayName: fullName});
                navigate('/')

        }catch(error) {
         alert(error.message)
        }
    }
  return (
    <div className='Form'>
        <Col className="d-flex justify-content-center align-items-center pt-5">
        <Form className='newform text-center'>
        <p className='form_text'>Sign up Now!</p>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Full Name</Form.Label>
      <Form.Control type="text" placeholder="Enter your full name..." onChange={(e) => setFullName(e.target.value)}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email Address</Form.Label>
      <Form.Control type="email" placeholder="Enter your email address..." onChange={(e) => setEmail(e.target.value)}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Enter your password..." onChange={(e) => setPassword(e.target.value)}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Confirm Password</Form.Label>
      <Form.Control type="password" placeholder="Confirm your password..." onChange={(e) => setConfirmPassword(e.target.value)}/>
    </Form.Group>
    <div className="d-grid gap-2 mt-5 mb-2">
      <Button variant="primary" size="lg" className='newbtn' onClick={handleSignup}>
        Sign up
      </Button>
    </div>
    <small className='text-white'>Already have an account? <span onClick={() => navigate('/login')} style={{cursor:"pointer"}}>Login</span></small>
  </Form>
        </Col>
        </div>
  )
}

export default NewForm