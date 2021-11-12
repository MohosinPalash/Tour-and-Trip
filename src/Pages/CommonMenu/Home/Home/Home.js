import React, { useEffect, useState } from 'react';
import './Home.css'
import Banner from '../Banner/Banner';
import 'bootstrap/dist/css/bootstrap.min.css';
import SinglePackage from '../SinglePackage/SinglePackage';
import { Spinner } from 'react-bootstrap';
const Home = () => {

    const [packages, setPackages] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/packages')
            .then(res => res.json())
            .then(data => setPackages(data));
    }, [packages])
    return (
        packages.length > 0 ?
            <div>
                <Banner></Banner>
                <h1 className="heading">OUR PACKAGES</h1>
                <div className="package-container">

                    {
                        packages.map(pkg => <SinglePackage pkg={pkg}></SinglePackage>)
                    }
                </div>

            </div>
            :
            <Spinner animation="border" variant="danger"></Spinner>
    );
};

export default Home;