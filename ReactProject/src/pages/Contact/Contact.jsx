import React from 'react';
import './Contact.css';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';



function Contact() {

const [student,setStudent]= useState({name:'',email:'',password:''})
    const navigate= useNavigate();
    const handleSubmit=async (e)=>{
        e.preventDefault();
        console.log(student);
        const resp=await axios.post('http://localhost:8080/api/students',student);
        console.log(resp);
        if(resp.status == 201){
            toast.success("User Registered Successfully");
            navigate('/login')

        }else{
            toast.error("Error While registration");
        }
    }
 
  return (
    <div className='contact-page'>
        <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                <h1 className='text-center fw-semibold'>Welcome to Register Page</h1>
            </div>
        </header>

        <div className='container my-5 d-flex justify-content-center'>
            <Form onSubmit={handleSubmit} id='contact-form'>
                <Row className='mb-3'>
                    <Col>
                        <Form.Label>Name</Form.Label>
                        <Form.Control className='form-control' id='name' placeholder='Enter name' value={student.name}onChange={(e)=>setStudent({...student,name:e.target.value})} />
                    </Col>
            
                </Row>

                <Form.Group className='mb-3'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type='email'className="form-control"id="email"  placeholder='Enter email' value={student.email}onChange={(e)=>setStudent({...student,email:e.target.value})} required/>
                </Form.Group>

                <Form.Group className='mb-3'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password'className="form-control"id="password" required placeholder='**********' value={student.password}onChange={(e)=>setStudent({...student,password:e.target.value})} />
                </Form.Group>
                <Button variant="danger btn-lg" type='submit'>Submit</Button>
            </Form>
        </div>
    </div>
  )
}

export default Contact;