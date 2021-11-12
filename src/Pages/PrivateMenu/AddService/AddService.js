import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css'
const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/packages', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Package Added Successfully!');
                    reset();
                }
            })
    };
    return (
        <div className="add-service">
            <h1>this is add service</h1>
            <form onSubmit={handleSubmit(onSubmit)}>

                <input type="text" {...register("title", { required: true, maxLength: 20 })} placeholder="Package Name" />
                <textarea type="text" {...register("description", { required: true, maxLength: 200 })} placeholder="Details about the package" />
                <input type="number" {...register("fare", { required: true })} placeholder="Fare" />
                <input type="url" {...register("dp", { required: true })} placeholder="Image URL" />
                <input type="number" {...register("dd", { required: true })} placeholder="Number of Days" />
                <input type="number" {...register("nn", { required: true })} placeholder="Number of Nights" />

                <input type="submit" value="ADD NEW PACKAGE" />
            </form>
        </div>
    );
};

export default AddService;