import React, { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import logo from '../images/fff6.jpg'
import './Home.css';
import fakeData from '../../FakeData/FakeData';
import { Link } from 'react-router-dom';

const Home = () => {
    const places = fakeData;
    const [showPlace, setShowPlace] = useState(places[0]);

    return (
        <section id="home" className="text-white">
            <Container>
                <Row className="pt-5 pb-5 mb-5">
                    <Col lg={4} className="my-5 text-center text-lg-left">
                            <h1 className="placeName my-3">{showPlace.name}</h1>
                            <p className="text-justify">{showPlace.shortDesc}</p>
                            <Link to={"/destination/" + showPlace.name}>
                                <Button variant="warning">Booking ➜</Button>
                            </Link>
                    </Col>
                    <Col lg={8}>
                        <Row>
                            {
                                places.map(place =>
                                <Col className="placePhoto" xs={4} key={place.name}>
                                    <div onClick={() => setShowPlace(place)} className="mt-3 text-white text-center bg-transparent">
                                        <img src={place.photo} alt="Hotel Book" className="photo hover d-block" style={{cursor: 'pointer'}} />
                                        {place.name}
                                    </div>
                                </Col>)
                            }
                        </Row>
                    </Col>
                </Row>
                
                <Row>
                    <Col md={8}>
                        <h6 className="text-light text-left pt-5">Travel Guru Created by - <a href="https://www.facebook.com/MohammadShaheduzzamanShahed" target="_blank"><button className="btn btn-outline-success">Mohammad Shaheduzzaman Shahed</button></a></h6>
                    </Col>
                    <Col md={4}>

                    </Col>
                </Row>


                
            </Container>
        </section>
    );
};

export default Home;