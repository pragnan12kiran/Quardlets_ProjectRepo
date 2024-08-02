import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';
import AboutUsSectionImg from '../../utils/images/about-us-section-img.jpg';
import ChooseSection from '../../components/ChooseSection/ChooseSection';




function About() {
  return (
    <div className='about-page'>
        <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                <h1 className='text-center fw-semibold'>About Us</h1>
                <p className='text-center w-75 mb-5'>Mindsprint is a firm that offers digital, enterprise IT, business process services, and cybersecurity solutions to global businesses. It was founded in 2001 and has offices in Singapore, Chennai, Bengaluru, New Jersey, Delaware, and London.</p>
            </div>
        </header>

        <div className='container my-5'>
            <div className="row">
                <div className='col-lg-6 d-flex flex-column justify-content-center mb-4 mb-lg-0'>
                    <h2 className='mb-4 mb-lg-5'>Work with us</h2>
                    <p>Our values pivot around people – They guide everything we do, shaping our interactions with our partners, colleagues, and clients. We are continuously building our brand’s character by being.We help businesses with solutions for their transformation journeys and technology innovations. With deep domain knowledge and experience of over three decades, Mindsprint is a breeding ground for innovators, technology experts, business strategists, as well as young, fresh minds who think and breathe customer-centricity. </p>
                    <p className='mb-4 mb-lg-5'>We are a trusted partner in cybersecurity and privacy, protecting digital assets with industry experts, evolved processes and controls, and cutting-edge security solutions.</p>
                    <Link to="/contact">
                        <button type='button' className='btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Contact Us</button>
                    </Link>
                </div>
                <div className='col-lg-6 d-flex justify-content-center'>
                    <img src={AboutUsSectionImg} className='img-fluid w-75' alt="" />
                </div>
            </div>
        </div>

       

       
    </div>
  )
}

export default About;