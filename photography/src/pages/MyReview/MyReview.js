import React from 'react';
import useTitle from '../../hooks/useTitle';

const MyReview = () => {
    useTitle('myreviews')
    return (
        <div>
            <h1>this is my reviews</h1>
        </div>
    );
};

export default MyReview;