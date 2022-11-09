import React from "react";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const Card = ({ service }) => {
  return (
    <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
      <PhotoProvider>
        <PhotoView src={service.img}>
          <img src={service.img} alt="" />
        </PhotoView>
      </PhotoProvider>

      <div className="mt-6 mb-2">
        <h2 className="text-xl font-semibold tracking-wide">
          {service.title}
          <span className="block text-xs my-2 font-xl tracking-widest uppercase dark:text-violet-400">
           Price : ${service.price ? service.price : service.time}
          </span>
        </h2>
      </div>
      <p className="dark:text-gray-100">{service.disc.slice(0, 100)}...</p>
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
