import React from "react";

const Card = ({service}) => {
    console.log(service)
  return (
    <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
      <img
        src={service.img}
        alt=""
        className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
      />
      <div className="mt-6 mb-2">
        <h2 className="text-xl font-semibold tracking-wide">
          {service.title}
        <span className="block text-xs font-xl tracking-widest uppercase dark:text-violet-400">
          ${service.price?service.price:service.time}
        </span>
        </h2>
      </div>
      <p className="dark:text-gray-100">
        {service.disc.slice(0,100)}...
      </p>
      
    </div>
  );
};

export default Card;
