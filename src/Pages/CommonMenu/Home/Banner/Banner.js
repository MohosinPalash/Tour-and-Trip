import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import banner1 from '../../../../images/bannerHome/banner1.png'
import banner2 from '../../../../images/bannerHome/banner2.png'
import banner3 from '../../../../images/bannerHome/banner3.png'
import banner4 from '../../../../images/bannerHome/banner4.png'

const Banner = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner4}
                        alt="Fourth slide"
                    />
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;