import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../contexts/useAuth';

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
                }
            })
    };

    return (
        <div className="add-service">
            <h1>Place Order</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" defaultValue={packages.title} {...register("title", { required: true, maxLength: 50 })} />
                <input type="email" defaultValue={user.email} {...register("email", { required: true, maxLength: 100 })} />
                <input type="text" defaultValue={user.displayName} {...register("name", { required: true, maxLength: 100 })} />
                <input type="number" defaultValue={packages.fare}{...register("fare", { required: true })} placeholder="Fare" />
                <input type="text" {...register("address", { required: true, maxLength: 150 })} placeholder="Address" />
                <input type="number" {...register("contact", { required: true })} placeholder="Contact No" />
                <input type="submit" value="PLACE ORDER" />
            </form>
        </div>
    );
};

export default PlaceOrder;