import React, { useState } from 'react';
import './Profile.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Typewriter from 'typewriter-effect';
import About from '../AboutMe/About';
import Contact from '../Contact/Contact';

export default function Profile() {

    const [state] = useState({
        title: "Hello Everyone..",
        title2: "I'm Mayuri Jaigude",
        title3: "Computer Engineering Student",

    });

    return (
        <div>
            <div className='profile'>
                <Container>
                    <Row>
                        <Col sm={7}>
                            <div className='my-details'>
                                <h2>
                                    <div className='title'>
                                        {state.title}
                                    </div>
                                    <div className='title2'>
                                        {state.title2}
                                    </div>
                                    <div className='title3'>
                                        {state.title3}
                                    </div>
                                </h2>
                            </div>

                            <div className="details-text">
                                <Typewriter
                                    options={{
                                        autoStart: true,
                                        loop: true,
                                        delay: 40,
                                        strings: [
                                            "Full Stack Web Developer",
                                            "C, C++ Programmer",
                                            "Tech Enthusiast"],

                                    }} />
                            </div>
                            <div className='profile-option'>

                                <a href='MAYURI_Resume.pdf' download='Mayuri_resume.pdf'>
                                    <Button variant="warning">Get Resume</Button>{' '}
                                </a>

                            </div>

                            <div className='social-media'>
                                <a href='https://www.facebook.com/mayuri.jaigude'>
                                    <i className='fa fa-facebook fa-2x'  ></i>
                                </a>
                                <a href='https://github.com/Mayuri-J'>
                                    <i className='fa fa-github fa-2x'></i>
                                </a>
                                <a href='https://www.instagram.com/_mayuri_j9696_/'>
                                    <i className='fa fa-instagram fa-2x'></i>
                                </a>
                                <a href='https://www.linkedin.com/in/mayuri-jaigude/'>
                                    <i className="fa fa-linkedin fa-2x" ></i>
                                </a>
                            </div>
                        </Col>
                        <Col sm={5}>
                            <img src={require('D:/Portfolio/client/src/Images/IMG.jpg')} alt="mayuri" width="500" height="500" />
                        </Col>
                    </Row>
                </Container>
            </div>
            <About />
            <Contact />
        </div>
    )
}