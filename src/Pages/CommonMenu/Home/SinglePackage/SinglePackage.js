import React from 'react';
import './SinglePackage.css'
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SinglePackage = (props) => {
    const { _id, title, description, fare, dp, dd, nn } = props.pkg;
    return (
        <Col>
            <Card className="package-div">
                <Card.Img variant="top" className="" src={dp} />
                <Card.Body>
                    <Card.Title className="package-title"><strong>{title}</strong></Card.Title>
                    <Card.Text className="duration"><strong>{dd} Days/{nn} Nights</strong></Card.Text>
                    <Card.Text className="package-intro">{description}</Card.Text>
                    <Card.Text><strong>Charge: TK. {fare}</strong></Card.Text>
                </Card.Body>
                <Link to={`/placeOrder`}><button className="place-order-button"><strong>PLACE ORDER</strong></button></Link>
                {/* <Link to={`/placeOrder/${_id}`}><button className="place-order-button">See Details</button></Link> */}
            </Card>
        </Col>
    );
};

export default SinglePackage;