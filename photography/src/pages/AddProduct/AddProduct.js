import React, { useState } from 'react';
import { toast } from 'react-toastify';
import useTitle from '../../hooks/useTitle';

const AddProduct = () => {
    const [addService, setAddService]=useState({})
    useTitle('addService')
    
    const handleSubmit=event=>{
        event.preventDefault();
        const form= event.target;
        fetch('https://photography-server.vercel.app/services',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(addService)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            toast.success('Service added successfully')
            form.reset()
        })
    }
    const handleInputBlur=event=>{
        const FieldName=event.target.name;
        const FieldValue=event.target.value;
        console.log(FieldName, FieldValue);
        const newUser={...addService};
        newUser[FieldName]=FieldValue;
        setAddService(newUser);
        

    }



    return (
        <div className="hero mt-10 w-3/4 mx-auto rounded-3xl min-h-screen bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-violet-400 via-violet-500 to-indigo-500">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-gray-200">
                    <form onSubmit={handleSubmit} className="card-body">
                        <h1 className="text-5xl text-black font-bold">Add Service</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input onBlur={handleInputBlur} type="text" name='title' placeholder="name" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input onBlur={handleInputBlur} type="name" placeholder="price" name="price" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">PhotoUrl</span>
                            </label>
                            <input onBlur={handleInputBlur} type="text" name='img' placeholder="photoUrl" className="input input-bordered"  required/>
                        </div>
                        
                        <div className="form-control">
                            <label className="label">
                                <span  className="label-text">Description</span>
                            </label>
                            <input onBlur={handleInputBlur} type="text" placeholder="discription" name='disc' className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">Add Service</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;