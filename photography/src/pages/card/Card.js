import React from "react";
import { Link } from "react-router-dom";

const Card = ({service}) => {

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
        <span className="block text-xs my-2 font-xl tracking-widest uppercase dark:text-violet-400">
          ${service.price?service.price:service.time}
        </span>
        </h2>
      </div>
      <p className="dark:text-gray-100">
        {service.disc.slice(0,100)}...
      </p>
      <button
          type="button"
          className="flex items-center justify-center w-full p-3 mt-4 font-semibold tracking-wide rounded-md bg-gray-900 text-white"
        >
        <Link to={`/services/${service._id}`}>Read Details</Link>
        </button>

    </div>
  );
};

export default Card;
