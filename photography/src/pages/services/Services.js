import React, { useEffect, useState } from 'react';






const Services = () => {

    const [services, setServices] = useState([])



useEffect(()=>{
    fetch('http://localhost:5000/services')
    .then (res=>res.json())
    .then (data=>setServices(data))
},[])



    return (
        <div>
            <h1>service {services.length}</h1>
        </div>
    );
};

export default Services;