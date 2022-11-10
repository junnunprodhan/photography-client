import React, { useState } from 'react';
import { toast } from 'react-toastify';

const SingleReview = ({r}) => {
    const {date,service,serviceImg,review,rating,}=r
    const [displayReview,setDisplayReview]=useState([r])

    
    const handleDelete = id=>{
        const agree =window.confirm('you want to delete')
        if(agree){
            fetch(`https://photography-server.vercel.app/myreview/${r._id}`,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then (data=>{
                if(data.deletedCount > 0){
                    
                    // const remainingReview =displayReview.filter(rev =>rev._id !== r._id)
                    // setDisplayReview(remainingReview)
                    toast.success('delete successfully')
                }
            })
        }
    }


    const handleUpdate =id=>{
        console.log('update',id)
    }

    return (
        <tr>
                <th>{date}</th>
                <td>{service}</td>
                <td> <img className='w-12 h-12' src={serviceImg} alt="" /></td>
                <td>{r.name? r.name : r.email}</td>
                <td><img className='w-12 h-12' src={r.img ? r.img : 'https://t3.ftcdn.net/jpg/05/14/18/46/360_F_514184651_W5rVCabKKRH6H3mVb62jYWfuXio8c8si.jpg'} alt="" /></td>
                <td>{review}</td>
                <td>{rating}</td>
                <td><button onClick={()=>handleUpdate(r._id)} className='btn btn-warning'>Update</button></td>
                <td><button onClick={()=>handleDelete(r._id)} className='btn btn-error'>Delete</button></td>
            </tr>
    );
};

export default SingleReview;