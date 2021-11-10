import React from 'react';
import { Carousel } from 'react-bootstrap';

import bannerTransport1 from '../../../../images/bannerTransport/transport1.png'
import bannerTransport2 from '../../../../images/bannerTransport/transport2.png'
import bannerTransport3 from '../../../../images/bannerTransport/transport3.png'
import bannerTransport4 from '../../../../images/bannerTransport/transport4.png'

const BannerTransport = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={bannerTransport1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={bannerTransport2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={bannerTransport3}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={bannerTransport4}
                        alt="Fourth slide"
                    />
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default BannerTransport;