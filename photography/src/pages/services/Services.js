import React, { useEffect, useState } from 'react';
import Card from '../card/Card';






const Services = () => {

    const [services, setServices] = useState([])



useEffect(()=>{
    fetch('https://photography-server.vercel.app/services')
    .then (res=>res.json())
    .then (data=>setServices(data))
},[])



    return (
        <div className='grid grid-cols-3 gap-4 w-3/4 mx-auto'>
            {services.map(service=><Card service={service} key={service._id}></Card>)}
        </div>
    );
};

export default Services;