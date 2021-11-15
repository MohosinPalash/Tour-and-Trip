import React, { useEffect, useState } from 'react';
import { Spinner, Table } from 'react-bootstrap';

const ManageOrder = () => {

    const [orders, setOrders] = useState([]);
    const [updatedOrder, setUpdatedOrder] = useState({});
    useEffect(() => {
        fetch('https://secure-bayou-86822.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [orders])


    const handleActionUpdate = (id, msg) => {



        const url = `https://secure-bayou-86822.herokuapp.com/orders/${id}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setUpdatedOrder(data));

        updatedOrder.status = msg;
        console.log(updatedOrder);

        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedOrder)
        })
            .then(res => res.json())
            .then(data => console.log(data));

    }



    return (
        orders.length > 0 ?
            <div className="container">
                <h1>this is manage order</h1>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Email Address</th>
                            <th>Contact No</th>
                            <th>Customer Name</th>
                            <th>Package Title</th>
                            <th>Fare</th>
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
                                    {
                                        order.status === 'Pending' ?
                                            <td ><button className="btn btn-primary" onClick={() => handleActionUpdate(order._id, 'Confirmed')}>Confirm</button>  <button className="btn btn-danger" onClick={() => handleActionUpdate(order._id, 'Cancelled')} >Cancel</button></td>
                                            :
                                            <td >{order.status}</td>
                                    }

                                </tr>
                            </tbody>
                        )

                    }

                </Table>
            </div >
            :
            <Spinner animation="border" variant="danger"></Spinner>
    );
};

export default ManageOrder;