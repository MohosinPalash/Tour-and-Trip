import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import BannerHotel from './BannerHotel/BannerHotel';
import SingleHotel from './SingleHotel/SingleHotel';

const Hotels = () => {
    const [hotels, setHotels] = useState([]);

    useEffect(() => {
        fetch('https://secure-bayou-86822.herokuapp.com/hotels')
            .then(res => res.json())
            .then(data => setHotels(data));
    }, [hotels])

    return (
        <div>
            <BannerHotel></BannerHotel>
            {
                hotels.length > 0 ?
                    <div>
                        <div className="package-container">

                            {
                                hotels.map(hotel => <SingleHotel hotel={hotel}></SingleHotel>)
                            }
                        </div>

                    </div>
                    :
                    <Spinner animation="border" variant="danger"></Spinner>
            }
        </div>
    );
};

export default Hotels;