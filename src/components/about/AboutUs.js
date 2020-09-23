import React from 'react';
import { Button, Jumbotron } from 'react-bootstrap';

const AboutUs = () => {
    return (
            <Jumbotron>
                <h1>Hello, Travelar </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam tenetur praesentium qui magnam nisi, placeat facere amet, itaque iste possimus repellendus incidunt tempore quis delectus dolore! Tenetur facilis at dolore.
                </p>
                <p>
                    <Button variant="warning">Learn more</Button>
                </p>
            </Jumbotron>
    );
};

export default AboutUs;