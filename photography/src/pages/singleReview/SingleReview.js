import React from 'react';

const SingleReview = ({r}) => {
    const {date,service,serviceImg,review,rating}=r
    return (
        <tr>
                <th>{date}</th>
                <td>{service}</td>
                <td> <img className='w-12 h-12' src={serviceImg} alt="" /></td>
                <td>{r.name? r.name : r.email}</td>
                <td><img className='w-12 h-12' src={r.img ? r.img : 'https://t3.ftcdn.net/jpg/05/14/18/46/360_F_514184651_W5rVCabKKRH6H3mVb62jYWfuXio8c8si.jpg'} alt="" /></td>
                <td>{review}</td>
                <td>{rating}</td>
                <td><button className='btn btn-warning'>Update</button></td>
                <td><button className='btn btn-error'>Delete</button></td>
            </tr>
    );
};

export default SingleReview;