import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../contexts/useAuth';
import './PlaceOrder.css'

import b1 from '../../../images/demo/bbb/b1.png'
import a1 from '../../../images/demo/aaa/a1.png'

import b2 from '../../../images/demo/bbb/b1.png'
import b3 from '../../../images/demo/bbb/b1.png'

const PlaceOrder = () => {
    const { user, logout } = useAuth();
    const { packageId } = useParams();
    const [packages, setPackages] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/packages/${packageId}`)
            .then(res => res.json())
            .then(data => setPackages(data));

    }, [])

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        data.status = 'Pending';
        data.pkgID = packageId;
        console.log('data', data);
        axios.post('http://localhost:5000/orders', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Your Order is placed Successfully!');
                    reset();
                    document.getElementById('confirm-msg').style.display = "block";
                }
            })
    };

    return (
        <>
            <img src={a1} className="banner" alt="" />
            <div className="banner-grid">
                <div>
                    <div className="place-order">

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input type="text" defaultValue={packages.title} {...register("title", { required: true, maxLength: 50 })} />
                            <input type="email" defaultValue={user.email} {...register("email", { required: true, maxLength: 100 })} />
                            <input type="text" defaultValue={user.displayName} {...register("name", { required: true, maxLength: 100 })} />
                            <input type="number" defaultValue={packages.fare}{...register("fare", { required: true })} placeholder="Fare" />
                            <input type="text" {...register("address", { required: true, maxLength: 150 })} placeholder="Address" />
                            <input type="number" {...register("contact", { required: true })} placeholder="Contact No" />
                            <input type="submit" className="submit-button" value="PLACE ORDER" />
                            <p id="confirm-msg" style={{ color: 'green', display: 'none' }}>Your Order is placed successfully!
                                <Link to={'/home'}><strong>Go to home</strong></Link>
                            </p>
                        </form>

                    </div>
                </div>
                <div className="login-info">
                    <img src={b1} />

                </div>
            </div>
        </>

    );
};

export default PlaceOrder;