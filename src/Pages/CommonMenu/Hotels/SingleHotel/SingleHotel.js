import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './SingleHotel.css'

const SingleHotel = (props) => {
    const { _id, name, location, fare, cover } = props.hotel;
    return (
        <Col>
            <Card className="package-div">
                <Card.Img variant="top" className="" src={cover} />
                <Card.Body>
                    <Card.Title className="single-package-title"><strong>{name}</strong></Card.Title>
                    <Card.Text >{location}</Card.Text>
                    <Card.Text><strong>Fare: TK. {fare}</strong></Card.Text>
                </Card.Body>
                {/* <Link to={`/placeOrder`}><button className="place-order-button"><strong>PLACE ORDER</strong></button></Link> */}
                <Link to={`/placeOrder/${_id}`}><button className="place-order-button"><strong>BOOK NOW</strong></button></Link>
            </Card>
        </Col>
    );
};

export default SingleHotel;