import React, { useEffect, useState } from 'react';
import './Home.css'
import Banner from '../Banner/Banner';
import 'bootstrap/dist/css/bootstrap.min.css';
import SinglePackage from '../SinglePackage/SinglePackage';
import { Spinner } from 'react-bootstrap';

import bus from '../../../../images/basic/bus.jpg'
import ship from '../../../../images/basic/ship.jpg'
import air from '../../../../images/basic/air.png'
import { Link } from 'react-router-dom';
import SingleHotel from '../../Hotels/SingleHotel/SingleHotel';
const Home = () => {

    const [packages, setPackages] = useState([]);
    const [hotels, setHotels] = useState([]);

    useEffect(() => {
        fetch('https://secure-bayou-86822.herokuapp.com/packages')
            .then(res => res.json())
            .then(data => setPackages(data));
    }, [packages])

    useEffect(() => {
        fetch('https://secure-bayou-86822.herokuapp.com/hotels')
            .then(res => res.json())
            .then(data => setHotels(data));
    }, [hotels])

    const topThreeHotels = hotels.slice(0, 3);

    return (
        <>
            <Banner></Banner>
            {
                packages.length > 0 ?
                    <div>

                        <h2 className="heading">Available Packages</h2>
                        <div className="package-container">

                            {
                                packages.map(pkg => <SinglePackage pkg={pkg}></SinglePackage>)
                            }
                        </div>

                    </div>
                    :
                    <Spinner animation="border" variant="danger"></Spinner>
            }
            <h2 className="heading">Transports</h2>
            <p style={{ marginTop: '10px' }}>We are offering the best transports facilities across the countries.
                <br /> Safe and comfortable journey is our most priority.
                <br /> Both business and economy classes are available
            </p>
            <div className="transport-div">
                <div>

                    <img src={bus} alt="" />
                    <h4 className="service-title">BUS SERVICE</h4>
                    <p>We are making your journey more comfortable with the top class brand coaches.</p>
                </div>
                <div>

                    <img src={ship} alt="" />
                    <h4 className="service-title">CRUISE SERVICE</h4>
                    <p>We are making your journey more comfortable with the top class brand coaches.</p>
                </div>
                <div>

                    <img src={air} alt="" />
                    <h4 className="service-title">AIR SERVICE</h4>
                    <p>We are making your journey more comfortable with the top class brand coaches.</p>
                </div>
            </div>
            <Link to={`/transports`}><button className="place-order-button" style={{ width: '20%' }}><strong>SEE ROUTES</strong></button></Link>

            {
                topThreeHotels.length > 0 ?
                    <div>
                        <h2 className="heading">Luxurious Hotels</h2>
                        <p style={{ marginTop: '10px' }}>Staying at a beautiful place always makes the journey charming.
                            <br /> And we have all the five star hotels in our service.
                            <br /> We are always ready to ensure your comfort
                        </p>
                        <div className="package-container">

                            {
                                topThreeHotels.map(hotel => <SingleHotel hotel={hotel}></SingleHotel>)
                            }
                        </div>

                    </div>
                    :
                    <Spinner animation="border" variant="danger"></Spinner>
            }

        </>
    );
};

export default Home;