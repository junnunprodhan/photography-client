import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../contexts/AuthProvider";
import useTitle from "../../hooks/useTitle";
import SingleReview from "../singleReview/SingleReview";

const MyReview = () => {
  useTitle("myreviews");
  const { user } = useContext(AuthContext);
  const email = user.email;

  const [review, setReview] = useState([]);

  useEffect(() => {
    fetch(`https://photography-server.vercel.app/myreview/${email}`)
      .then((res) => res.json())
      .then((data) => setReview(data));
      
  }, [user?.email]);
  const handleDelete = id=>{
    const agree =window.confirm('you want to delete')
    if(agree){
        fetch(`https://photography-server.vercel.app/myreview/${id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then (data=>{
            if(data.deletedCount > 0){
              const remaining = review.filter(r => r._id !== id);
              setReview(remaining);
                toast.success('delete successfully')
            }
        })
    }
}

  return (
    <div className="my-10 w-3/4 mx-auto">
      {review.length === 0 ? (
        <>
          <h1 className="text-3xl text-center text-red-700 font-bold">
            NO review found...
          </h1>
        </>
      ) : (
        <>
          <div>
            <div className="overflow-x-auto">
              <table className="table w-full">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Service Name</th>
                    <th>Service image</th>
                    <th>User Name</th>
                    <th>user image</th>
                    <th>Review</th>
                    <th>rating</th>
                    <th>Update</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {review.map((r) => (
                    <SingleReview key={r._id} handleDelete={handleDelete} r={r}></SingleReview>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
      {/* <div>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Service Name</th>
                                <th>Service image</th>
                                <th>User Name</th>
                                <th>user image</th>
                                <th>Review</th>
                                <th>rating</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                            {
                                review.map(r=><SingleReview key={r._id} r={r}></SingleReview>)
                            }
                        </tbody>
                    </table>
                </div>
            </div> */}
    </div>
  );
};

export default MyReview;
