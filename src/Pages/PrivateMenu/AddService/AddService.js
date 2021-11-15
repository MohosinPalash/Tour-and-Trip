import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css'

import b2 from '../../../images/demo/bbb/b2.png'
import b3 from '../../../images/demo/bbb/b5.png'
import b4 from '../../../images/demo/bbb/b4.png'

import a2 from '../../../images/demo/aaa/a2.png'
import a3 from '../../../images/demo/aaa/a3.png'
import a4 from '../../../images/demo/aaa/a4.png'

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const { register: register2, handleSubmit: handleSubmit2, reset: reset2 } = useForm();
    const { register: register3, handleSubmit: handleSubmit3, reset: reset3 } = useForm();
    const onSubmitPackage = data => {
        console.log(data);
        axios.post('https://secure-bayou-86822.herokuapp.com/packages', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Package Added Successfully!');
                    reset();
                }
            })
    };
    const onSubmitHotel = data => {
        console.log(data);
        axios.post('https://secure-bayou-86822.herokuapp.com/hotels', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Hotel Added Successfully!');
                    reset2();
                }
            })
    };
    const onSubmitTransport = data => {
        console.log(data);
        axios.post('https://secure-bayou-86822.herokuapp.com/transports', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Transport Added Successfully!');
                    reset3();
                }
            })
    };
    return (
        <>
            {/* NEW PACKAGES */}
            <img src={a2} className="banner" alt="" />
            <div className="banner-grid">
                <div>
                    <div className="new-package">
                        <h2 className="package-title">ADD NEW PACKAGE</h2>
                        <form onSubmit={handleSubmit(onSubmitPackage)}>

                            <input type="text" {...register("title", { required: true, maxLength: 20 })} placeholder="Package Name" />
                            <textarea type="text" {...register("description", { required: true, maxLength: 200 })} placeholder="Details about the package" />
                            <input type="number" {...register("fare", { required: true })} placeholder="Fare" />
                            <input type="url" {...register("dp", { required: true })} placeholder="Image URL" />
                            <input type="number" {...register("dd", { required: true })} placeholder="Number of Days" />
                            <input type="number" {...register("nn", { required: true })} placeholder="Number of Nights" />

                            <input type="submit" value="ADD NEW PACKAGE" />
                        </form>
                    </div>
                </div>
                <div className="login-info">
                    <img src={b3} />

                </div>
            </div>

            {/* NEW HOTEL */}
            <img src={a3} className="banner" alt="" />
            <div className="banner-grid">
                <div className="login-info">
                    <img src={b2} />
                </div>
                <div>
                    <div className="new-hotel">
                        <h2 className="hotel-title">ADD NEW HOTEL</h2>
                        <form onSubmit={handleSubmit2(onSubmitHotel)}>

                            <input type="text" {...register2("name", { required: true, maxLength: 30 })} placeholder="Hotel Name" />
                            <input type="text" {...register2("location", { required: true, maxLength: 100 })} placeholder="Address (Location)" />
                            <input type="number" {...register2("fare", { required: true })} placeholder="Fare (Taka)" />
                            <input type="url" {...register2("cover", { required: true })} placeholder="Image URL" />

                            <input type="submit" value="ADD NEW HOTEL" />
                        </form>
                    </div>
                </div>
            </div>

            {/* NEW TRANSPORT */}

            <img src={a4} className="banner" alt="" />
            <div className="banner-grid">
                <div>
                    <div className="new-package">
                        <h2 className="package-title">ADD NEW TRANSPORT</h2>
                        <form onSubmit={handleSubmit3(onSubmitTransport)}>

                            <input type="text" {...register3("company", { required: true, maxLength: 30 })} placeholder="Company name" />
                            <input type="text" {...register3("from", { required: true, maxLength: 30 })} placeholder="Starts From (Location)" />
                            <input type="text" {...register3("destination", { required: true, maxLength: 30 })} placeholder="Destination (Location)" />
                            <input type="text" {...register3("departure", { required: true })} placeholder="Departing Time" />
                            <input type="text" {...register3("arrival", { required: true })} placeholder="Arrival Time" />
                            <input type="text" {...register3("class", { required: true })} placeholder="Class (Business or Economy)" />
                            <input type="number" {...register3("fare", { required: true })} placeholder="Fare (Taka)" />
                            <input type="number" {...register3("type", { required: true })} placeholder="1-Bus, 2-cruise, 3-air" />

                            <input type="submit" value="ADD NEW TRANSPORT" />
                        </form>
                    </div>
                </div>
                <div className="login-info">
                    <img src={b4} />

                </div>
            </div>
        </>

    );
};

export default AddService;