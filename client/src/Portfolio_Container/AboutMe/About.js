import React from 'react';
import './About.css';
import { Container, Row, Col } from 'react-bootstrap';

function About(props) {
    const t = "<About Me>";
    return (
        <div className='about'>
            <div className='titleabout'>
                <h1><b><u>{t}</u></b></h1>
            </div>
            <Container>
                <Row>
                    <Col sm={4}>
                        <div className="container1">
                            <div className="cover-photo">
                                <img className="profileimg" src={require('D:/Portfolio/client/src/Images/Img1.jpg')} alt="mayuri" />
                            </div>
                            <div className="profile-name">Mayuri Jaigude</div>
                            <div className='card-title'>
                                Age    : 20<br />
                                Sex    : Female<br />
                                Mail ID: mayuri.jaigude19@vit.edu<br />
                                Address: Pune, Maharashtra, India<br />
                            </div>
                            <div className='card-text'>
                                HII I am currently pursuing B.Tech degree in Computer Science at
                                VIT, Pune. I am looking to leverage my experience building responsive and scalable
                                web apps to solve interesting problems that delight end-users.
                                <br />
                                In search of an internship or research opportunity that will allow me
                                to utilize my problem solving skills and attention to detail to further
                                develop my abilities.
                            </div>
                        </div>

                    </Col>

                    <Col sm={8}>
                        <h2>Skills</h2>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="card card-1">
                                        <h4>Web Developement</h4>
                                        <p>Creating, Building and Maintaining Websites and 
                                            web Applications .</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card card-2">
                                        <h4>Data Strutures & Algorithms </h4>
                                        <p>Solving problems and write efficient, optimized programs.</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card card-3">
                                        <h4>Programming</h4>
                                        <p>Programmer in differnt lanaguages including C, CPP , Java and Python .</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br></br>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="card card-4">
                                        <h4>OOP</h4>
                                        <p>Object-oriented programming (OOP) is  based on the concept of "objects",
                                         which can contain data and code .</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card card-5">
                                        <h4>DBMS</h4>
                                        <p>Database Management Systems used to store, retrieve and manipulate data by providing interface.</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card card-6">
                                        <h4>Operating System</h4>
                                        <p>Software that controls the operation of a computer and directs processing of programs</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>

            </Container>

        </div>
    );
}

export default About;