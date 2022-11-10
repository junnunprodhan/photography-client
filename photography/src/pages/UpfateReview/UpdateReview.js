
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import useTitle from "../../hooks/useTitle";

const UpdateReview = () => {
  useTitle("UpdateReview");
  const updateReview = useLoaderData();
  const { rating, review } = updateReview;

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const review = form.review.value;
    const rating = form.rating.value;

    const date = new Date().toLocaleDateString();
    toast.success("review added successfully");

    const reviews = {
      review,
      rating,
      date,
    };
    fetch(`https://photography-server.vercel.app/update/${updateReview._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviews),
    })
      .then((res) => res.json())
      .then((data) => {
        event.target.reset();
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="your reviews"
          name="review"
          defaultValue={review}
          className="input input-bordered input-primary mb-4 w-full max-w-xs"
          required
        />
        <br />
        <input
          type="text"
          placeholder="rating"
          name="rating"
          defaultValue={rating}
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
  );
};

export default UpdateReview;
