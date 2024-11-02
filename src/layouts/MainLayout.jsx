
import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import  { Toaster } from 'react-hot-toast';

const MainLayout = () => {
    return (
        <div>
            <Toaster></Toaster>
           {/* navabar */}
          <div className='h-16 mt-5'>
          <NavBar></NavBar>
          </div>
           {/* dynamic section */}
           <div className='min-h-[calc(100vh-232px)] container mx-auto px-8'>
            <Outlet></Outlet>
           </div>
           {/* Footer */}
           <Footer></Footer>
        </div>
    );
};

export default MainLayout;