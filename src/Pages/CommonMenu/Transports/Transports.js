import React, { useEffect, useState } from 'react';
import { Spinner, Table } from 'react-bootstrap';
import BannerTransport from './BannerTransport/BannerTransport';

const Transports = () => {

    const [transports, setTransports] = useState([]);
    useEffect(() => {
        fetch('https://secure-bayou-86822.herokuapp.com/transports')
            .then(res => res.json())
            .then(data => setTransports(data));
    }, [transports])

    return (
        <div>
            <BannerTransport></BannerTransport>


            <div className="container" style={{ marginTop: '20px' }}>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>Company</th>
                            <th>From</th>
                            <th>Destination</th>
                            <th>Departure</th>
                            <th>Arrival</th>
                            <th>Class</th>
                            <th>Type</th>
                            <th>Fare</th>
                        </tr>
                    </thead>
                    {
                        transports.length > 0 ?
                            transports.map(tr =>
                                <tbody>
                                    <tr>
                                        <td>{tr.company}</td>
                                        <td>{tr.from}</td>
                                        <td>{tr.destination}</td>
                                        <td>{tr.departure}</td>
                                        <td>{tr.arrival}</td>
                                        <td>{tr.class}</td>
                                        <td>{tr.type}</td>
                                        <td>TK. {tr.fare}</td>
                                    </tr>
                                </tbody>
                            )
                            :
                            <Spinner animation="border" variant="danger"></Spinner>

                    }

                </Table>
            </div >

        </div>
    );
};

export default Transports;