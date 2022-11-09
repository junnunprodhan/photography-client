import React, { useEffect, useState } from "react";
import Card from "../card/Card";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://photography-server.vercel.app/services")
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
    </div>
  );
};

export default Services;
