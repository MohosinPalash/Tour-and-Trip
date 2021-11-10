import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import bannerHotel1 from '../../../../images/bannerHotels/hotel1.png'
import bannerHotel2 from '../../../../images/bannerHotels/hotel2.png'
import bannerHotel3 from '../../../../images/bannerHotels/hotel3.png'
import bannerHotel4 from '../../../../images/bannerHotels/hotel4.png'
const BannerHotel = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={bannerHotel1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={bannerHotel2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={bannerHotel3}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={bannerHotel4}
                        alt="Fourth slide"
                    />
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default BannerHotel;