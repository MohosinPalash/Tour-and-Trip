import React, { useEffect, useState } from 'react';
import { Spinner, Table } from 'react-bootstrap';

const ManageOrder = () => {

    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [orders])


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
                                    <td>Confirm Cancel</td>
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