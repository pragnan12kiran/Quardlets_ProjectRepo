import React from 'react';
import './Blog.css';
import './Login.js'
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';


import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';



function Blog() {
    const [student,setStudent]= useState({name:'',email:'',password:''})
    const navigate= useNavigate();
    const handleSubmit=async (e)=>{
        e.preventDefault();
        console.log(student);
        const resp=await axios.post('http://localhost:8080/api/students/login',student);
        // console.log(resp.data);
        if(resp.status == 200){
            toast("User LoggedIn");

            localStorage.setItem('studentId',resp.data);
                navigate('/courses')
                //redirect user to the dashboard page
            if(resp.data.role==1){
                //redirect to admin component
            }else{
                //redirect to user dashboard
            }
        }else{
            toast.error("Error While registration");
        }
    }
    console.log(localStorage.getItem('studentId'))
  return (
    <div className='blog-page'>
        <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                <h1 className='text-center fw-semibold'><i>Login</i></h1>
                
            </div>

            
        </header>

        

        <div className='col-md-6 col-lg-4'>
        <Link to="/blog" className='text-decoration-none'>
        </Link>
        <br></br>
        <div className="className='container my-5 d-flex justify-content-center">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label for="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="name@example.com"
                    value={student.email} onChange={(e)=>setStudent({...student,email:e.target.value})}/>
                </div>
                <br></br>
                <div className="mb-3">
                    <label for="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="**********"
                    value={student.password} onChange={(e)=>setStudent({...student,password:e.target.value})}/>
                </div>
                <br></br>
                <button className="btn btn-primary mt-3" type="submit">Login</button>
            </form>
        </div>

        </div>

    </div>
    
  )
}

export default Blog;