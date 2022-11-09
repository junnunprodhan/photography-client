import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import useTitle from '../../hooks/useTitle';
import SingleReview from '../singleReview/SingleReview';

const MyReview = () => {
    useTitle('myreviews')
    const {user}=useContext(AuthContext)
    const email = user.email

    const[review,setReview]=useState([])

useEffect(()=>{
    fetch(`http://localhost:5000/myreview/${email}`)
    .then (res=>res.json())
    .then (data=>setReview(data))
},[])


    return (
        <div className='my-10 w-3/4 mx-auto'>
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
                            
                            {
                                review.map(r=><SingleReview key={r._id} r={r}></SingleReview>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyReview;