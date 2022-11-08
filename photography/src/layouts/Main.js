import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/sharedPage/Footer.js/Footer';
import Navbar from '../pages/sharedPage/Navbar';


const Main = () => {
    return (
        <div>
          <Navbar></Navbar>
          <Outlet></Outlet>
          <Footer></Footer>  
        </div>
    );
};

export default Main;