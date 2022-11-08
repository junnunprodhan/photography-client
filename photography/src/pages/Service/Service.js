import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../card/Card';

const Service = () => {
    const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://photography-server.vercel.app/service")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
    return (
        <div>
     <div className="grid grid-col lg:grid-cols-3 gap-4 w-3/4 mx-auto my-10">
     {services.map((service) => (
        <Card service={service} key={service._id}></Card>
      ))}
     </div>

      <button
        type="button"
        className="flex items-center justify-center w-1/4 mx-auto p-3 mt-4 font-semibold tracking-wide rounded-md bg-gray-900 text-white"
      >
        <Link to="/services">Sell All Service</Link>
      </button>
    </div>
    );
};

export default Service;