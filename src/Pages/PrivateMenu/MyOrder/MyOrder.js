import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../../contexts/useAuth';

const MyOrder = () => {
    const { user, logout } = useAuth();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`https://secure-bayou-86822.herokuapp.com/orders/${user.email}`)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [orders])

    //Delete order
    const handleDeleteOrder = id => {
        const proceed = window.confirm('Are you sure you want to cancel the order?');
        if (proceed) {
            const url = `https://secure-bayou-86822.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Order Cancelled Successfully!');
                        const remainingOrder = orders.filter(order => order._id != id)
                        setOrders(remainingOrder);
                    }
                })
        }
    }



    return (
        orders.length > 0 ?
            <div className="container">
                <h2 style={{ fontWeight: '600' }}>My Orders</h2>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Email Address</th>
                            <th>Contact No</th>
                            <th>Customer Name</th>
                            <th>Package Title</th>
                            <th>Fare</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {
                        orders.map((order, index) =>
                            <tbody>
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{order.email}</td>
                                    <td>{order.contact}</td>
                                    <td>{order.name}</td>
                                    <td>{order.title}</td>
                                    <td>{order.fare}</td>
                                    <td>{order.status}</td>
                                    {
                                        order.status === 'Pending' ?
                                            <td><button className="btn btn-danger" onClick={() => handleDeleteOrder(order._id)}>Cancel Order</button></td>
                                            :
                                            <td >Not Allowed</td>
                                    }

                                </tr>
                            </tbody>
                        )

                    }

                </Table>
            </div >
            :
            <p>No orders Found!</p>
    );
};

export default MyOrder;