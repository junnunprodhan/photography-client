import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import ServiceReview from "../ServiceReview/ServiceReview";

const ServicesDetails = () => {
  const service = useLoaderData();
  const { user } = useContext(AuthContext);
  const [showReviews, setShowRiviews] = useState([]);
  const id = service._id;
  console.log(id);
  useEffect(() => {
    fetch(`http://localhost:5000/review/${service._id}`)
      .then((res) => res.json())
      .then((data) => setShowRiviews(data));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const review = form.review.value;
    const rating = form.rating.value;
    console.log(review, rating);
    const date = new Date().toLocaleDateString();

    const reviews = {
      name: user?.displayName,
      email: user?.email,
      img: user?.photoURL,
      review,
      rating,
      date,
      serviceId: service._id,
    };
    fetch("http://localhost:5000/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviews),
    })
      .then((res) => res.json())
      .then((data) => {
        // event.target.reset()
        console.log(data);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <div className="p-6 rounded-md w-3/4 h-full mt-10 mx-auto shadow-md dark:bg-gray-900 dark:text-gray-50">
        <img
          src={service.img}
          alt=""
          className="object-cover object-center w-full rounded-md h-full dark:bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <h2 className="text-xl font-semibold tracking-wide">
            {service.title}
            <span className="block text-xs font-xl tracking-widest uppercase dark:text-violet-400">
              ${service.price ? service.price : service.time}
            </span>
          </h2>
        </div>
        <p className="dark:text-gray-100">{service.disc}</p>
      </div>
      {
      user?.email?
      <>
      <div className="p-6 rounded-md w-full md:w-1/4 h-full mt-10 mx-auto shadow-md dark:bg-gray-900 dark:text-gray-50">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="your reviews"
            name="review"
            className="input input-bordered input-primary mb-4 w-full max-w-xs"
            required
          />
          <br />
          <input
            type="text"
            placeholder="rating"
            name="rating"
            className="input input-bordered input-primary w-full max-w-xs"
            required
          />
          <br />
          <button
            className="flex items-center justify-center w-full p-3 mt-4 font-semibold tracking-wide rounded-md bg-gray-900 text-white"
            type="submit"
          >
            add review
          </button>
        </form>
      </div>
      </>
      :<>
      <div>
        <h1 className="text-center my-10 text-black text-3xl">If you give review, please login first</h1>
        <button className="flex items-center justify-center mx-auto w-1/4 p-3 mt-4 font-semibold tracking-wide rounded-md bg-gray-900 text-white">
          <Link to='/login'>login</Link>
        </button>
      </div>
      </>
    }

      <div className="w-1/4 mx-auto">
        <>
          {showReviews?.map((showReview) => (
            <ServiceReview
              showReview={showReview}
              key={showReview._id}
            ></ServiceReview>
          ))}
        </>
      </div>
    </div>
  );
};

export default ServicesDetails;
