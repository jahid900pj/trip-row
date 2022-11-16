import React from 'react';
import { FaUser } from "react-icons/fa";

const ReviewDetails = ({ review }) => {
    // console.log(review)
    return (
        <div className='d-flex align-items-center'>
            <div className=''>
                {
                    review?.photoURL ? <img style={{ height: '40px', borderRadius: '100%', width: '40px' }} src={review?.photoURL} alt='' title={review.displayName} /> : <FaUser></FaUser>
                }
            </div>
            <div className='ms-2'>
                <p className='m-0 p-0'><b>{review.displayName}</b></p>
                <p className='m-0 p-0'>{review.massage}</p>
            </div>


        </div>
    );
};

export default ReviewDetails;