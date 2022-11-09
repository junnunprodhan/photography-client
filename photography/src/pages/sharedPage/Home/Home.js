import React from 'react';
import useTitle from '../../../hooks/useTitle';
import HappyClient from '../../HappyClient/HappyClient';
import Header from '../../Header/Header';
import PhotoGallery from '../../PhotoGallery/PhotoGallery';
import Service from '../../Service/Service';


const Home = () => {
    useTitle('home')
    return (
        <div>
            <Header></Header>
            <Service></Service>
            <h1 className='text-center text-5xl mt-10'>Photo Gallery</h1>
            <PhotoGallery></PhotoGallery>
            <HappyClient></HappyClient>
        </div>
    );
};

export default Home;